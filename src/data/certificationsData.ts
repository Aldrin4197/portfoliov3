// Import images from the assets folder
import udemy from "../assets/udemy.webp";
import tesda from "../assets/tesda.png";
import csc from "../assets/csc.png";

const certificationsData = [
  {
    title: "Laravel 11 and Vue 3 Mastery",
    organization: "TutsPrime Online Education - Udemy",
    date: "Feb. 2025",
    description: "Demonstrated expertise in Laravel development and advanced concepts.",
    imgSrc: udemy,
  },
  {
    title: "National Certificate II in Computer Systems Servicing",
    organization: "TESDA",
    date: "April 2021",
    description:
      "Proven ability to design, develop, and manage robust cloud solutions using Google Cloud technologies.",
    imgSrc: tesda,
  },
  {
    title: "Career Service Professional",
    organization: "Civil Service Commission",
    date: "July 2017",
    description:
      "Validated knowledge of AWS architectural principles and cloud infrastructure.",
    imgSrc: csc,
  },
];

export default certificationsData;
