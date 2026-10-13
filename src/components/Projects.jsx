import ProjectCard from "./ProjectCard";

const projects = [
    {
        title: "Project Coming Soon",
        status: "In Progress",
        description: "Project in progress, stay tunned",
        technologies: ["React"],
        githubUrl: "",
        liveUrl: "",
    },
      {
        title: "Project Coming Soon",
        status: "In Progress",
        description: "Project in progress, stay tunned",
        technologies: ["React"],
        githubUrl: "",
        liveUrl: "",
    },
      {
        title: "Project Coming Soon",
        status: "In Progress",
        description: "Project in progress, stay tunned",
        technologies: ["React"],
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