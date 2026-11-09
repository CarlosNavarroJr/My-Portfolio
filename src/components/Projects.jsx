import ProjectCard from "./ProjectCard";
import ticketingImage from "../assets/projects/supportDesk.png";
import bakeryImage from "../assets/projects/letysPostres.png";

const projects = [
  {
    title: "IT Ticketing System",
    status: "In Progress",
    description:
      "A web application designed to create, track, and manage IT support tickets through an organized, user-friendly interface.",
    technologies: ["React", "Javascript", "CSS"],
    githubUrl: "https://github.com/CarlosNavarroJr/it-ticketing-system",
    liveUrl: "",
    image: ticketingImage,
  },
  {
    title: "Lety's Postres Bakery",
    status: "In Progress",
    description:
      "An E-commerce bakery website built with React, JavaScript, and CSS for a real-world business. Features reusable components, product showcases, custom cake inquiries, and mobile-friendly navigation. Designed to provide a seamless customer experience, with an expanding product catalog.",
    technologies: ["React", "Javascript", "CSS", "HTML"],
    githubUrl: "https://github.com/CarlosNavarroJr/Letys-Postres",
    liveUrl: "",
    image: bakeryImage,
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
        <p className="section-eyebrow">What I'm building</p>

        <h2>Projects</h2>

        <p className="section-description">
          Hands-on projects that demonstrate my learning, problem-solving, and
          technical skills.
        </p>

        <div className="projects-grid">
          {projects.map((project) => (
            <ProjectCard key={project.title} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
