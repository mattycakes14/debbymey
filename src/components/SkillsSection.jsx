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

const SkillsSection = () => {
  const skills = [
    {
      category: "CAD",
      items: [
        { name: "SolidWorks", icon: <SiDassaultsystemes /> },
        { name: "AutoCAD", icon: <SiAutodesk /> },
        { name: "Onshape", icon: <FaCubes /> },
        { name: "Revit", icon: <SiAutodesk /> },
      ],
    },
    {
      category: "Simulation",
      items: [
        { name: "Ansys", icon: <FaCubes /> },
        { name: "Fluid x3D", icon: <FaCubes /> },
        { name: "MATLAB", icon: <TbMathFunction /> },
      ],
    },
    {
      category: "Programming",
      items: [
        { name: "Python", icon: <SiPython /> },
        { name: "Java", icon: <FaJava /> },
        { name: "Arduino", icon: <SiArduino /> },
        { name: "HTML", icon: <SiHtml5 /> },
      ],
    },
    {
      category: "ML/Data",
      items: [
        { name: "Random Forest", icon: <FaChartLine /> },
        { name: "XGBoost", icon: <FaChartLine /> },
        { name: "Logistic Regression", icon: <FaChartLine /> },
        { name: "Django REST", icon: <SiDjango /> },
        { name: "Julia", icon: <SiJulia /> },
      ],
    },
  ];

  return (
    <div className="skillsContainer">
      {skills.map((skill) => (
        <div className="skillRow" key={skill.category}>
          <div className="skillCategory">{skill.category}</div>
          <div className="skillItems">
            {skill.items.map((item) => (
              <span className="skillTag" key={item.name}>
                {item.icon} {item.name}
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkillsSection;
