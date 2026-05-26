import React, { useState } from "react";
import axios from "axios";

function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("http://localhost:5000/api/contact", form);

      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        message: ""
      });

    } catch (error) {
      alert("Failed to send message");
    }
  };

  return (
    <section id="contact" className="contact">
      <h2>Contact Me</h2>

      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
        />

        <button type="submit">Send Message</button>

      </form>
    </section>
  );
}

export default Contact;