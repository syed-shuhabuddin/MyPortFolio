function Skills() {
  const skills: string[] = ["React", "JavaScript", "HTML", "CSS", "Ant Design", "Git"];

  return (
    <section>
      <h2>Skills</h2>
      <div className="skills">
        {skills.map((skill) => (
          <span key={skill}>{skill}</span>
        ))}
      </div>
    </section>
  );
}

export default Skills;
