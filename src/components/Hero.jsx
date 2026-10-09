function Hero() {
    return (
        <section id="home" className="hero"> 
            <div className="hero-content">
                <p className="hero-intro">Hello, I'm </p>
                <h1>Carlos Navarro Jr</h1>

                <h2>
                    Software Developer &amp; Cybersecurity
                </h2>

                <p className="hero-description">
                    I build practical projects to develop my skills in fullstack development, cloud infrastructure cybersecurity and automation.
                </p>

                <div className="hero-actions">
                    <a className="btn btn-primary" href="#projects">
                        View My Projects
                    </a>

                    <a className="btn btn-secondary" href="#contact">
                        Contact Me
                    </a>
                </div>
            </div>

        </section>
    );
}

export default Hero;