import styles from "../styles/Contact.module.css";

export default function Contact() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero small-hero">
        <div className="hero-content">
          <h1>Get in Touch</h1>
          <p>
            We’d love to hear from you! Reach out for any queries,
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
              Avalahalli, Doddaballapura Road, <br />
              Yelahanka, Bengaluru - 560064
            </p>
            <p>
              <a href="mailto:ieeepes.bmsit@gmail.com">
                <i className="fas fa-envelope"></i> ieeepes.bmsit@gmail.com
              </a>
            </p>
            <p>
              <i className="fas fa-phone"></i> +91 91136 79843
            </p>
          </div>

          <div className={`${styles.contactCard} ${styles.mapCard}`}>
            <h2>Locate Us</h2>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.959180833409!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9f84e29%3A0xdeeaa16c0f7e9d1!2sBengaluru!5e0!3m2!1sen!2sin!4v1611123456789"
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
            <form autoComplete="false" method="GET">
              <input type="text" placeholder="Your Name" required />
              <input type="email" placeholder="Your Email" required />
              <textarea placeholder="Your Message" rows="6" required></textarea>
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
