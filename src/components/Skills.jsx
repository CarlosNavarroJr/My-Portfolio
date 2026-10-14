const skills = [
    { name: "Full-Stack Developer", category:"Software Development"},
    { name: "React", category:"Frontend Development"},
    { name: "Vue", category:"Frontend Development"},
    { name: "RESTful API's", category:"Backend Development"},
    { name: "Node.js", category:"Backend Development"},
    { name: "Python", category:"Programming"},
    { name: "MySQL", category:"Database Management"},
    { name: "PostgreSQL", category:"Database Management"},
    { name: "Linux", category:"Operating Systems"},
    { name: "Git & GitHub", category:"Version Control"},
    { name: "Javascript", category:"Programming"},
    { name: "HTML5 & CSS3", category:"Web Development"},
    { name: "AWS", category:"Cloud Computing"},
    { name: "Networking", category:"IT Fundamentals"},
    { name: "Debugging", category:"Troubleshooting"},
    { name: "Documentation", category:"Document Control"},
];

function Skills() {
    return (
        <section id="skills" className="skills">
            <div className="section-container">
                <p className="section-eyebrow">
                    Tools & Technologies
                </p>

                <h2>Skills I'm Developing</h2>

                <p className="section-description">
                    Technologies and concepts I'm studying and applying through hands-on projects.
                </p>

                <div className="skills-grid">
                    {skills.map((skill) => (
                        <article className="skill-card" key={skill.name}>
                            <h3>{skill.name}</h3>
                            <p>{skill.category}</p>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Skills;