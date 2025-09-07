// src/data/publications.ts
import cicdImg from "../images/publicantions/cicd.webp";
import numpyImg from "../images/publicantions/numpy.webp";
import gpuImg from "../images/publicantions/gpu.webp";
import cpuImg from "../images/publicantions/cpu.webp";

export type Publication = {
  id: string;
  title: string;
  description: string;
  image: string;
  link?: string;
  year?: string;
  venue?: string;
};


export const publications: Publication[] = [
  {
    id: "pub-2024-vision-agri",
    title: "All About CI/CD Pipelines - Making Software Delivery Smooth and Fast",
    description: "A comprehensive guide to Continuous Integration and Continuous Deployment pipelines, exploring how they streamline software delivery processes and improve development efficiency.",
    image: cicdImg,
    link: "https://medium.com/@chamilkaperera5/all-about-ci-cd-pipelines-making-software-delivery-smooth-and-fast-505c99372f84",
    year: "2025",
    venue: "Medium articles",
  },
  {
    id: "pub-2025-meal-ml",
    title: "Numpy - python open source library",
    description: "An in-depth exploration of NumPy, the fundamental package for scientific computing in Python, covering its core features and practical applications.",
    image: numpyImg,
    link: "https://medium.com/@chamilkaperera5/numpy-short-for-numerical-python-is-a-widely-used-open-source-library-in-the-python-programming-547d8e9169b8",
    year: "2024",
    venue: "Medium articles",
  },
  {
    id: "pub-2025-gpu-power",
    title: "Unleashing GPU Power",
    description: "A detailed comparison between onboard and dedicated graphics solutions, helping readers understand the benefits and limitations of each approach.",
    image: gpuImg,
    link: "https://medium.com/@chamilkaperera5/unleashing-gpu-power-navigating-onboard-vs-a651b67e91af",
    year: "2023",
    venue: "Medium articles",
  },
  {
    id: "pub-2025-cpu-components",
    title: "Exploring ALU, CU, Register Memory, Cache, and CPU Speed",
    description: "A comprehensive breakdown of CPU components and architecture, explaining how different parts work together to process information efficiently.",
    image: cpuImg,
    link: "https://medium.com/@chamilkaperera5/numpy-short-for-numerical-python-is-a-widely-used-open-source-library-in-the-python-programming-547d8e9169b8",
    year: "2023",
    venue: "Medium articles",
  },
];
