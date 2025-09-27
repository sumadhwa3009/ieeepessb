import React, { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";
import { Link } from "react-router-dom";

export default function Home() {
  const [scrollUp, setScrollUp] = useState(false); // <-- added state
  let lastScroll = 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < lastScroll) {
        setScrollUp(true); // scrolling up
      } else {
        setScrollUp(false); // scrolling down
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {/* Hero Section */}
      <section
        className={`${styles.hero} ${scrollUp ? styles["scroll-up"] : ""}`}
      >
        <img src="../../images/ieee-pes-logo.png" alt="pes_logo" />
        <h1>
          IEEE POWER AND ENERGY SOCIETY <br />
        </h1>
        <p>
          PES Student Branch Chapter is more than just a community - it's a
          platform to learn, <br />
          lead and create meaningful impact in the power and energy domain.
        </p>
        <a href="#highlights" className="btn btn-outline">
          Learn More
        </a>
      </section>

      {/* ...rest remains exactly the same */}

      {/* Highlights Section */}
      <section id="highlights" className={styles.highlights}>
        <div className={`card glass ${styles.card}`}>
          <h3>About the Chapter</h3>
          <p>
            PES Student Branch Chapter nurtures young minds with knowledge,
            skills, and experiences beyond the classroom.
          </p>
          <Link to="/about" className="btn btn-outline">
            Explore More
          </Link>
        </div>

        <div className={`card glass ${styles.card}`}>
          <h3>Membership</h3>
          <p>
            Become part of a global network of experts and students working
            together to solve energy challenges.
          </p>
          <Link to="/team" className="btn btn-outline">
            Meet the Team
          </Link>
        </div>

        <div className={`card glass ${styles.card}`}>
          <h3>Contact Us</h3>
          <p>
            Have ideas or questions? Reach out for collaborations, partnerships
            or student support.
          </p>
          <Link to="/contact" className="btn btn-outline">
            Contact Now
          </Link>
        </div>
      </section>

      {/* Why Join Section */}
      <section className={styles.whyJoin}>
        <h2>Why Join IEEE PES?</h2>
        <p>
          By joining IEEE PES, you gain access to global resources, technical
          insights, networking opportunities, and a platform to showcase your
          skills.
        </p>
        <div className={styles.reasonsGrid}>
          <div className="card glass">
            <h4>Global Network</h4>
            <br />
            <p>Connect with members across 160+ countries.</p>
          </div>
          <div className="card glass">
            <h4>Knowledge Access</h4>
            <br />
            <p>Stay updated with journals, conferences, and workshops.</p>
          </div>
          <div className="card glass">
            <h4>Innovation</h4>
            <br />
            <p>Collaborate on projects that make real-world impact.</p>
          </div>
        </div>
      </section>

      {/* Quick Stats */}
      {/*<section className={styles.statsSection}>
        <div className={styles.statCard}>
          <h2>200+</h2>
          <p>Student Members</p>
        </div>
        <div className={styles.statCard}>
          <h2>50+</h2>
          <p>Events Organized</p>
        </div>
        <div className={styles.statCard}>
          <h2>10+</h2>
          <p>Industry Collaborations</p>
        </div>
      </section>*/}
    </div>
  );
}
