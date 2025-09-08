// TeamCard.jsx
import styles from "../styles/Team.module.css";

export default function TeamCard({ member, delay }) {
  // Extract first letter of first name if image is missing
  const getInitial = (name) => {
    if (!name) return "?";
    return name.charAt(0).toUpperCase();
  };

  const hasImage = member.image && member.image !== "";

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
      <p>{member.role}</p>
      <div className={styles["social-links"]}>
        <a href={member.socials.linkedin}>
          <i className="fab fa-linkedin"></i>
        </a>
        <a href={member.socials.instagram}>
          <i className="fab fa-instagram"></i>
        </a>
      </div>
    </div>
  );
}
