import "./App.css";
import headshot from "./assets/headshot.jpg";
import linkedIn from "./assets/linked.png";

import ProjectSection from "./components/ProjectSection";
import SkillsSection from "./components/SkillsSection";
import EducationSection from "./components/EducationSection";
import ConnectSection from "./components/ConnectSection";

import { useState, useEffect } from "react";
import { client, urlFor } from "./sanityClient";

function App() {
  const [activeTab, setActiveTab] = useState("Experience");
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    client
      .fetch(`*[_type == "profile"][0]{ name, heading, description, headshot, socials }`)
      .then((data) => setProfile(data))
      .catch(console.error);
  }, []);

  const heading = profile?.heading || "Hey, I'm Ameya Kulkarni.";
  const description =
    profile?.description ||
    "I'm a Mechanical Engineering student, rocket enthusiast, and research assistant. I spend most of my time designing structures that won't fail under pressure.";
  const headshotSrc = profile?.headshot ? urlFor(profile.headshot).url() : headshot;

  const defaultSocials = [
    { id: 1, externalSource: "LinkedIn", link: "https://www.linkedin.com/in/ameyakul/", img: linkedIn },
  ];
  const socials = profile?.socials?.length
    ? profile.socials.map((s, i) => ({
        id: i,
        externalSource: s.platform,
        link: s.link,
        img: s.icon ? urlFor(s.icon).url() : "",
      }))
    : defaultSocials;

  const subNav = ["Experience", "Skills", "Education", "Connect"];

  const subNavContent = {
    Experience: <ProjectSection />,
    Skills: <SkillsSection />,
    Education: <EducationSection />,
    Connect: <ConnectSection />,
  };

  return (
    <>
      <div className="mainContainer">
        <img
          className="headShotImage"
          alt="Ameya headshot"
          src={headshotSrc}
        ></img>
        <div className="introHeader">
          <h1>{heading}</h1>
        </div>
        <div className="introDescription">
          <p>{description}</p>
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
              className={`subNavTitles ${activeTab === item ? "activePill" : ""}`}
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
