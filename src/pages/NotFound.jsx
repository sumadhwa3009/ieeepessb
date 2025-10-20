import { NavLink } from "react-router-dom";
import styles from "../styles/NotFound.module.css";

export default function NotFound() {
  return (
    <div className={styles.notfound}>
      <div className={styles.icon}>😕</div>
      <h1>404 — Page Not Found</h1>
      <p>
        The page you’re looking for might have been removed, renamed, or is
        temporarily unavailable.
      </p>
      <NavLink to="/" className="btn btn-outline">
        Go back to Home
      </NavLink>
    </div>
  );
}
