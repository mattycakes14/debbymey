import "../App.css";

const ProjectSectionTab = ({ name, desc, link, image }) => {
  return (
    <div className="projectSectionTab">
      <div className="projectContentContainer">
        <img src={image} alt="small image" className="projectImage"></img>
        <div className="projectName">{name}</div>
        <div className="projectDesc">{desc}</div>

        <a className="projectLink" href={link} target="_blank">
          <div className="visitLinkText">Visit site</div>
        </a>
      </div>
      <div className="projectImageContainer">
        <img alt="project image"></img>
      </div>
    </div>
  );
};

export default ProjectSectionTab;
