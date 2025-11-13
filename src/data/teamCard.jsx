// TeamCard.jsx
import styles from "../styles/Team.module.css";

export default function TeamCard({ member, delay = 0 }) {
  // member: { name, role, image, socials: { linkedin, instagram, email } }

  const getInitial = (name) => {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
  };

  const hasImage = member.image && member.image !== "";

  // Safely access socials
  const socials = member.socials || {};
  const linkedin = socials.linkedin || "";
  const instagram = socials.instagram || "";
  const email = socials.email || "";

  return (
    <div
      className={`${styles["team-card"]} ${styles["fade-up"]}`}
      style={{ animationDelay: `${delay}s` }}
    >
      <div className={styles["photo-wrapper"]}>
        {hasImage ? (
          <img
            src={member.image}
            alt={member.name}
            className={styles["team-photo"]}
          />
        ) : (
          <div className={styles["default-photo"]}>
            {getInitial(member.name)}
          </div>
        )}
      </div>

      <h4>{member.name}</h4>
      {/* For volunteer committee some entries may not have role; keep as-is */}
      {member.role && <p>{member.role}</p>}

      <div className={styles["social-links"]}>
        {/* LinkedIn */}
        {linkedin ? (
          <a href={linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <i className="fab fa-linkedin"></i>
          </a>
        ) : null}

        {/* Instagram */}
        {instagram ? (
          <a href={instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
        ) : null}

        {/* Email (new) */}
        {email ? (
          <a href={`mailto:${email}`} aria-label="Email">
            <i className="fas fa-envelope"></i>
          </a>
        ) : null}
      </div>
    </div>
  );
}
