export interface ExpertiseItem {
  id: string;
  label: string;
  description: string;
}

export interface ToolboxCategory {
  category: string;
  items: string[];
}

export interface ProfileData {
  name: string;
  shortName: string;
  role: string;
  headline: string;
  bio: string;
  aboutIntro: string;
  status: string;
  location: string;
  coordinates: string;
  email: string;
  resumeUrl: string;
  socials: {
    linkedin: string;
    instagram: string;
  };
  metadata: {
    roleSpec: string;
    stackSpec: string;
    version: string;
  };
  expertise: ExpertiseItem[];
  toolbox: ToolboxCategory[];
}

export const profile: ProfileData = {
  name: "Aryan Patel",
  shortName: "A. Patel",
  role: "Web Developer & UI/UX Designer",
  headline: "Web developer and UI/UX Designer.",
  bio: "I am an IT professional skilled in Java, JavaScript, Python, C# and C++, with strong knowledge of HTML, CSS, Bootstrap, jQuery and Node.js. My expertise extends to UI/UX design, wireframing, and interactive prototyping using Figma and Adobe Photoshop, alongside MySQL, MongoDB, and GitHub. I bridge human-centered design with modern front-end development to deliver engaging, responsive, and intuitive digital experiences.",
  aboutIntro: "Hello there, I'm Aryan Patel, an enthusiastic IT Professional specializing in Web Development and UI/UX Design, committed to delivering seamless, user-centric digital solutions through thoughtful design and clean code.",
  status: "Open to work",
  location: "Waterloo, Ontario",
  coordinates: "43.4643° N, 80.5204° W",
  email: "aryanp204@gmail.com",
  resumeUrl: "./Aryan_Patel_Resume.docx",
  socials: {
    linkedin: "https://www.linkedin.com/in/aryan-patel-35240a238",
    instagram: "https://www.instagram.com/runrunaryan",
  },
  metadata: {
    roleSpec: "Web Dev / UI/UX Design",
    stackSpec: "TypeScript · Figma · React",
    version: "REV 2026.09",
  },
  expertise: [
    {
      id: "SPEC-01",
      label: "UI/UX Design & Prototyping",
      description: "User journey mapping, wireframing, interactive prototyping, and design systems crafted with Figma and Adobe Photoshop.",
    },
    {
      id: "SPEC-02",
      label: "Web Development & Front-End",
      description: "Responsive, dynamic web applications engineered using modern HTML5, CSS3, JavaScript, TypeScript, React, and Node.js.",
    },
    {
      id: "SPEC-03",
      label: "E-Learning & Instructional Design",
      description: "Interactive e-learning modules built on instructional principles, multimedia content, and multi-device LMS compatibility.",
    },
    {
      id: "SPEC-04",
      label: "Design Systems & Component Architecture",
      description: "Modular component libraries, standardized typography scales, responsive grids, and accessible WCAG-compliant design patterns.",
    },
    {
      id: "SPEC-05",
      label: "Database & Backend Integration",
      description: "Structured data architectures using MySQL and MongoDB to support seamless dynamic front-end applications.",
    },
    {
      id: "SPEC-06",
      label: "Collaborative Product Delivery",
      description: "Bridging the gap between conceptual UX design and production-ready code in cross-functional agile teams.",
    },
  ],
  toolbox: [
    {
      category: "Design & Prototyping",
      items: ["Figma", "Adobe Photoshop", "Wireframing", "Interactive Prototyping", "Design Systems", "Information Architecture"],
    },
    {
      category: "Web & Front-End",
      items: ["HTML5", "CSS3", "JavaScript", "TypeScript", "React", "Node.js", "Bootstrap", "jQuery"],
    },
    {
      category: "Languages",
      items: ["JavaScript", "TypeScript", "Python", "Java", "C#", "C++"],
    },
    {
      category: "E-Learning & Tools",
      items: ["Instructional Design", "LMS Integration", "Git", "GitHub", "VS Code", "Postman"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
    },
  ],
};
