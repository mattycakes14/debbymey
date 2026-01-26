import "./App.css";
import linkedIn from "./assets/linked.png";
import headshot from "./assets/headshot.jpg";

import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ConnectSection from "./components/ConnectSection";

import { useState } from "react";

function App() {
  const [activeTab, setActiveTab] = useState("Experience");
  console.log(activeTab);

  const subNavContent = {
    Experience: <ProjectSection />,
    Skills: <SkillsSection />,
    Education: <EducationSection />,
    Connect: <ConnectSection />,
  };
  const socials = [
    {
      id: 1,
      externalSource: "LinkedIn",
      link: "https://www.linkedin.com/in/ameyakul/",
      img: linkedIn,
    },
    // { id: 2, externalSource: "", link: "", img: "" },
    // { id: 3, externalSource: "", link: "", img: "" },
  ]; // TODO: change for CMS object parsing

  const subNav = ["Experience", "Skills", "Education", "Connect"];

  return (
    <>
      <div className="mainContainer">
        <img
          className="headShotImage"
          alt="Ameya headshot"
          src={headshot}
        ></img>
        <div className="introHeader">
          <h1>Hey, I'm Ameya Kulkarni.</h1>
        </div>
        <div className="introDescription">
          <p>
            I'm a Mechanical Engineering student, rocket enthusiast, and
            research assistant. I spend most of my time designing structures
            that won't fail under pressure.
          </p>
        </div>
        <div className="socialsContainer">
          {socials.map((item) => (
            <a key={item.id} href={item.link} target="_blank">
              <img
                className="externalSourceImage"
                alt="externalSource"
                src={item.img}
              />
            </a>
          ))}
        </div>
        <div className="subNav">
          {subNav.map((item) => (
            <div
              key={item}
              className={`subNavTitles ${activeTab === item ? "activePill" : ""}`} // string literals to dynamically apply multiple css classes
              onClick={() => setActiveTab(item)}
            >
              {item}
            </div>
          ))}
        </div>
        <div className="subTabContainer">{subNavContent[activeTab]}</div>
      </div>
    </>
  );
}

export default App;
