import "../App.css";

const ProjectSectionTab = ({ name, desc, link, icon, media }) => {
  const isVideo = media && /\.(mp4|mov|webm|ogg)$/i.test(media);

  return (
    <div className="projectSectionTab">
      <div className="projectContentContainer">
        <img src={icon} alt="small image" className="projectImage"></img>
        <div className="projectName">{name}</div>
        <div className="projectDesc">{desc}</div>

        <a className="projectLink" href={link} target="_blank">
          <div className="visitLinkText">Visit site</div>
        </a>
      </div>
      <div className="projectImageContainer">
        {isVideo ? (
          <video className="projectVideoMedia" autoPlay muted loop playsInline>
            <source src={media} type="video/mp4" />
          </video>
        ) : (
          <img src={media} alt="project media" className="projectPhotoMedia" />
        )}
      </div>
    </div>
  );
};

export default ProjectSectionTab;
