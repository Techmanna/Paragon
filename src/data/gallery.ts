export interface GalleryItem {
  id: string;
  url: string;
  type: 'image' | 'video';
  className: string;
  title?: string;
  category: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "12fox",
    url: "/gallery/item_1.jpg",
    type: "image",
    className: "col-span-2 row-span-2",
    title: "Community Training",
    category: "Training"
  },
  {
    id: "12BFw",
    url: "/gallery/item_2.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
    title: "Mentorship",
    category: "Community"
  },
  {
    id: "1ha7",
    url: "/gallery/item_3.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
    title: "Hackathon",
    category: "Innovation"
  },
  {
    id: "1nEs",
    url: "/gallery/item_4.jpg",
    type: "image",
    className: "col-span-2 row-span-1",
    title: "Demo Day Winners",
    category: "Events"
  },
  {
    id: "1oxs",
    url: "/gallery/item_5.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
    title: "Partner Meetup",
    category: "Partnerships"
  },
  {
    id: "19Mo",
    url: "/gallery/item_6.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
    category: "Programmes"
  },
  {
    id: "1KFh",
    url: "/gallery/item_7.jpg",
    type: "image",
    className: "col-span-2 row-span-1",
    category: "Community"
  },
  {
    id: "1WVO",
    url: "/gallery/item_8.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
    category: "Training"
  },
  {
    id: "1ELY",
    url: "/gallery/item_9.jpg",
    type: "image",
    className: "col-span-1 row-span-1",
    category: "Innovation"
  },
  {
    id: "1DCH",
    url: "/gallery/item_10.jpg",
    type: "image",
    className: "col-span-2 row-span-2",
    category: "Events"
  },
  {
    id: "1GVE",
    url: "/gallery/item_11.jpg",
    type: "image",
    className: "col-span-2 row-span-1",
    category: "Partnerships"
  },
];

export const _3MTTVideoUrl = "https://drive.google.com/file/d/1KUu0dkjjfnMM07SfoHRUX6xP2xFvJJei/preview";