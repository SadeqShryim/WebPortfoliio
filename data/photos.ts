// data/photos.ts
export type Photo = {
  caption: string;  // Short description
  thumb: string;    // Small JPG/WEBP under /public/photos/thumbs/
  full: string;     // High-res version under /public/photos/full/
};

export const photos: Photo[] = [
  {
    caption: "Skipping stones on Lake Michigan",
    thumb: "/photos/thumbs/beach-thumb.jpg",
    full:  "/photos/full/beach-full.jpg",
  },
  {
    caption: "Currently reading: Reality Transurfing",
    thumb: "/photos/thumbs/book-thumb.jpg",
    full:  "/photos/full/book-full.jpg",
  },
];
