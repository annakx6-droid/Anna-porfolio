const Projects = () => {
  const myProjects = [
    {
      title: "VITA Student Grade Management",
      desc: "ລະບົບຈັດການຄະແນນນັກສຶກສາພ້ອມ Admin Dashboard.",
      tech: "React, Local Storage"
    },
    {
      title: "Real-time Referral System",
      desc: "ລະບົບແນະນຳ (Referral) ແບບ Real-time.",
      tech: "Node.js, MySQL"
    }
  ];

  return (
    <section className="projects-section">
      <h2>Featured Projects</h2>
      <div className="projects-list">
        {myProjects.map((proj, index) => (
          <div key={index} className="project-card">
            <h3>{proj.title}</h3>
            <p>{proj.desc}</p>
            <span className="tech-tag">{proj.tech}</span>
          </div>
        ))}
      </div>
    </section>
  );
};
export default Projects;