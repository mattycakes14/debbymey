import ProjectSectionTab from "./ProjectSectionTab";
import { experiences } from "../data/resume";

const ProjectSection = () => {
  return (
    <div className="projectContainer">
      {experiences.map((exp) => (
        <ProjectSectionTab
          key={exp.id}
          name={exp.projectName}
          desc={exp.projectDescription}
          link={exp.externalLink}
          icon={exp.icon}
          media={exp.media}
        />
      ))}
    </div>
  );
};

export default ProjectSection;
