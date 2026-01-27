import { useState, useEffect } from "react";
import {
  SiDassaultsystemes,
  SiAutodesk,
  SiPython,
  SiArduino,
  SiHtml5,
  SiDjango,
  SiJulia,
} from "react-icons/si";
import { FaJava, FaCubes, FaChartLine } from "react-icons/fa";
import { TbMathFunction } from "react-icons/tb";
import { skills as defaultSkills } from "../data/resume";
import { client } from "../sanityClient";

// Icon mapping - React components can't be stored in data files
const iconMap = {
  SolidWorks: <SiDassaultsystemes />,
  AutoCAD: <SiAutodesk />,
  Onshape: <FaCubes />,
  Revit: <SiAutodesk />,
  Ansys: <FaCubes />,
  "Fluid x3D": <FaCubes />,
  MATLAB: <TbMathFunction />,
  Python: <SiPython />,
  Java: <FaJava />,
  Arduino: <SiArduino />,
  HTML: <SiHtml5 />,
  "Random Forest": <FaChartLine />,
  XGBoost: <FaChartLine />,
  "Logistic Regression": <FaChartLine />,
  "Django REST": <SiDjango />,
  Julia: <SiJulia />,
};

const SkillsSection = () => {
  const [skills, setSkills] = useState(defaultSkills);

  useEffect(() => {
    client
      .fetch(`*[_type == "skill"] | order(order asc){ category, items }`)
      .then((data) => {
        if (data?.length) {
          setSkills(data);
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="skillsContainer">
      {skills.map((skill) => (
        <div className="skillRow" key={skill.category}>
          <div className="skillCategory">{skill.category}</div>
          <div className="skillItems">
            {skill.items.map((item) => (
              <span className="skillTag" key={item}>
                {iconMap[item]} {item}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
