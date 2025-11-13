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
        <p>Something powerful is charging up... Stay tuned!</p>

        {/*<div className={styles["events-grid"]}>
          {/* Event Card 1 }
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

          {/* Event Card 2 }
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

          {/* Event Card 3 }
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
           
        </div> */}
      </section>

      {/* Past Events */}
      <section className={styles.section}>
        <h2 className={styles["section-title"]}>Past Events</h2>
        <div className={styles["events-grid"]}>
          {/* Past Event 1 */}
          <div className={styles["past-event-card"]}>
            <h3>Watt Next</h3>
            <p className={styles["event-date"]}>📅 October 25, 2025</p>
            <p>
              A technical conclave 2025 - a meetup of innovators, creators and
              tech lovers shaping the future!{" "}
            </p>
          </div>

          {/* Past Event 2*/}
          <div className={styles["past-event-card"]}>
            <h3>Kill Switch</h3>
            <p className={styles["event-date"]}>📅 October 24, 2025</p>
            <p>
              Flip the switch, Catch the glitch - A thrilling mystery - solving
              challenge -- one murder with endless secrets
            </p>
          </div>

          {/* Past Event 3 */}
          <div className={styles["past-event-card"]}>
            <h3>Intro to IEEE PES</h3>
            <p className={styles["event-date"]}>📅 September 25, 2025</p>
            <p>
              Orientation session for new members to understand IEEE PES goals
              and opportunities.
            </p>
          </div>

          {/* Past Event 4 */}
          <div className={styles["past-event-card"]}>
            <h3>EmpowerEd</h3>
            <p className={styles["event-date"]}>📅 September 05, 2025</p>
            <p>
              A community outreach event educating students about Renewable
              Energy Sources, Robotics and Artificial Intelligence.
            </p>
          </div>

          {/* Past Event 5 */}
          <div className={styles["past-event-card"]}>
            <h3>Outreach Programme - 1</h3>
            <p className={styles["event-date"]}>📅 October 5, 2025</p>
            <p>A community outreach event educating students</p>
          </div>
        </div>
      </section>
    </main>
  );
}
