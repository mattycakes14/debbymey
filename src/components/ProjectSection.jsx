import { useState, useEffect } from "react";
import ProjectSectionTab from "./ProjectSectionTab";
import { experiences as defaultExperiences } from "../data/resume";
import { client, urlFor, fileUrl } from "../sanityClient";

const ProjectSection = () => {
  const [experiences, setExperiences] = useState(defaultExperiences);

  useEffect(() => {
    client
      .fetch(`*[_type == "experience"] | order(order asc){ projectName, projectDescription, externalLink, icon, media }`)
      .then((data) => {
        if (data?.length) {
          setExperiences(
            data.map((exp, i) => ({
              id: i,
              projectName: exp.projectName,
              projectDescription: exp.projectDescription,
              externalLink: exp.externalLink,
              icon: exp.icon ? urlFor(exp.icon).url() : "",
              media: exp.media ? fileUrl(exp.media) : "",
            }))
          );
        }
      })
      .catch(console.error);
  }, []);

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
