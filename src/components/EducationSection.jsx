const EducationSection = () => {
  const education = {
    university: {
      name: "University of Washington, College of Engineering",
      degree: "Bachelor of Science: Mechanical Engineering",
      graduation: "Expected June 2027",
      gpa: "3.8/4.0",
      blurb: "Dean's List x3",
    },
    coursework: [
      "Mechanics of Materials",
      "Kinematics and Dynamics",
      "Differential Equations",
      "Linear Algebra",
      "Scientific Computing",
      "Calculus",
      "Physics",
      "General Chemistry",
      "Introduction to R",
      "Java",
    ],
    activities: [
      { name: "Theta Tau", description: "Professional Engineering Fraternity" },
      {
        name: "NRG Research Group",
        description: "Undergraduate Research Member",
      },
      {
        name: "UW Badminton Team",
        description: "6th place, 2025 National Collegiate Championships",
      },
      {
        name: "Hiller Aviation Museum",
        description: "Volunteer - flight simulators, guided tours",
      },
      {
        name: "Communication Academy",
        description: "Part-time speech therapy instructor",
      },
    ],
  };

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
