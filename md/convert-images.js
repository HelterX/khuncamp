const sharp = require('sharp');
const path = require('path');
const fs = require('fs');

const inputPath = path.join(__dirname, 'images', 'KhunCamp Khun Camp Logo.jpg');
const imagesDir = path.join(__dirname, 'images');

async function convertAndResize() {
  try {
    console.log('Starting image conversion and resizing...\n');

    // 1. Convert original to WebP (already exists, but ensure quality)
    await sharp(inputPath)
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-original.webp'));
    console.log('✓ Original WebP: KhunCamp-Logo-original.webp (1024x1024)');

    // 2. Hero image sizes (landscape aspect ratio - 16:9)
    // Large hero (desktop)
    await sharp(inputPath)
      .resize(1920, 1080, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
      .webp({ quality: 85 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-hero-1920.webp'));
    console.log('✓ Hero 1920px: KhunCamp-Logo-hero-1920.webp (1920x1080)');

    // Medium hero (tablet)
    await sharp(inputPath)
      .resize(1280, 720, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
      .webp({ quality: 85 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-hero-1280.webp'));
    console.log('✓ Hero 1280px: KhunCamp-Logo-hero-1280.webp (1280x720)');

    // Small hero (mobile)
    await sharp(inputPath)
      .resize(768, 432, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
      .webp({ quality: 85 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-hero-768.webp'));
    console.log('✓ Hero 768px: KhunCamp-Logo-hero-768.webp (768x432)');

    // 3. Favicon sizes (square)
    const faviconSizes = [16, 32, 64, 192, 512];

    for (const size of faviconSizes) {
      await sharp(inputPath)
        .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
        .webp({ quality: 90 })
        .toFile(path.join(imagesDir, `KhunCamp-Logo-favicon-${size}.webp`));
      console.log(`✓ Favicon ${size}px: KhunCamp-Logo-favicon-${size}.webp`);
    }

    // 4. Create Apple icon (180x180 - iOS)
    await sharp(inputPath)
      .resize(180, 180, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 1 } })
      .webp({ quality: 90 })
      .toFile(path.join(imagesDir, 'KhunCamp-Logo-apple-180.webp'));
    console.log('✓ Apple icon 180px: KhunCamp-Logo-apple-180.webp (iOS)');

    console.log('\n✅ All images converted and optimised successfully!');
    console.log('\n📋 File summary:');
    console.log('   Heroes: 1920px (desktop), 1280px (tablet), 768px (mobile)');
    console.log('   Favicons: 16, 32, 64, 192, 512px');
    console.log('   Apple icon: 180px');

  } catch (error) {
    console.error('Error during conversion:', error);
    process.exit(1);
  }
}

convertAndResize();
