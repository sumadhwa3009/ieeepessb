// Team.jsx
import styles from "../styles/Team.module.css";
import teamData from "../data/teamData.js";
import TeamCard from "../data/teamCard.jsx";

export default function Team() {
  return (
    <main>
      {/* Hero Section */}
      <section className="hero small-hero">
        <div className="hero-content">
          <h1>Our Team</h1>
          <p>Dedicated leaders driving IEEE PES Student Branch forward</p>
        </div>
      </section>

      <section className={styles["team-section"]}>
        {/* Faculty Advisor Section */}
        <div className={styles["faculty-advisor"]}>
          <h3 className={styles["section-heading"]}>Faculty Advisor</h3>
          <div className={styles["team-grid"]}>
            {teamData.facultyAdvisor.map((member, idx) => (
              <TeamCard key={idx} member={member} delay={idx * 0.2} />
            ))}
          </div>
        </div>

        {/* Executive Committee Section */}
        <div className={styles["executive-committee"]}>
          <h3 className={styles["section-heading"]}>Executive Committee</h3>
          <div className={styles["team-grid"]}>
            {teamData.executiveCommittee.map((member, idx) => (
              <TeamCard key={idx} member={member} delay={idx * 0.2} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
