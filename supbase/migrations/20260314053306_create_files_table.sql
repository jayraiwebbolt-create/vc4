/*
  # Create files tracking table

  1. New Tables
    - `files`
      - `id` (uuid, primary key)
      - `user_id` (uuid, references auth.users)
      - `original_name` (text) - Original filename
      - `storage_path` (text) - Path in Supabase Storage
      - `original_size` (bigint) - Original file size in bytes
      - `compressed_size` (bigint) - Compressed file size in bytes (null if not compressed)
      - `was_compressed` (boolean) - Whether the file was compressed
      - `mime_type` (text) - File MIME type
      - `created_at` (timestamptz)
  
  2. Security
    - Enable RLS on `files` table
    - Add policy for authenticated users to insert their own files
    - Add policy for authenticated users to read their own files
    - Add policy for authenticated users to delete their own files

  3. Storage
    - Create a storage bucket for file uploads
*/

CREATE TABLE IF NOT EXISTS files (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  original_name text NOT NULL,
  storage_path text NOT NULL,
  original_size bigint NOT NULL,
  compressed_size bigint,
  was_compressed boolean DEFAULT false,
  mime_type text,
  created_at timestamptz DEFAULT now()
);

ALTER TABLE files ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can insert own files"
  ON files
  FOR INSERT
  TO authenticated
  WITH CHECK (auth.uid() = user_id);

CREATE POLICY "Users can read own files"
  ON files
  FOR SELECT
  TO authenticated
  USING (auth.uid() = user_id);

CREATE POLICY "Users can delete own files"
  ON files
  FOR DELETE
  TO authenticated
  USING (auth.uid() = user_id);

INSERT INTO storage.buckets (id, name, public)
VALUES ('uploads', 'uploads', false)
ON CONFLICT (id) DO NOTHING;

CREATE POLICY "Users can upload own files"
  ON storage.objects
  FOR INSERT
  TO authenticated
  WITH CHECK (
    bucket_id = 'uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can read own files"
  ON storage.objects
  FOR SELECT
  TO authenticated
  USING (
    bucket_id = 'uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );

CREATE POLICY "Users can delete own files"
  ON storage.objects
  FOR DELETE
  TO authenticated
  USING (
    bucket_id = 'uploads' AND
    auth.uid()::text = (storage.foldername(name))[1]
  );
