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
  role: "Web Developer & QA Engineer",
  headline: "Web developer and QA engineer.",
  bio: "I am an IT professional skilled in Java, JavaScript, Python, C# and C++, with strong knowledge of HTML, CSS, Bootstrap, jQuery and Node.js. My expertise extends to MySQL and MongoDB, and to tools like Figma, Adobe Photoshop and GitHub. I also have hands-on experience in quality assurance, automation testing and process optimization, contributing to efficient, high-quality software development.",
  aboutIntro: "Hello there, I'm Aryan Patel, an enthusiastic IT Professional specializing in Web Development and Quality Assurance, committed to delivering seamless, high-quality digital solutions through robust design and meticulous testing.",
  status: "Open to work",
  location: "Gandhinagar, Gujarat",
  coordinates: "23.2156° N, 72.6369° E",
  email: "aryanp204@gmail.com",
  resumeUrl: "./AryanPatel_Resume.docx",
  socials: {
    linkedin: "https://www.linkedin.com/in/aryan-patel-35240a238",
    instagram: "https://www.instagram.com/runrunaryan",
  },
  metadata: {
    roleSpec: "Web Dev / QA",
    stackSpec: "TypeScript · Java · Python",
    version: "REV 2026.09",
  },
  expertise: [
    {
      id: "SPEC-01",
      label: "Web Development & Programming",
      description: "Responsive, dynamic applications using Java, JavaScript, Python, C#, C++, HTML, CSS and Node.js.",
    },
    {
      id: "SPEC-02",
      label: "Quality Assurance & Testing",
      description: "Manual and automated test design, execution, regression testing and defect tracking to ship stable, high-quality releases.",
    },
    {
      id: "SPEC-03",
      label: "Database Management",
      description: "MySQL and MongoDB integration to support robust backend functionality.",
    },
    {
      id: "SPEC-04",
      label: "UI/UX Design & Prototyping",
      description: "Intuitive, visually appealing designs with Figma and Adobe Photoshop.",
    },
    {
      id: "SPEC-05",
      label: "Process Optimization & Automation",
      description: "Streamlining processes and using scripts and tools to reduce manual effort.",
    },
    {
      id: "SPEC-06",
      label: "Collaborative Development",
      description: "Strong grasp of front-end and back-end workflows, working with teams from concept to completion.",
    },
  ],
  toolbox: [
    {
      category: "Languages",
      items: ["Java", "JavaScript", "TypeScript", "Python", "C#", "C++"],
    },
    {
      category: "Web & Frameworks",
      items: ["HTML5", "CSS3", "React", "Node.js", "Bootstrap", "jQuery"],
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB"],
    },
    {
      category: "Design",
      items: ["Figma", "Adobe Photoshop"],
    },
    {
      category: "Tools & Testing",
      items: ["Git", "GitHub", "Automated Testing", "Postman", "Jira", "VS Code"],
    },
  ],
};
