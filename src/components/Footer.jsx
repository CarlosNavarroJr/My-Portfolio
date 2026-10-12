function Footer() {
    return (

        <footer className="footer">
            <p>
               © {new Date().getFullYear()} Carlos Navarro Jr, All rights reserved. 
            </p>

            <div className="footer-links">
                <a href="#home">Back to Top</a>

                <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noreferrer"
                >
                    GitHub  
                </a>

                <a
                href="https://www.linkedin.com/in/YOUR_USERNAME"
                target="_blank"
                rel="noreferrer"
                >
                    LinkedIn
                </a>

            </div>
        </footer>
    );
}

export default Footer;