function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer>
            <div>
                <h2>Carlos Navarro Jr</h2>

                <p>
                    Cloud, cybersecurity and software development.
                </p>
            </div>

            <nav>
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#contact">Contact</a>
            </nav>

            <div>
                <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                >
                  GitHub  
                </a>
            
                <a
                 href="https://www.github.com"
                target="_blank"
                rel="noreferrer"
                >
                    LinkedIn
                </a>
            </div>

            <p>
               © {currentYear} Carlos Navarro Jr. All rights reserved. 
            </p>
        </footer>
    );
}

export default Footer;