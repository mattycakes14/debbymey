import email from "../assets/email.png";
import resume from "../assets/resume.png";
import linkedIn from "../assets/linked.png";

const ConnectSection = () => {
  const connect = [
    {
      id: 1,
      name: "LinkedIn",
      link: "https://www.linkedin.com/in/ameyakul/",
      icon: linkedIn,
    },
    { id: 2, name: "Email", link: "mailto:ameyak6@uw.edu", icon: email },
    { id: 3, name: "Resume", link: "/AmeyaKulkarniResume.pdf", icon: resume },
  ];
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
