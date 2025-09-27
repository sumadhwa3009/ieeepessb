import styles from "../styles/About.module.css";

export default function About() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero small-hero">
        <h1>About IEEE PES Student Branch</h1>
        <p>Empowering students in power and energy to innovate and lead.</p>
      </section>

      {/* About Content */}
      <section className={`${styles.section} ${styles["two-column"]}`}>
        <div className={styles["text-block"]}>
          <h2 className={styles["section-title"]}>Who We Are</h2>
          <p>
            The IEEE Power & Energy Society (PES) Student Branch is a dynamic
            community of aspiring engineers and researchers passionate about
            advancing innovations in power, energy, and sustainable solutions.
          </p>
          <p>
            We provide students with opportunities for professional growth,
            technical development, and collaboration with industry leaders.
          </p>
        </div>
        <div className={styles["image-block"]}>
          <img src="images\homepage-icon-join.png" alt="IEEE PES Students" />
        </div>
      </section>

      {/* Mission, Vision, Values */}
      <section className={styles.section}>
        <h2 className={styles["section-title"]}>Our Core Values</h2>
        <div className={styles["card-grid"]}>
          <div className={styles["glass-card"]}>
            <h3>Mission</h3>
            <p className={styles["text-muted"]}>
              To be the leading provider of scientific and engineering
              information on electric power and energy for the betterment of
              humanity.
            </p>
          </div>
          <div className={styles["glass-card"]}>
            <h3>Vision</h3>
            <p className={styles["text-muted"]}>
              To lead the development of technology, fostering innovation and
              collaboration in the global power and energy sector.
            </p>
          </div>
          <div className={styles["glass-card"]}>
            <h3>Values</h3>
            <p className={styles["text-muted"]}>
              Integrity, Innovation, Sustainability, and Professional Excellence
              are the guiding principles of our branch.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
