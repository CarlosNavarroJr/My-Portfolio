const skills = [
    "AWS",
    "Python",
    "Linux",
    "Git & GitHub",
    "JavaScript",
    "React",
    "HTML & CSS",
    "Networking",
];

function Skills() {
    return (
        <section id="skills">
            <h2>Skills</h2>

            <div>
                {skills.map((skill) => (
                    <div key={skill}>
                        {skill}
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Skills;