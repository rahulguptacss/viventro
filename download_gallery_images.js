const fs = require('fs');
const path = require('path');
const https = require('https');

const dataPath = path.join(__dirname, 'components', 'data', 'data.json');
const galleryDir = path.join(__dirname, 'public', 'gallery');

if (!fs.existsSync(galleryDir)) {
  fs.mkdirSync(galleryDir, { recursive: true });
}

const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);
const galleryData = data.categories.Event.sections.Gallery.variants.Gallery1;

function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const dest = path.join(galleryDir, filename);
    const file = fs.createWriteStream(dest);
    https.get(url, (response) => {
      // Handle redirects
      if (response.statusCode === 301 || response.statusCode === 302) {
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on('finish', () => {
            file.close(resolve);
          });
        }).on('error', (err) => {
          fs.unlink(dest, () => reject(err));
        });
      } else {
        response.pipe(file);
        file.on('finish', () => {
          file.close(resolve);
        });
      }
    }).on('error', (err) => {
      fs.unlink(dest, () => reject(err));
    });
  });
}

async function main() {
  console.log('Downloading photo gallery images...');
  for (let i = 0; i < galleryData.photoGallery.photos.length; i++) {
    const photo = galleryData.photoGallery.photos[i];
    const filename = `photo${i + 1}.jpg`;
    console.log(`Downloading ${filename}...`);
    try {
      await downloadImage(photo.src, filename);
      photo.src = `/gallery/${filename}`;
    } catch (e) {
      console.error(`Failed to download ${filename}:`, e);
    }
  }

  console.log('Downloading video gallery thumbnails...');
  for (let i = 0; i < galleryData.videoGallery.videos.length; i++) {
    const video = galleryData.videoGallery.videos[i];
    const filename = `video${i + 1}.jpg`;
    console.log(`Downloading ${filename}...`);
    try {
      await downloadImage(video.thumbnail, filename);
      video.thumbnail = `/gallery/${filename}`;
    } catch (e) {
      console.error(`Failed to download ${filename}:`, e);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('Finished updating data.json with local image paths.');
}

main();
