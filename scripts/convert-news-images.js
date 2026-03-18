/**
 * Converts DNG images in public/news/ to JPG for web display.
 * Run with: node scripts/convert-news-images.js
 */
import sharp from 'sharp';
import { readdir, mkdir } from 'fs/promises';
import { join, extname } from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const newsDir = join(__dirname, '..', 'public', 'news');

async function convertImages() {
  try {
    const files = await readdir(newsDir);
    const dngFiles = files.filter((f) => extname(f).toLowerCase() === '.dng');

    if (dngFiles.length === 0) {
      console.log('No DNG files found in public/news/');
      return;
    }

    console.log(`Converting ${dngFiles.length} DNG files to JPG...`);

    for (const file of dngFiles) {
      const inputPath = join(newsDir, file);
      const baseName = file.replace(/\.dng$/i, '');
      const outputPath = join(newsDir, `${baseName}.jpg`);

      try {
        await sharp(inputPath)
          .rotate() // Auto-orient based on EXIF (removes rotation, outputs straight)
          .jpeg({ quality: 85 })
          .toFile(outputPath);
        console.log(`  ✓ ${file} -> ${baseName}.jpg`);
      } catch (err) {
        console.error(`  ✗ ${file}: ${err.message}`);
      }
    }

    console.log('Done!');
  } catch (err) {
    console.error('Error:', err.message);
  }
}

convertImages();
