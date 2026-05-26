import React from "react";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <div className="contact-info">

        <p>
          📱 WhatsApp / Phone:{" "}
          <a
            href="https://wa.me/255626618171"
            target="_blank"
            rel="noreferrer"
          >
            +255 626 618 171
          </a>
        </p>

        <p>
          📧 Email:{" "}
          <a href="mailto:willymwanganje@gmail.com">
            willymwanganje@gmail.com
          </a>
        </p>

      </div>
    </section>
  );
}

export default Contact;