import React from "react";

/**
 * PUBLIC_INTERFACE
 * Employee Tracking main dashboard view with KPI summary cards.
 */
function Dashboard() {
  return (
    <div className="content dashboard">
      <h2>Welcome to EmpTrack</h2>
      <div className="dashboard-cards">
        <div className="card stat-card">
          <span className="stat-label">Employees</span>
          <span className="stat-value">35</span>
        </div>
        <div className="card stat-card">
          <span className="stat-label">Departments</span>
          <span className="stat-value">5</span>
        </div>
        <div className="card stat-card">
          <span className="stat-label">Active Today</span>
          <span className="stat-value">30</span>
        </div>
        <div className="card stat-card accent">
          <span className="stat-label">On Leave</span>
          <span className="stat-value">2</span>
        </div>
      </div>
      <div className="dashboard-description">
        Track employee records, attendance, roles, and departments.
      </div>
    </div>
  );
}

export default Dashboard;
