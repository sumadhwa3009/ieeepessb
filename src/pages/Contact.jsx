import { useRef } from "react";
import emailjs from "@emailjs/browser";
import styles from "../styles/Contact.module.css";

export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_3ryxttr", //Service ID from EmailJS
        "template_6avgn25", //Template ID from EmailJS
        form.current,
        "acl3AelyS7CDTvi-b" //Public Key from EmailJS
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully!");
          form.current.reset(); // clear form after submission
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message. Please try again later.");
        }
      );
  };

  return (
    <main>
      {/* Hero Section */}
      <section className="hero small-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            We'd love to hear from you! Reach out for any queries,
            collaborations, or support.
          </p>
        </div>
      </section>

      {/* Contact Section */}
      <section className={styles.contactWrapper}>
        {/* Left Column: Info + Map */}
        <div className={styles.leftColumn}>
          <div className={`${styles.contactCard} ${styles.infoCard}`}>
            <h2>Branch Details</h2>
            <p>
              <i className="fas fa-university"></i> IEEE PES Student Branch
            </p>
            <p>
              <i className="fas fa-map-marker-alt"></i> BMS Institute of
              Technology & Management, <br />
              Avalahalli, Doddaballapura Main Road, <br />
              Avalahalli, Bengaluru - 560064
            </p>
            <p>
              <a href="mailto:ieeepes.bmsit@gmail.com">
                <i className="fas fa-envelope"></i> ieeepes.bmsit@gmail.com
              </a>
            </p>
            <p>
              <a href="tel:+918747004877">
                <i className="fas fa-phone"></i> +91 8747004877
              </a>
            </p>
          </div>

          <div className={`${styles.contactCard} ${styles.mapCard}`}>
            <h2>Locate Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3885.446884438973!2d77.56681777484434!3d13.134187587196273!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae18a5c54ece35%3A0x49c4c47a68a60b9c!2sBMS%20Institute%20of%20Technology%20and%20Management!5e0!3m2!1sen!2sin!4v1759651620007!5m2!1sen!2sin"
              loading="lazy"
              allowFullScreen=""
              title="Google Map"
            ></iframe>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div className={styles.rightColumn}>
          <div className={`${styles.contactCard} ${styles.formCard}`}>
            <h2>Send us a Message</h2>
            <form ref={form} onSubmit={sendEmail} autoComplete="off">
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
              />
              <textarea
                name="message"
                placeholder="Your Message"
                rows="6"
                required
              ></textarea>
              <button type="submit" className="btn btn-outline">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </main>
  );
}
