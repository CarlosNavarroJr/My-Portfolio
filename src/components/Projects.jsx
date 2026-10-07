import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Password Strenght Checker",
        description: "A python security tool that evaluates password strength based on length, character types, and common security considerations.",
        technologies: ["Python"],
        github: "https://github.com"
    },
      {
        title: "Password Strenght Checker",
        description: "A python security tool that evaluates password strength based on length, character types, and common security considerations.",
        technologies: ["Python"],
        github: "https://github.com"
    },
      {
        title: "Password Strenght Checker",
        description: "A python security tool that evaluates password strength based on length, character types, and common security considerations.",
        technologies: ["Python"],
        github: "https://github.com"
    },
];

function Projects() {
    return (
        <section id="projects">
            <h2>Projects</h2>

            <div>
                {projects.map((project) => (
                    <ProjectCard 
                        key={project.title}
                        title={project.title}
                        description={project.description}
                        technologies={project.technologies}
                        github={project.github}
                    />
                ))}
            </div>
        </section>
    );
}

export default Projects;