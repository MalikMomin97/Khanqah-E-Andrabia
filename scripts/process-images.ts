import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

interface ImageVariant {
  width: number;
  height: number;
  path: string;
  format: 'webp';
  sizeBytes: number;
}

interface ImageMetadata {
  id: string;
  filename: string;
  originalPath: string;
  title: string;
  subtitle: string;
  aspectRatio: string;
  dimensions: { width: number; height: number };
  base64Placeholder: string;
  variants: ImageVariant[];
  srcSet: string;
}

const inputDir = path.resolve('assets/images');
const publicImagesDir = path.resolve('public/images/optimized');
const outputManifestPath = path.resolve('src/data/imagesManifest.json');

// Ensure destination directories exist
fs.mkdirSync(publicImagesDir, { recursive: true });
fs.mkdirSync(path.dirname(outputManifestPath), { recursive: true });

const TARGET_WIDTHS = [400, 800, 1200, 1600];

const IMAGE_DETAILS: Record<string, { title: string; subtitle: string }> = {
  'khanqah-1.jpg': {
    title: 'Plate I: Alpine Backdrop & Winter Sanctuary',
    subtitle: 'Khanaqah E Andrabia framed beneath the snow-covered peaks of the Zabarwan ridge in Sonwar Bagh.'
  },
  'khanqah-2.jpg': {
    title: 'Plate II: The Pagoda Spire & Golden Finial',
    subtitle: 'Close architectural study of the Kashmiri wooden lantern pagoda (Burj) capped by the golden crescent (Alam).'
  },
  'khanqah-3.jpg': {
    title: 'Plate III: Summer Garden Facade & Verandah',
    subtitle: 'Verdant summer panorama showing the deodar timber lattice joinery and entrance verandah.'
  },
  'astaan-hero.jpg': {
    title: 'Astaan Hazrat Mir Syed Kamal-ud-Din Andrabi (R.A.) - Sonwar Srinagar',
    subtitle: 'The historic Kashmiri deodar timber facade and peaceful prayer sanctuary in Sonwar Bagh, Srinagar.'
  },
  'historical-document-shajarah.jpg': {
    title: 'Certified Historical Document & Genealogical Tree',
    subtitle: 'Framed archival chronicle titled "Hazrat Mir Syed Kamal-ud-Din Andrabi: In the Mirror of Kashmir History & Awliya Allah" with 8-generation lineage and Wisal record.'
  }
};

async function processAllImages() {
  console.log('🚀 Running Sharp Image Pipeline...');
  const files = fs.readdirSync(inputDir).filter(f => /\.(jpe?g|png)$/i.test(f));
  
  const manifest: Record<string, ImageMetadata> = {};

  for (const file of files) {
    const filePath = path.join(inputDir, file);
    const id = path.parse(file).name;
    const metadata = await sharp(filePath).metadata();
    const originalWidth = metadata.width || 1200;
    const originalHeight = metadata.height || 800;

    console.log(`Processing: ${file} (${originalWidth}x${originalHeight})`);

    // Copy original to public/images/
    const publicOriginalDir = path.resolve('public/images');
    fs.mkdirSync(publicOriginalDir, { recursive: true });
    fs.copyFileSync(filePath, path.join(publicOriginalDir, file));

    // Generate low-quality micro preview base64
    const microBuffer = await sharp(filePath)
      .resize(24, Math.round((24 * originalHeight) / originalWidth))
      .webp({ quality: 20 })
      .toBuffer();
    const base64Placeholder = `data:image/webp;base64,${microBuffer.toString('base64')}`;

    const variants: ImageVariant[] = [];
    const srcSetEntries: string[] = [];

    // Filter target widths so we don't upscale
    const applicableWidths = TARGET_WIDTHS.filter(w => w <= originalWidth);
    if (!applicableWidths.includes(originalWidth)) {
      applicableWidths.push(originalWidth);
    }
    applicableWidths.sort((a, b) => a - b);

    for (const w of applicableWidths) {
      const outFilename = `${id}-${w}w.webp`;
      const outPath = path.join(publicImagesDir, outFilename);

      const targetHeight = Math.round((w * originalHeight) / originalWidth);

      await sharp(filePath)
        .resize(w, targetHeight, { fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85, effort: 6 })
        .toFile(outPath);

      const stats = fs.statSync(outPath);
      const webPath = `/images/optimized/${outFilename}`;

      variants.push({
        width: w,
        height: targetHeight,
        path: webPath,
        format: 'webp',
        sizeBytes: stats.size
      });

      srcSetEntries.push(`${webPath} ${w}w`);
    }

    manifest[id] = {
      id,
      filename: file,
      originalPath: `/images/${file}`,
      title: IMAGE_DETAILS[file]?.title || id,
      subtitle: IMAGE_DETAILS[file]?.subtitle || 'Khanaqah E Andrabia Architectural Plate',
      aspectRatio: `${originalWidth}/${originalHeight}`,
      dimensions: { width: originalWidth, height: originalHeight },
      base64Placeholder,
      variants,
      srcSet: srcSetEntries.join(', ')
    };
  }

  fs.writeFileSync(outputManifestPath, JSON.stringify(manifest, null, 2), 'utf-8');
  console.log(`✅ Automated JSON manifest generated at: ${outputManifestPath}`);
}

processAllImages().catch(err => {
  console.error('Error processing images:', err);
  process.exit(1);
});
