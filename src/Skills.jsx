const Skills = () => {
  const skills = [
    { name: "Frontend", tools: "React, Flutter, React Native" },
    { name: "Backend", tools: "Node.js, Django, MySQL, SQLite" },
    { name: "Hardware", tools: "Arduino Uno, Sensors, IoT" }
  ];

  return (
    <section className="skills-section">
      <h2>My Technical Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div key={index} className="skill-card">
            <h3>{skill.name}</h3>
            <p>{skill.tools}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Skills ;