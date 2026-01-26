import ProjectSectionTab from "./ProjectSectionTab";
import sarp from "../assets/sarp.jpg";
import satellite from "../assets/satellite.png";
import uci from "../assets/uci.jpg";

const ProjectSection = () => {
  const projects = [
    {
      id: 1,
      projectName: "Liquid Rocket Structural Design",
      projectDescription:
        "Designed bulkheads and internal spars for liquid rocket propulsion system. Developed Python-based bearing failure calculator integrating tensile, shear, and bolt shear models.",
      externalLink: "https://sarpuw.com/",
      image: sarp,
    },
    {
      id: 2,
      projectName: "CubeSat Frame & Thermal System",
      projectDescription:
        "Engineered CubeSat frame components with custom hinge mechanisms. Conducted FEA simulations improving structural stability by 4.5% and thermal analysis for spacecraft subsystems.",
      externalLink: "https://huskysat.org/",
      image: satellite,
    },
    {
      id: 3,
      projectName: "Propeller Aeroacoustics Research",
      projectDescription:
        "Researched rotor geometry effects on aircraft noise. Designed airfoils in SolidWorks, ran CFD simulations, and conducted wind tunnel tests measuring sound pressure levels across blade configurations.",
      externalLink: "https://www.ucigati.org/",
      image: uci,
    },
  ];

  return (
    <div>
      {projects.map((project) => (
        <ProjectSectionTab
          name={project.projectName}
          desc={project.projectDescription}
          link={project.externalLink}
          image={project.image}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
