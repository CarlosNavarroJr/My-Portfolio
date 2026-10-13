function Contact() {

    return (
        <section id="contact" className="contact">
            <div className="section-container" contact-container>
                <p className="section-eyebrow">Get in touch</p>

                <h2>Let's Connect</h2>

                <p className="contact-description">
                    I'm interested in opportunities to learn, contribute and grow in cloud engineering, IT and cybersecurity. If you'd like to discuss my projects or a potential opportunity, feel free to reach out.
                </p>

                <div className="contact-links">
                    <a 
                    className="contact-link contact-link-primary"
                    href="mailto:your-email@example.com"
                    >
                        Email Me
                    </a>

                    <a 
                    className="contact-link"
                    href="https://github.com/CarlosNavarroJr"
                    target="_blank"
                    rel="noreferrer"
                    >
                        GitHub
                    </a>

                    <a
                    className="contact-link"
                    href="https://www.linkedin.com/in/carlos-navarro-jr/"
                    target="_blank"
                    rel="noreferrer"
                    >
                        LinkedIn
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Contact;
