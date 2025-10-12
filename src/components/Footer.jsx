import styles from "../styles/Footer.module.css";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer>
      <div className={styles.footer}>
        <div className={styles.socials}>
          <h4>Social</h4>
          <a
            href="https://www.linkedin.com/company/ieee-pes-bmsit/"
            target="_blank"
          >
            <i className="fab fa-linkedin"></i>/PES SBC
          </a>
          <a href="https://tinyurl.com/df6wvawb" target="_blank">
            <i className="fab fa-instagram"></i>/ PES SBC
          </a>
        </div>
        <div className={styles.fcontact}>
          <h4>Contact</h4>
          <p>
            Email:{" "}
            <a href="mailto:ieeepes.bmsit@gmail.com">ieeepes.bmsit@gmail.com</a>
          </p>
          <p>
            Mobile: {"\u00A0"}
            <a href="tel:+918747004877"> +91 8747004877</a> (Chair)
            <br />
            {"\u2003"}
            {"\u2003"}
            {"\u2003"}
            {"\u2003"}
            <a href="tel:+918296098776">+91 8296098776</a> (Secretary)
          </p>
        </div>
        <div className={styles.faddress}>
          <h4>Address</h4>
          <p>
            BMS Institute Of Technology and Management
            <br />
            Avalahalli, Doddaballapura Road <br />
            Yelahanka, Bengaluru - 560064
          </p>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        <p>© {year} PES Club, Web Development Team</p>
        <p>All rights Reserved</p>
      </div>
    </footer>
  );
}
