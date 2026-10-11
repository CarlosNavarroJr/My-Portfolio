import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Password Strenght Checker",
        status: "Completed",
        description: "A python security tool that evaluates password strength based on length, character types, and common security considerations.",
        technologies: ["Python", "String Methods"],
        githubUrl: "",
        liveUrl: "",
    },
      {
        title: "Password Strenght Checker",
        status: "Completed",
        description: "A python security tool that evaluates password strength based on length, character types, and common security considerations.",
        technologies: ["Python"],
        githubUrl: "",
        liveUrl: "",
    },
      {
        title: "Password Strenght Checker",
        status: "Completed",
        description: "A python security tool that evaluates password strength based on length, character types, and common security considerations.",
        technologies: ["Python"],
        githubUrl: "",
        liveUrl: "",
    },
];

function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="section-container">
                <p className="section-eyebrow">
                    What I'm building
                </p>

                <h2>Projects</h2>

                <p className="section-description">
                    Hands-on projects that demonstrate my learning, problem-solving, and technical skills.
                </p>

                <div className="projects-grid">
                    {projects.map((project) => (
                        <ProjectCard 
                        key={project.title}
                        project={project}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Projects;