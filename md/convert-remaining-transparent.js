const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'images', 'KhunCamp Khun Camp Logo.jpg');
const imagesDir = path.join(__dirname, 'images');

async function createRemainingTransparent() {
  try {
    console.log('Creating transparent versions for remaining logo files...\n');

    // Read the original image and extract raw pixel data
    const { data, info } = await sharp(inputPath)
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Create RGBA buffer with transparency
    const rgbaData = Buffer.alloc(info.width * info.height * 4);
    const threshold = 25;

    for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const pixelIndex = (i / 3) * 4;

      rgbaData[pixelIndex] = r;
      rgbaData[pixelIndex + 1] = g;
      rgbaData[pixelIndex + 2] = b;

      if (r < threshold && g < threshold && b < threshold) {
        rgbaData[pixelIndex + 3] = 0;
      } else {
        rgbaData[pixelIndex + 3] = 255;
      }
    }

    const transparentImage = sharp(rgbaData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    });

    // Original size (1024x1024)
    await transparentImage.clone()
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-original.webp'));
    console.log('✓ Transparent Original 1024px: KhunCamp-Logo-original.webp');

    // Apple icon (180x180)
    await transparentImage.clone()
      .resize(180, 180, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-apple-180.webp'));
    console.log('✓ Transparent Apple 180px: KhunCamp-Logo-apple-180.webp');

    // Header size (optimized small)
    await transparentImage.clone()
      .resize(256, 256, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-Header.webp'));
    console.log('✓ Transparent Header 256px: KhunCamp-Logo-Header.webp');

    console.log('\n✅ All remaining files updated to transparent versions!');

  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
}

createRemainingTransparent();
