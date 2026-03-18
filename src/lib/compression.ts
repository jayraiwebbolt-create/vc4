import imageCompression from 'browser-image-compression';

const MAX_SIZE_BYTES = 5 * 1024 * 1024;

export const shouldCompress = (file: File): boolean => {
  return file.size > MAX_SIZE_BYTES && file.type.startsWith('image/');
};

export const compressFile = async (file: File): Promise<File> => {
  if (!file.type.startsWith('image/')) {
    return file;
  }

  const options = {
    maxSizeMB: 5,
    maxWidthOrHeight: 1920,
    useWebWorker: true,
    fileType: file.type,
  };

  try {
    const compressedFile = await imageCompression(file, options);
    return new File([compressedFile], file.name, {
      type: file.type,
      lastModified: Date.now(),
    });
  } catch (error) {
    console.error('Compression failed:', error);
    return file;
  }
};

export const formatFileSize = (bytes: number): string => {
  if (bytes === 0) return '0 Bytes';
  const k = 1024;
  const sizes = ['Bytes', 'KB', 'MB', 'GB'];
  const i = Math.floor(Math.log(bytes) / Math.log(k));
  return Math.round(bytes / Math.pow(k, i) * 100) / 100 + ' ' + sizes[i];
};
