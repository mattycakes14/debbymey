import { useState, useEffect } from "react";
import { education as defaultEducation } from "../data/resume";
import { client } from "../sanityClient";

const EducationSection = () => {
  const [education, setEducation] = useState(defaultEducation);

  useEffect(() => {
    client
      .fetch(`*[_type == "education"][0]{ universityName, degree, graduation, gpa, blurb, coursework, activities }`)
      .then((data) => {
        if (data) {
          setEducation({
            university: {
              name: data.universityName || defaultEducation.university.name,
              degree: data.degree || defaultEducation.university.degree,
              graduation: data.graduation || defaultEducation.university.graduation,
              gpa: data.gpa || defaultEducation.university.gpa,
              blurb: data.blurb || defaultEducation.university.blurb,
            },
            coursework: data.coursework?.length ? data.coursework : defaultEducation.coursework,
            activities: data.activities?.length
              ? data.activities.map((a) => ({ name: a.name, description: a.description }))
              : defaultEducation.activities,
          });
        }
      })
      .catch(console.error);
  }, []);

  return (
    <div className="educationContainer">
      <div className="educationSection">
        <div className="sectionTitle">{education.university.name}</div>
        <div className="universityDegree">{education.university.degree}</div>
        <div className="universityDetails">
          <span>{education.university.graduation}</span>
          <span>GPA: {education.university.gpa}</span>
          <span>{education.university.blurb}</span>
        </div>
      </div>

      <div className="educationSection">
        <div className="sectionTitle">Relevant Coursework</div>
        <div className="courseworkItems">
          {education.coursework.map((course) => (
            <span className="courseworkTag" key={course}>
              {course}
            </span>
          ))}
        </div>
      </div>

      <div className="educationSection">
        <div className="sectionTitle">Activities</div>
        {education.activities.map((activity) => (
          <div className="activityRow" key={activity.name}>
            <span className="activityName">{activity.name}</span>
            <span className="activityDescription">{activity.description}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EducationSection;
