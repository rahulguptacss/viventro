const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, 'components', 'data', 'data.json');
const rawData = fs.readFileSync(dataPath, 'utf-8');
const data = JSON.parse(rawData);

const galleryData = {
  variants: {
    Gallery1: {
      photoGallery: {
        subtitle: "OUR GALLERY",
        titlePart1: "Moments We",
        titleHighlight: "Create, Memories",
        titlePart2: "We Cherish",
        categories: [
          "All Events",
          "Weddings",
          "Engagements",
          "Birthdays",
          "Corporate Events",
          "Private Parties"
        ],
        photos: [
          {
            id: "p1",
            src: "/gallery/photo1.jpg",
            alt: "Beach Wedding Setup",
            category: "Weddings"
          },
          {
            id: "p2",
            src: "/gallery/photo2.jpg",
            alt: "Dinner Table Setup",
            category: "Corporate Events"
          },
          {
            id: "p3",
            src: "/gallery/photo3.jpg",
            alt: "Night Event Stage",
            category: "Engagements"
          },
          {
            id: "p4",
            src: "/gallery/photo4.jpg",
            alt: "Indoor Stage Decor",
            category: "Private Parties"
          },
          {
            id: "p5",
            src: "/gallery/photo5.jpg",
            alt: "Garden Party Area",
            category: "Birthdays"
          },
          {
            id: "p6",
            src: "/gallery/photo6.jpg",
            alt: "Floral Backdrop",
            category: "Weddings"
          },
          {
            id: "p7",
            src: "/gallery/photo7.jpg",
            alt: "Long Dinner Table",
            category: "Corporate Events"
          },
          {
            id: "p8",
            src: "/gallery/photo8.jpg",
            alt: "Night Lights Decor",
            category: "Engagements"
          },
          {
            id: "p9",
            src: "/gallery/photo9.jpg",
            alt: "Stage Performance",
            category: "Private Parties"
          },
          {
            id: "p10",
            src: "/gallery/photo10.jpg",
            alt: "Birthday Cake Setup",
            category: "Birthdays"
          },
          {
            id: "p11",
            src: "/gallery/photo11.jpg",
            alt: "Outdoor Reception",
            category: "Weddings"
          },
          {
            id: "p12",
            src: "/gallery/photo12.jpg",
            alt: "Corporate Seminar",
            category: "Corporate Events"
          }
        ],
        loadMoreText: "Load More Photos"
      },
      videoGallery: {
        subtitle: "OUR GALLERY",
        titlePart1: "Video",
        titleHighlight: "Gallery",
        videos: [
          {
            id: "v1",
            thumbnail: "/gallery/video1.jpg",
            alt: "Party Concert",
            videoUrl: "https://www.youtube.com/embed/0M3uF7qgG4w?autoplay=1"
          },
          {
            id: "v2",
            thumbnail: "/gallery/video2.jpg",
            alt: "Wedding Venue",
            videoUrl: "https://www.youtube.com/embed/0M3uF7qgG4w?autoplay=1"
          },
          {
            id: "v3",
            thumbnail: "/gallery/video3.jpg",
            alt: "Stage Event",
            videoUrl: "https://www.youtube.com/embed/0M3uF7qgG4w?autoplay=1"
          },
          {
            id: "v4",
            thumbnail: "/gallery/video4.jpg",
            alt: "Dinner Gathering",
            videoUrl: "https://www.youtube.com/embed/0M3uF7qgG4w?autoplay=1"
          }
        ]
      }
    }
  }
};

data.categories.Event.sections.Gallery = galleryData;

fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf-8');
console.log('Gallery data added successfully.');
