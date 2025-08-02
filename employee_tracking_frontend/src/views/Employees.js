import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Employee list and management: list, add, edit, and delete employee records.
 */
function Employees() {
  // Demo local state only; replace with real data/API.
  const [employees, setEmployees] = useState([
    { id: 1, name: "Alice Lee", department: "HR", role: "Manager", email: "alice@demo.com" },
    { id: 2, name: "Bob Silva", department: "IT", role: "Dev", email: "bob@demo.com" }
  ]);
  const [editingId, setEditingId] = useState(null);
  const [form, setForm] = useState({ name: "", department: "", role: "", email: "" });

  const startEdit = (emp) => {
    setEditingId(emp.id);
    setForm({ ...emp });
  };
  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleAdd = () => {
    setEmployees([
      ...employees,
      { ...form, id: Date.now() }
    ]);
    setForm({ name: "", department: "", role: "", email: "" });
  };
  const handleSave = () => {
    setEmployees(employees.map(emp =>
      emp.id === editingId ? { ...form, id: editingId } : emp
    ));
    setEditingId(null);
    setForm({ name: "", department: "", role: "", email: "" });
  };
  const handleDelete = (id) => {
    setEmployees(employees.filter(e => e.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div className="content">
      <h2>Employees</h2>
      <div className="card">
        <table className="employee-table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Department</th>
              <th>Role</th>
              <th>Email</th>
              <th style={{width: "130px"}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.map(emp => (
              <tr key={emp.id}>
                <td>{editingId === emp.id
                  ? <input name="name" value={form.name} onChange={handleChange} />
                  : emp.name}
                </td>
                <td>{editingId === emp.id
                  ? <input name="department" value={form.department} onChange={handleChange} />
                  : emp.department}
                </td>
                <td>{editingId === emp.id
                  ? <input name="role" value={form.role} onChange={handleChange} />
                  : emp.role}
                </td>
                <td>{editingId === emp.id
                  ? <input name="email" value={form.email} onChange={handleChange} />
                  : emp.email}
                </td>
                <td>
                  {editingId === emp.id
                    ? (<>
                        <button className="btn" onClick={handleSave}>Save</button>
                        <button className="btn secondary" onClick={() => setEditingId(null)}>Cancel</button>
                      </>)
                    : (<>
                        <button className="btn" onClick={() => startEdit(emp)}>Edit</button>
                        <button className="btn secondary" onClick={() => handleDelete(emp.id)}>Delete</button>
                      </>)
                  }
                </td>
              </tr>
            ))}
            {editingId == null && (
              <tr>
                <td><input name="name" value={form.name} onChange={handleChange} placeholder="Name" /></td>
                <td><input name="department" value={form.department} onChange={handleChange} placeholder="Department" /></td>
                <td><input name="role" value={form.role} onChange={handleChange} placeholder="Role" /></td>
                <td><input name="email" value={form.email} onChange={handleChange} placeholder="Email" /></td>
                <td>
                  <button className="btn" onClick={handleAdd}>Add</button>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Employees;
