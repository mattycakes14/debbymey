// Experience images
import sarp from "../assets/sarp.jpg";
import satellite from "../assets/satellite.png";
import uci from "../assets/uci.jpg";
import sarpVid from "../assets/sarpVideo.MOV";
import irvinePicture from "../assets/irvine.png";
import nrg from "../assets/NRG.jpg";

// Connect icons
import emailIcon from "../assets/email.png";
import resumeIcon from "../assets/resume.png";
import linkedInIcon from "../assets/linked.png";

export const experiences = [
  {
    id: 1,
    projectName: "Liquid Rocket Structural Design",
    projectDescription:
      "Designed bulkheads and internal spars for liquid rocket propulsion system. Developed Python-based bearing failure calculator integrating tensile, shear, and bolt shear models.",
    externalLink: "https://sarpuw.com/",
    icon: sarp,
    media: sarpVid,
  },
  {
    id: 2,
    projectName: "CubeSat Frame & Thermal System",
    projectDescription:
      "Engineered CubeSat frame components with custom hinge mechanisms. Conducted FEA simulations improving structural stability by 4.5% and thermal analysis for spacecraft subsystems.",
    externalLink: "https://huskysat.org/",
    icon: satellite,
    media: "",
  },
  {
    id: 3,
    projectName: "Propeller Aeroacoustics Research",
    projectDescription:
      "Researched rotor geometry effects on aircraft noise. Designed airfoils in SolidWorks, ran CFD simulations, and conducted wind tunnel tests measuring sound pressure levels across blade configurations.",
    externalLink: "https://www.ucigati.org/",
    icon: uci,
    media: irvinePicture,
  },
  {
    id: 4,
    projectName: "Electrohydrodynamic Flow Control Research",
    projectDescription:
      "Assisted graduate researchers studying electrode configurations' effects on boundary layer behavior and thrust generation. Operated wind tunnels, collected velocity and pressure data using pitot tubes, and processed results with Python and MATLAB.",
    externalLink: "https://depts.washington.edu/nrglab/",
    icon: nrg,
    media: "",
  },
];

export const skills = [
  {
    category: "CAD",
    items: ["SolidWorks", "AutoCAD", "Onshape", "Revit"],
  },
  {
    category: "Simulation",
    items: ["Ansys", "Fluid x3D", "MATLAB"],
  },
  {
    category: "Programming",
    items: ["Python", "Java", "Arduino", "HTML"],
  },
  {
    category: "ML/Data",
    items: ["Random Forest", "XGBoost", "Logistic Regression", "Django REST", "Julia"],
  },
];

export const education = {
  university: {
    name: "University of Washington, College of Engineering",
    degree: "Bachelor of Science: Mechanical Engineering",
    graduation: "Expected June 2027",
    gpa: "3.8/4.0",
    blurb: "Dean's List x3",
  },
  coursework: [
    "Mechanics of Materials",
    "Kinematics and Dynamics",
    "Differential Equations",
    "Linear Algebra",
    "Scientific Computing",
    "Calculus",
    "Physics",
    "General Chemistry",
    "Introduction to R",
    "Java",
  ],
  activities: [
    { name: "Theta Tau", description: "Professional Engineering Fraternity" },
    { name: "NRG Research Group", description: "Undergraduate Research Member" },
    { name: "UW Badminton Team", description: "6th place, 2025 National Collegiate Championships" },
    { name: "Hiller Aviation Museum", description: "Volunteer - flight simulators, guided tours" },
    { name: "Communication Academy", description: "Part-time speech therapy instructor" },
  ],
};

export const connect = [
  {
    id: 1,
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/ameyakul/",
    icon: linkedInIcon,
  },
  {
    id: 2,
    name: "Email",
    link: "mailto:ameyak6@uw.edu",
    icon: emailIcon,
  },
  {
    id: 3,
    name: "Resume",
    link: "/AmeyaKulkarniResume.pdf",
    icon: resumeIcon,
  },
];
