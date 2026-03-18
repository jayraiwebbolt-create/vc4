import { useState, useRef, useEffect } from 'react';
import { supabase, type FileRecord } from '../lib/supabase';
import { shouldCompress, compressFile, formatFileSize } from '../lib/compression';

interface UploadStatus {
  fileName: string;
  status: 'uploading' | 'compressing' | 'success' | 'error';
  message?: string;
  originalSize?: number;
  finalSize?: number;
}

export default function FileUpload() {
  const [files, setFiles] = useState<FileRecord[]>([]);
  const [uploadStatuses, setUploadStatuses] = useState<UploadStatus[]>([]);
  const [loading, setLoading] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadFiles = async () => {
    const { data, error } = await supabase
      .from('files')
      .select('*')
      .order('created_at', { ascending: false });

    if (!error && data) {
      setFiles(data);
    }
  };

  useEffect(() => {
    loadFiles();
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
  };

  const handleFileSelect = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = Array.from(e.target.files || []);
    if (selectedFiles.length === 0) return;

    setLoading(true);
    const statuses: UploadStatus[] = selectedFiles.map(file => ({
      fileName: file.name,
      status: 'uploading',
      originalSize: file.size,
    }));
    setUploadStatuses(statuses);

    for (let i = 0; i < selectedFiles.length; i++) {
      const file = selectedFiles[i];
      try {
        const originalSize = file.size;
        let finalFile = file;
        let wasCompressed = false;

        if (shouldCompress(file)) {
          setUploadStatuses(prev => prev.map((s, idx) =>
            idx === i ? { ...s, status: 'compressing' } : s
          ));

          finalFile = await compressFile(file);
          wasCompressed = finalFile.size < originalSize;
        }

        setUploadStatuses(prev => prev.map((s, idx) =>
          idx === i ? { ...s, status: 'uploading', finalSize: finalFile.size } : s
        ));

        const { data: { user } } = await supabase.auth.getUser();
        if (!user) throw new Error('Not authenticated');

        const fileExt = file.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;
        const filePath = `${user.id}/${fileName}`;

        const { error: uploadError } = await supabase.storage
          .from('uploads')
          .upload(filePath, finalFile);

        if (uploadError) throw uploadError;

        const { error: dbError } = await supabase.from('files').insert({
          user_id: user.id,
          original_name: file.name,
          storage_path: filePath,
          original_size: originalSize,
          compressed_size: wasCompressed ? finalFile.size : null,
          was_compressed: wasCompressed,
          mime_type: file.type,
        });

        if (dbError) throw dbError;

        setUploadStatuses(prev => prev.map((s, idx) =>
          idx === i
            ? {
                ...s,
                status: 'success',
                message: wasCompressed
                  ? `Compressed from ${formatFileSize(originalSize)} to ${formatFileSize(finalFile.size)}`
                  : 'Uploaded successfully',
              }
            : s
        ));
      } catch (error: any) {
        setUploadStatuses(prev => prev.map((s, idx) =>
          idx === i
            ? { ...s, status: 'error', message: error.message }
            : s
        ));
      }
    }

    await loadFiles();
    setLoading(false);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const handleDelete = async (file: FileRecord) => {
    try {
      const { error: storageError } = await supabase.storage
        .from('uploads')
        .remove([file.storage_path]);

      if (storageError) throw storageError;

      const { error: dbError } = await supabase
        .from('files')
        .delete()
        .eq('id', file.id);

      if (dbError) throw dbError;

      await loadFiles();
    } catch (error: any) {
      alert('Delete failed: ' + error.message);
    }
  };

  const handleDownload = async (file: FileRecord) => {
    try {
      const { data, error } = await supabase.storage
        .from('uploads')
        .download(file.storage_path);

      if (error) throw error;

      const url = URL.createObjectURL(data);
      const a = document.createElement('a');
      a.href = url;
      a.download = file.original_name;
      a.click();
      URL.revokeObjectURL(url);
    } catch (error: any) {
      alert('Download failed: ' + error.message);
    }
  };

  return (
    <div className="upload-container">
      <div className="header">
        <h1>File Upload Manager</h1>
        <button className="sign-out-button" onClick={handleSignOut}>
          Sign Out
        </button>
      </div>

      <div className="upload-section">
        <div className="upload-box">
          <input
            ref={fileInputRef}
            type="file"
            multiple
            onChange={handleFileSelect}
            disabled={loading}
            id="file-input"
            className="file-input"
          />
          <label htmlFor="file-input" className="upload-label">
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
              <polyline points="17 8 12 3 7 8" />
              <line x1="12" y1="3" x2="12" y2="15" />
            </svg>
            <span>Click to upload files</span>
            <span className="hint">Files over 5MB will be compressed automatically</span>
          </label>
        </div>

        {uploadStatuses.length > 0 && (
          <div className="upload-statuses">
            {uploadStatuses.map((status, idx) => (
              <div key={idx} className={`status-item status-${status.status}`}>
                <div className="status-header">
                  <span className="file-name">{status.fileName}</span>
                  <span className="status-badge">{status.status}</span>
                </div>
                {status.message && (
                  <div className="status-message">{status.message}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>

      <div className="files-section">
        <h2>Your Files</h2>
        {files.length === 0 ? (
          <p className="no-files">No files uploaded yet</p>
        ) : (
          <div className="files-grid">
            {files.map((file) => (
              <div key={file.id} className="file-card">
                <div className="file-info">
                  <div className="file-name">{file.original_name}</div>
                  <div className="file-details">
                    <span>{formatFileSize(file.original_size)}</span>
                    {file.was_compressed && file.compressed_size && (
                      <span className="compressed-badge">
                        Compressed to {formatFileSize(file.compressed_size)}
                      </span>
                    )}
                  </div>
                  <div className="file-date">
                    {new Date(file.created_at).toLocaleDateString()}
                  </div>
                </div>
                <div className="file-actions">
                  <button
                    className="action-button download"
                    onClick={() => handleDownload(file)}
                  >
                    Download
                  </button>
                  <button
                    className="action-button delete"
                    onClick={() => handleDelete(file)}
                  >
                    Delete
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
