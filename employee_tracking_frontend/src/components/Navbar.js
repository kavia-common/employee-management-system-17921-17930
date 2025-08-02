import React from "react";

/**
 * PUBLIC_INTERFACE
 * Minimal, responsive top bar with module/context title and optional user area.
 * Props:
 *   - title (string): Current screen/page title
 */
function Navbar({ title }) {
  return (
    <header className="navbar">
      <div className="navbar-title">{title}</div>
      <div className="navbar-user">
        <span role="img" aria-label="User">👤</span> Admin
      </div>
    </header>
  );
}

export default Navbar;
