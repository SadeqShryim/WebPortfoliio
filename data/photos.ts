// data/photos.ts
export type Photo = {
  caption: string;  // Short description
  thumb: string;    // Small JPG/WEBP under /public/photos/thumbs/
  full: string;     // High-res version under /public/photos/full/
};

export const photos: Photo[] = [
  {
    caption: "Sunset over Lake Erie",
    thumb: "/photos/thumbs/erie-sunset.jpg",
    full: "/photos/full/erie-sunset.jpg",
  },
  // 👉 add more photos here
];
