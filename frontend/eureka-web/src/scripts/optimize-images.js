import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const inputDir = path.join(__dirname, '../assets/original');
const outputDir = path.join(__dirname, '../assets/optimized');

const sizes = [400, 800, 1200, 1600, 2400];
const formats = ['webp', 'avif'];

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

fs.readdirSync(inputDir).forEach((file) => {
  const ext = path.extname(file).toLowerCase();

  if (!['.png', '.jpg', '.jpeg'].includes(ext)) return;

  const inputPath = path.join(inputDir, file);
  const name = path.parse(file).name;

  sizes.forEach((size) => {
    formats.forEach((format) => {
      const outputPath = path.join(outputDir, `${name}-${size}.${format}`);

      if (fs.existsSync(outputPath)) return;

      sharp(inputPath)
        .resize({
          width: size,
          fit: 'inside',    
          withoutEnlargement: true,
        })
        .toFormat(format, {
          quality: format === 'avif' ? 65 : 88,
        })
        .toFile(outputPath)
        .then(() => console.log(`Created: ${outputPath}`))
        .catch((err) => console.error(err));
    });
  });
});
