import { education } from "../data/resume";

const EducationSection = () => {

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
