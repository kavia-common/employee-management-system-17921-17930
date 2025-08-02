import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Attendance logging/history view with add and basic table.
 */
function Attendance() {
  // Local demo state
  const [history, setHistory] = useState([
    { id: 1, name: "Alice Lee", date: "2024-06-09", status: "Present" },
    { id: 2, name: "Bob Silva", date: "2024-06-09", status: "Remote" }
  ]);
  const [form, setForm] = useState({ name: "", date: "", status: "Present" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = () => {
    setHistory([...history, { ...form, id: Date.now() }]);
    setForm({ name: "", date: "", status: "Present" });
  };

  return (
    <div className="content">
      <h2>Attendance</h2>
      <div className="card">
        <h3>Log Attendance</h3>
        <form
          className="attendance-form"
          onSubmit={e => { e.preventDefault(); handleAdd(); }}>
          <input name="name" value={form.name} onChange={handleChange} placeholder="Employee Name" required />
          <input type="date" name="date" value={form.date} onChange={handleChange} required />
          <select name="status" value={form.status} onChange={handleChange}>
            <option value="Present">Present</option>
            <option value="Remote">Remote</option>
            <option value="Leave">Leave</option>
          </select>
          <button className="btn" type="submit">Add</button>
        </form>
        <table className="attendance-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Date</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {history.map(item => (
              <tr key={item.id}>
                <td>{item.name}</td>
                <td>{item.date}</td>
                <td>{item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Attendance;
