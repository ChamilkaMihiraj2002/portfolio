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
    title: "All About CI/CD Pipelines - Making Software Delivery Smooth and Fast",
    link: "https://medium.com/@chamilkaperera5/all-about-ci-cd-pipelines-making-software-delivery-smooth-and-fast-505c99372f84",
    year: "2025",
    venue: "Medium articles",
  },
  {
    id: "pub-2025-meal-ml",
    title: "Numpy - python open source library",
    link: "https://medium.com/@chamilkaperera5/numpy-short-for-numerical-python-is-a-widely-used-open-source-library-in-the-python-programming-547d8e9169b8",
    year: "2024",
    venue: "Medium articles",
  },
  {
    id: "pub-2025-meal-ml",
    title: "Unleashing GPU Power",
    link: "https://medium.com/@chamilkaperera5/unleashing-gpu-power-navigating-onboard-vs-a651b67e91af",
    year: "2023",
    venue: "Medium articles",
  },
  {
    id: "pub-2025-meal-ml",
    title: "Exploring ALU, CU, Register Memory, Cache, and CPU Speed",
    link: "https://medium.com/@chamilkaperera5/numpy-short-for-numerical-python-is-a-widely-used-open-source-library-in-the-python-programming-547d8e9169b8",
    year: "2023",
    venue: "Medium articles",
  },
];
