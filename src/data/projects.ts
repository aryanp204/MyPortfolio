export interface ProjectItem {
  id: string;
  index: string;
  name: string;
  tagline: string;
  url: string;
  year?: string;
  category?: string;
  hasCaseStudy?: boolean;
}

export const projects: ProjectItem[] = [
  {
    id: "proj-uship",
    index: "01",
    name: "Uship",
    tagline: "A user-friendly e-commerce platform with diverse products, secure payments, and quick delivery for a seamless shopping experience.",
    url: "https://aryanp204.github.io/Uship/",
    category: "E-Commerce Platform",
    hasCaseStudy: true,
  },
  {
    id: "proj-devm5",
    index: "02",
    name: "DEVM5",
    tagline: "A company creating custom frameworks for event and tourism websites, offering tailored solutions and seamless user experiences.",
    url: "https://aryanp204.github.io/DEVM5/",
    category: "Custom Web Framework",
  },
  {
    id: "proj-skymount",
    index: "03",
    name: "SkyMount",
    tagline: "An interactive website showcasing events and tourism experiences with easy navigation and responsive design.",
    url: "https://aryanp204.github.io/SkyMount/",
    category: "Event & Tourism Experience",
  },
  {
    id: "proj-atlas",
    index: "04",
    name: "Atlas",
    tagline: "A user-friendly website offering seamless navigation, engaging visuals, and quick access to valuable information and services.",
    url: "https://aryanp204.github.io/Path-Solutions/",
    category: "Information & Services Portal",
  },
];
