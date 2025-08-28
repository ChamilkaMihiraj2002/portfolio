// src/data/publications.ts
export type Publication = {
  id: string;
  title: string;
  link?: string;
  year?: string;
  venue?: string;
};

export const publications: Publication[] = [
  {
    id: "pub-2024-vision-agri",
    title: "Research on Computer Vision in Smart Agriculture",
    link: "#",
    year: "2024",
    venue: "International Journal of AgriTech",
  },
  {
    id: "pub-2025-meal-ml",
    title: "Optimizing Meal Token Allocation with ML",
    link: "#",
    year: "2025",
    venue: "ACM Student Research Conference",
  },
];
