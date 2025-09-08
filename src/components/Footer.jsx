import styles from "../styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className={styles.footer}>
      <div className="container">
        <p>© {year} PES Club. All rights reserved.</p>
      </div>
      <div className={styles.socials}>
        <a href="#">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#">
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </footer>
  );
}
