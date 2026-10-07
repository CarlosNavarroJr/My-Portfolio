function ProjectCard({ title, description, technologies, github }) {
    return (
        <article>
            <h3>{title}</h3>

            <p>{description}</p>

            <div>
                {technologies.map((technology) => (
                    <span key={technology}>
                        {technology}
                    </span>
                ))}
            </div>

            <a href={github} target="_blank" rel="noreferrer">
                View on Github
            </a>
        </article>
    );
}

export default ProjectCard;