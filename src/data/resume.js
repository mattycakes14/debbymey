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
    bullets: [
      "Developed bulkheads and internal spars in SolidWorks, incorporating torsional and axial load analysis to assure structural integrity during liquid rocket firing, achieving FOS of 2+.",
      "Modeled a PLA avionics bay mount using 3D printing, refining the shape to enhance accessibility and resistance.",
      "Programmed a Python-based bearing failure calculator integrating tensile, shear, and bolt shear models, reducing manual analysis time by 70%.",
    ],
    externalLink: "https://sarpuw.com/",
    icon: sarp,
    media: sarpVid,
    extraMedia: [], // add extra image imports here e.g. [img1, img2]
  },
  {
    id: 2,
    projectName: "CubeSat Frame & Thermal System",
    projectDescription:
      "Engineered CubeSat frame components with custom hinge mechanisms. Conducted FEA simulations improving structural stability by 4.5% and thermal analysis for spacecraft subsystems.",
    bullets: [
      "Designed and optimized CubeSat frame components including custom hinge mechanisms using SolidWorks, conducting vibration and stress simulations using FEA on Ansys to improve structural stability by 4.5%.",
      "Manufactured precise components with tight tolerances utilizing manual mills, lathes, and 3-axis CNC machinery.",
      "Applied Ansys Thermal to simulate heat flow through core spacecraft subsystems, including battery packs and PCB assemblies.",
      "Created documentation standards for the Structures team including simulation reports, CAD modification protocols, and version control guidelines.",
    ],
    externalLink: "https://huskysat.org/",
    icon: satellite,
    media: "",
    extraMedia: [],
  },
  {
    id: 3,
    projectName: "Propeller Aeroacoustics Research",
    projectDescription:
      "Researched rotor geometry effects on aircraft noise. Designed airfoils in SolidWorks, ran CFD simulations, and conducted wind tunnel tests measuring sound pressure levels across blade configurations.",
    bullets: [
      "Researched the influence of rotor geometry on aeroacoustics to suggest propeller modifications for aircraft.",
      "Designed various airfoils of propeller shapes in SolidWorks and ran trials in Fluid x3D to visualize drag.",
      "Developed an experiment using Arduino testing 2, 3, and 4 bladed propellers measuring sound pressure level and tonal noise in a wind tunnel.",
      "Presented findings to UCI graduate students and Dr. Jacqueline Huynh to draft implications for the FAA.",
    ],
    externalLink: "https://www.ucigati.org/",
    icon: uci,
    media: irvinePicture,
    extraMedia: [],
  },
  {
    id: 4,
    projectName: "Electrohydrodynamic Flow Control Research",
    projectDescription:
      "Assisted graduate researchers studying electrode configurations' effects on boundary layer behavior and thrust generation. Operated wind tunnels, collected velocity and pressure data using pitot tubes, and processed results with Python and MATLAB.",
    bullets: [
      "Assembled surface-mount PCBs for plasma actuators and soldered components to ensure reliable electrode configurations for thrust generation experiments.",
      "Operated wind tunnels and utilized pitot tubes and pressure sensors to collect, calibrate, and process velocity and pressure data across various electrode configurations using Python and MATLAB.",
      "Processed and analyzed test data to evaluate airflow and thrust changes caused by applied electric fields.",
      "Collaborated with graduate researchers to design modular test fixtures and refine experimental procedures to improve repeatability and data consistency.",
    ],
    externalLink: "https://depts.washington.edu/nrglab/",
    icon: nrg,
    media: "",
    extraMedia: [],
  },
];

export const skills = [
  { category: "CAD", items: ["SolidWorks", "AutoCAD", "Onshape", "Revit"] },
  { category: "Simulation", items: ["Ansys", "Fluid x3D", "MATLAB"] },
  { category: "Programming", items: ["Python", "Java", "Arduino", "HTML"] },
  { category: "ML/Data", items: ["Random Forest", "XGBoost", "Logistic Regression", "Django REST", "Julia"] },
];

export const education = {
  university: {
    name: "University of Washington, College of Engineering",
    degree: "Bachelor of Science: Mechanical Engineering",
    graduation: "Expected June 2028",
    gpa: "3.7/4.0",
    blurb: "Dean's List x3",
  },
  coursework: [
    "Mechanics of Materials", "Kinematics and Dynamics", "Differential Equations",
    "Linear Algebra", "Scientific Computing", "Calculus", "Physics",
    "General Chemistry", "Introduction to R", "Java",
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
  { id: 1, name: "LinkedIn", link: "https://www.linkedin.com/in/ameyakul/", icon: linkedInIcon },
  { id: 2, name: "Email", link: "mailto:ameyak6@uw.edu", icon: emailIcon },
  { id: 3, name: "Resume", link: "/AmeyaKulkarniResume.pdf", icon: resumeIcon },
];
