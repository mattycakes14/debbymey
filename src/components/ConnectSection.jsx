import { connect } from "../data/resume";

const ConnectSection = () => {
  return (
    <div className="connectOuterContainer">
      {connect.map((item) => (
        <a
          key={item.id}
          href={item.link}
          target={item.name === "Resume" ? "_self" : "_blank"}
          download={item.name === "Resume" ? true : undefined}
          className="connectContainer"
        >
          <img src={item.icon} alt="connect icons" className="connectIcon" />
          <div className="connectName">{item.name}</div>
        </a>
      ))}
    </div>
  );
};

export default ConnectSection;
