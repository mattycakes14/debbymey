import ProjectSectionTab from "./ProjectSectionTab";
import sarp from "../assets/sarp.jpg";
import satellite from "../assets/satellite.png";
import uci from "../assets/uci.jpg";
import sarpVid from "../assets/sarpVideo.MOV";
import irvinePicture from "../assets/irvine.png";
import nrg from "../assets/NRG.jpg";

const ProjectSection = () => {
  const projects = [
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

  return (
    <div>
      {projects.map((project) => (
        <ProjectSectionTab
          name={project.projectName}
          desc={project.projectDescription}
          link={project.externalLink}
          icon={project.icon}
          media={project.media}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
