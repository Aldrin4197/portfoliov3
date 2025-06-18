// src/data/projectData.ts

import project1 from "../assets/proj1.png";
import project2 from "../assets/proj2.png";
import project3 from "../assets/proj3.png";
import project4 from "../assets/proj4.png";
import project5 from "../assets/eaph.png";
import project6 from "../assets/proj6.png";
import project7 from "../assets/proj7.png";



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
    title: "Equity Access PH",
    status: "On-going",
    desc: "Unified College Admission System for CHED",
    tech: ["Laravel", "MySQL", "Vue", "React"],
    img: project5,
    visitLink: "https://equityaccessph.com",
    githubLink: "#",
  },
  {
    title: "SSU HRMO",
    status: "Completed",
    desc: "Streamlines human resource processes and employee record management efficiently.",
    tech: ["Laravel", "MySQL", "Vue"],
    img: project1,
    visitLink: "https://icthrmo.ssuict.tech/",
    githubLink: "https://github.com/ssuict/hrmo",
  },
  {
    title: "Air Quality Monitoring",
    status: "Completed",
    desc: "Monitors and analyzes air quality data for environmental safety.",
    tech: ["Embedded Systems", "Laravel", "MySQL"],
    img: project2,
    visitLink: "https://airqualitymonitor.intspace.tech/",
    githubLink: "#",
  },
  {
    title: "IPOVCON 2025",
    status: "Completed",
    desc: "Website for the 6th International Conference on Poverty Alleviation and Sustainable Development.",
    tech: ["WordPress", "PHP", "MySQL"],
    img: project7,
    visitLink: "https://ipovcon2025.ssu.edu.ph/",
    githubLink: "#",
  },
  {
    title: "MLBB Draft Simulator V1",
    status: "Completed",
    desc: "A web-based application for simulating drafts in Mobile Legends: Bang Bang.",
    tech: ["Vue", "Node.js", "Laravel", "MySQL"],
    img: project6,
    visitLink: "https://mlbbdraftsim.intsace.tech/",
    githubLink: "#",
  },
  {
    title: "Document Tracking",
    status: "On-going",
    desc: "Simplifies and tracks document processing for student enrollment systems.",
    tech: ["Vue", "Laravel", "PostgreSQL"],
    img: project3,
    visitLink: "#",
    githubLink: "#",
  },
  {
    title: "HR Recruitment System",
    status: "On-going",
    desc: "Manages hiring processes with advanced features and seamless automation.",
    tech: ["React", "MongoDB", "Node.js"],
    img: project4,
    visitLink: "#",
    githubLink: "#",
  },
];
