import React, { useState, useEffect } from "react";
import "./App.css";
import "./dashboard.css";
import Sidebar from "./components/Sidebar";
import Navbar from "./components/Navbar";
import Dashboard from "./views/Dashboard";
import Employees from "./views/Employees";
import Attendance from "./views/Attendance";
import Departments from "./views/Departments";
import Roles from "./views/Roles";
import Reports from "./views/Reports";

/**
 * PUBLIC_INTERFACE
 * Main Employee Tracking System App entry point.
 * 
 * Dashboard layout with sidebar navigation,
 * top navbar, and content area.
 */
function App() {
  const [theme, setTheme] = useState("light");
  const [section, setSection] = useState("dashboard");

  // Effect to apply theme to document element
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  // PUBLIC_INTERFACE
  const toggleTheme = () => setTheme(prev => (prev === "light" ? "dark" : "light"));

  // Navigation state/title mapping
  const titles = {
    dashboard: "Dashboard",
    employees: "Employees",
    attendance: "Attendance",
    departments: "Departments",
    roles: "Roles",
    reports: "Reports"
  };
  // Pick view for section
  let contentView;
  switch (section) {
    case "dashboard": contentView = <Dashboard />; break;
    case "employees": contentView = <Employees />; break;
    case "attendance": contentView = <Attendance />; break;
    case "departments": contentView = <Departments />; break;
    case "roles": contentView = <Roles />; break;
    case "reports": contentView = <Reports />; break;
    default: contentView = null;
  }

  return (
    <div className="dashboard-root">
      <Sidebar current={section} onNavigate={setSection} />
      <main className="main-panel">
        <Navbar title={titles[section]} />
        <button
          className="theme-toggle"
          onClick={toggleTheme}
          style={{ position: "absolute", top: 23, right: 30, zIndex: 2 }}
          aria-label={`Switch to ${theme === "light" ? "dark" : "light"} mode`}
        >
          {theme === "light" ? "🌙 Dark" : "☀️ Light"}
        </button>
        {contentView}
      </main>
    </div>
  );
}

export default App;
