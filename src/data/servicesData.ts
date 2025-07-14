import { Code, BookOpen, Server } from "lucide-react";
import { BiCustomize } from "react-icons/bi";

import { FaWordpress } from "react-icons/fa";

import { IoHardwareChip } from "react-icons/io5";
import { MdDesignServices } from "react-icons/md";


export const serviceData = [
  {
    title: "Fullstack Web Development",
    desc: "Responsive and optimized websites for businesses and individuals.",
    icon: Code,
  },
  {
    title: "Capstone Consultation",
    desc: "Mentorship and technical guidance for student projects.",
    icon: BookOpen,
  },
  {
    title: "Backend Services",
    desc: "API development, database design, and server setup.",
    icon: Server,
  },
  {
    title: "CMS Development",
    desc: "Custom CMS solutions for content management needs. (WordPress, etc.)",
    icon: FaWordpress,
  },
 {
    title: "Hardware Prototyping",
    desc: "Prototyping and development of embedded systems for various applications. (Arduino, Raspberry Pi, etc.)",
    icon: IoHardwareChip, // Replace with actual icon component
  },
  {
    title: "UI & UX Design",
    desc: "Creating user-friendly interfaces and experiences for applications.",
    icon: MdDesignServices, // Replace with actual icon component
  },
  {
    title: "Project Management",
    desc: "Efficient software planning and execution for projects.",
    icon: BiCustomize, // Replace with actual icon component
  },
  {
    title: "Custom Software",
    desc: "Tailored software solutions to meet specific business needs.",
    icon: BiCustomize, // Replace with actual icon component
  },
];
