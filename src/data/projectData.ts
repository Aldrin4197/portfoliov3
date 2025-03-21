// src/data/projectData.ts

import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.png";

// Define the project item interface
interface ProjectItem {
  title: string;
  status: string;
  desc: string;
  tech: string[];
  img: string;
  visitLink: string;
  githubLink: string;
}

// Export the project data array
export const projectData: ProjectItem[] = [
  {
    title: "SSU HRMO",
    status: "On-going",
    desc: "Streamlines human resource processes and employee record management efficiently.",
    tech: ["Laravel", "MySQL", "Vue"],
    img: project1,
    visitLink: "https://icthrmo.ssuict.tech/",
    githubLink: "https://github.com/ssuict/hrmo",
  },
  {
    title: "Air Quality Monitoring",
    status: "On-going",
    desc: "Monitors and analyzes air quality data for environmental safety.",
    tech: ["Embedded Systems", "Laravel", "MySQL"],
    img: project2,
    visitLink: "#",
    githubLink: "https://github.com/ssuict/airquality-monitoring",
  },
  {
    title: "Document Tracking",
    status: "On-going",
    desc: "Simplifies and tracks document processing for student enrollment systems.",
    tech: ["Vue", "Laravel", "PostgreSQL"],
    img: project3,
    visitLink: "#",
    githubLink: "https://github.com/ssuict/doc-tracking",
  },
  {
    title: "HR Recruitment System",
    status: "On-going",
    desc: "Manages hiring processes with advanced features and seamless automation.",
    tech: ["React", "MongoDB", "Node.js"],
    img: project4,
    visitLink: "#",
    githubLink: "https://github.com/ssuict/hr-recruitment",
  },
];
