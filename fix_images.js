const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'components', 'data', 'data.json');
const galleryDir = path.join(__dirname, 'public', 'gallery');

const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);
const galleryData = data.categories.Event.sections.Gallery.variants.Gallery1;

const additionalPhotos = [
  {
    id: "p9",
    src: "https://images.unsplash.com/photo-1519741497674-611481863552?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Beautiful Wedding Arch",
    category: "Weddings"
  },
  {
    id: "p10",
    src: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Corporate Seminar",
    category: "Corporate Events"
  },
  {
    id: "p11",
    src: "https://images.unsplash.com/photo-1478146896981-b80fe463b330?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Outdoor Engagement",
    category: "Engagements"
  },
  {
    id: "p12",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    alt: "Private Celebration",
    category: "Private Parties"
  }
];

async function downloadImage(url, filename) {
  const dest = path.join(galleryDir, filename);
  const response = await fetch(url, { headers: { "User-Agent": "Mozilla/5.0" } });
  if (!response.ok) throw new Error(`Unexpected response ${response.statusText}`);
  const arrayBuffer = await response.arrayBuffer();
  const buffer = Buffer.from(arrayBuffer);
  fs.writeFileSync(dest, buffer);
}

async function main() {
  console.log('Adding and downloading additional photos...');
  for (let i = 0; i < additionalPhotos.length; i++) {
    const photo = additionalPhotos[i];
    const filename = `photo${8 + i + 1}.jpg`; // photo9 to photo12
    
    // Check if it's already in the list
    if (!galleryData.photoGallery.photos.find(p => p.id === photo.id)) {
      console.log(`Downloading ${filename}...`);
      await downloadImage(photo.src, filename);
      photo.src = `/gallery/${filename}`;
      galleryData.photoGallery.photos.push(photo);
    }
  }

  fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
  console.log('Finished updating data.json with local image paths.');
}

main();
