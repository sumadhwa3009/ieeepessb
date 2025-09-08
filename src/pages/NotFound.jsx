import { NavLink } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>404 — Page Not Found</h1>
      <p>The page you’re looking for doesn’t exist.</p>
      <NavLink to="/">Go back home</NavLink>
    </>
  );
}
