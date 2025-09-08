import styles from "../styles/Events.module.css";

export default function Events() {
  return (
    <main>
      {/* Hero Section (Global small-hero styling) */}
      <section className="hero small-hero">
        <div className="hero-content">
          <h1>Our Events</h1>
          <p>Workshops, seminars, and conferences by IEEE PES Student Branch</p>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className={styles.section}>
        <h2 className={styles["section-title"]}>Upcoming Events</h2>
        <div className={styles["events-grid"]}>
          {/* Event Card 1 */}
          <div className={`${styles["event-card"]} glass-card`}>
            <h2>Technical Talk on Renewable Energy</h2>
            <p className={styles["event-date"]}>📅 September 10, 2025</p>
            <p>
              Join us for an insightful session on the future of renewable
              energy and smart grids.
            </p>
            <a href="#" className="btn">
              Register
            </a>
          </div>

          {/* Event Card 2 */}
          <div className={`${styles["event-card"]} glass-card`}>
            <h2>Workshop: AI in Power Systems</h2>
            <p className={styles["event-date"]}>📅 October 5, 2025</p>
            <p>
              Hands-on workshop exploring the applications of Artificial
              Intelligence in power distribution.
            </p>
            <a href="#" className="btn">
              Register
            </a>
          </div>

          {/* Event Card 3 */}
          <div className={`${styles["event-card"]} glass-card`}>
            <h2>PES Hackathon</h2>
            <p className={styles["event-date"]}>📅 November 15–16, 2025</p>
            <p>
              A 24-hour hackathon bringing together innovators to solve
              challenges in sustainable energy.
            </p>
            <a href="#" className="btn">
              Register
            </a>
          </div>
        </div>
      </section>

      {/* Past Events */}
      <section className={styles.section}>
        <h2 className={styles["section-title"]}>Past Events</h2>
        <div className={styles["events-grid"]}>
          {/* Past Event 1 */}
          <div className={styles["past-event-card"]}>
            <h3>Energy Awareness Drive</h3>
            <p className={styles["event-date"]}>📅 March 15, 2025</p>
            <p>
              A community outreach event educating students about energy
              conservation and sustainability.
            </p>
          </div>

          {/* Past Event 2 */}
          <div className={styles["past-event-card"]}>
            <h3>Smart Grid Symposium</h3>
            <p className={styles["event-date"]}>📅 January 20, 2025</p>
            <p>
              Expert speakers discussed innovations in smart grids and future
              challenges.
            </p>
          </div>

          {/* Past Event 3 */}
          <div className={styles["past-event-card"]}>
            <h3>Intro to IEEE PES</h3>
            <p className={styles["event-date"]}>📅 October 5, 2024</p>
            <p>
              Orientation session for new members to understand IEEE PES goals
              and opportunities.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
