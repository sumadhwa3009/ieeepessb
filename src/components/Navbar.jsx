import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import styles from "../styles/Navbar.module.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // cleanup listener on unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.navWrap}>
        {/* Brand */}
        <div className={styles.brand}>
          <img src="/images/ieee-pes-logo.png" alt="pes_logo_bmsitm" />
          <h3>IEEE PES BMSIT&M</h3>
        </div>

        {/* Hamburger Toggle */}
        <div
          className={`${styles.navToggle} ${menuOpen ? styles.open : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Navigation */}
        <nav className={`${styles.nav} ${menuOpen ? styles.open : ""}`}>
          <ul>
            {["Home", "About", "Events", "Team", "Contact"].map((item) => (
              <li key={item}>
                <NavLink
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  end={item === "Home"}
                  className={({ isActive }) =>
                    isActive ? `${styles.link} ${styles.active}` : styles.link
                  }
                  onClick={() => setMenuOpen(false)}
                >
                  {item}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
