import "../App.css";
import { Link } from "react-router-dom";

const ProjectSectionTab = ({ id, name, desc, link, icon, media }) => {
  const isVideo = media && /\.(mp4|mov|webm|ogg)$/i.test(media);

  return (
    <div className="projectSectionTab">
      <div className="projectContentContainer">
        <img src={icon} alt="small image" className="projectImage" />
        <div className="projectName">{name}</div>
        <div className="projectDesc">{desc}</div>
        <div className="projectButtons">
          <Link to={`/project/${id}`} className="projectLink">
            <div className="visitLinkText">Learn More</div>
          </Link>
          <a className="projectLink" href={link} target="_blank" rel="noreferrer">
            <div className="visitLinkText">Visit site</div>
          </a>
        </div>
      </div>
      <div className="projectImageContainer">
        {isVideo ? (
          <video className="projectVideoMedia" autoPlay muted loop playsInline>
            <source src={media} type="video/mp4" />
          </video>
        ) : (
          media && <img src={media} alt="project media" className="projectPhotoMedia" />
        )}
      </div>
    </div>
  );
};

export default ProjectSectionTab;
