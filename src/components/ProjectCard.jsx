function ProjectCard({ project }) {
    return (
        <article className="project-card">
            <div className="project-card-content">
                <p className="project-status">
                    {project.status}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                    {project.description}
                </p>

                <div className="project-tech">
                    {project.technologies.map((technology) =>(
                        <span className="tech-tag" key={technology}>
                            {technology}
                        </span>
                    ))}
                </div>

                <div className="project-links">
                    {project.githubUrl && (
                        <a
                        href={project.githubUrl}
                        target="blank"
                        rel="noreferrer"
                        >
                            View Code
                        </a>
                    )}

                    {project.liveUrl && (
                        <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noreferrer"
                        >
                            Live Demo
                        </a>
                    )}
                </div>
            </div>
        </article>
    );
}

export default ProjectCard;