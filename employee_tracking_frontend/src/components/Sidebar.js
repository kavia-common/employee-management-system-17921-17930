import React from "react";

/**
 * PUBLIC_INTERFACE
 * Fixed sidebar navigation for the Employee Tracking Dashboard.
 * Props:
 *   - current: string representing the current selected navigation key
 *   - onNavigate: function(key: string) called when a navigation item is clicked
 */
function Sidebar({ current, onNavigate }) {
  const nav = [
    { key: "dashboard", label: "Dashboard", icon: "📊" },
    { key: "employees", label: "Employees", icon: "👨‍💼" },
    { key: "attendance", label: "Attendance", icon: "🕒" },
    { key: "departments", label: "Departments", icon: "🏢" },
    { key: "roles", label: "Roles", icon: "🪪" },
    { key: "reports", label: "Reports", icon: "📑" }
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-logo">
        <span>🟧</span>
        <h1>EmpTrack</h1>
      </div>
      <nav>
        <ul className="sidebar-nav">
          {nav.map((item) => (
            <li
              key={item.key}
              className={current === item.key ? "active" : ""}
              onClick={() => onNavigate(item.key)}
              tabIndex={0}
              aria-label={item.label}
              role="button"
            >
              <span className="icon">{item.icon}</span>
              <span className="label">{item.label}</span>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}

export default Sidebar;
