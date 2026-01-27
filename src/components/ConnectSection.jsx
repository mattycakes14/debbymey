import { useState, useEffect } from "react";
import { connect as defaultConnect } from "../data/resume";
import { client, urlFor, fileUrl } from "../sanityClient";

const ConnectSection = () => {
  const [connect, setConnect] = useState(defaultConnect);

  useEffect(() => {
    client
      .fetch(`*[_type == "connectLink"] | order(order asc){ name, link, icon, file }`)
      .then((data) => {
        if (data?.length) {
          setConnect(
            data.map((item, i) => ({
              id: i,
              name: item.name,
              link: item.file ? fileUrl(item.file) : item.link,
              icon: item.icon ? urlFor(item.icon).url() : "",
            }))
          );
        }
      })
      .catch(console.error);
  }, []);

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
