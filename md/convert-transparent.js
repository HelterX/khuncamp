const sharp = require('sharp');
const path = require('path');

const inputPath = path.join(__dirname, 'images', 'KhunCamp Khun Camp Logo.jpg');
const imagesDir = path.join(__dirname, 'images');

async function removeBackgroundAndResize() {
  try {
    console.log('Creating transparent background versions...\n');

    // Read the original image and extract raw pixel data
    const { data, info } = await sharp(inputPath)
      .raw()
      .toBuffer({ resolveWithObject: true });

    // Create RGBA buffer with transparency
    const rgbaData = Buffer.alloc(info.width * info.height * 4);

    // Threshold for detecting black background (0-30 is very dark)
    const threshold = 25;

    for (let i = 0; i < data.length; i += 3) {
      const r = data[i];
      const g = data[i + 1];
      const b = data[i + 2];
      const pixelIndex = (i / 3) * 4;

      // Copy RGB values
      rgbaData[pixelIndex] = r;
      rgbaData[pixelIndex + 1] = g;
      rgbaData[pixelIndex + 2] = b;

      // Set alpha: transparent if near black, opaque otherwise
      if (r < threshold && g < threshold && b < threshold) {
        rgbaData[pixelIndex + 3] = 0; // transparent
      } else {
        rgbaData[pixelIndex + 3] = 255; // opaque
      }
    }

    // Create sharp image from RGBA data
    const transparentImage = sharp(rgbaData, {
      raw: {
        width: info.width,
        height: info.height,
        channels: 4,
      },
    });

    // HERO IMAGES - Transparent background
    await transparentImage.clone()
      .resize(1920, 1080, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({ quality: 85 })
      .toFile(
        path.join(imagesDir, 'KhunCamp-Logo-transparent-hero-1920.webp')
      );
    console.log('✓ Transparent Hero 1920px: KhunCamp-Logo-transparent-hero-1920.webp');

    await transparentImage.clone()
      .resize(1280, 720, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({ quality: 85 })
      .toFile(
        path.join(imagesDir, 'KhunCamp-Logo-transparent-hero-1280.webp')
      );
    console.log('✓ Transparent Hero 1280px: KhunCamp-Logo-transparent-hero-1280.webp');

    await transparentImage.clone()
      .resize(768, 432, {
        fit: 'contain',
        background: { r: 0, g: 0, b: 0, alpha: 0 },
      })
      .webp({ quality: 85 })
      .toFile(
        path.join(imagesDir, 'KhunCamp-Logo-transparent-hero-768.webp')
      );
    console.log('✓ Transparent Hero 768px: KhunCamp-Logo-transparent-hero-768.webp');

    // FAVICON SIZES - Transparent background
    const faviconSizes = [16, 32, 64, 192, 512];

    for (const size of faviconSizes) {
      await transparentImage.clone()
        .resize(size, size, {
          fit: 'contain',
          background: { r: 0, g: 0, b: 0, alpha: 0 },
        })
        .webp({ quality: 90 })
        .toFile(
          path.join(
            imagesDir,
            `KhunCamp-Logo-transparent-favicon-${size}.webp`
          )
        );
      console.log(
        `✓ Transparent Favicon ${size}px: KhunCamp-Logo-transparent-favicon-${size}.webp`
      );
    }

    console.log('\n✅ All transparent versions created successfully!');
    console.log('\n📋 Transparent versions created:');
    console.log('   Heroes: 1920px, 1280px, 768px');
    console.log('   Favicons: 16, 32, 64, 192, 512px');
    console.log('   Black background removed, interior black preserved');

  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
}

removeBackgroundAndResize();
