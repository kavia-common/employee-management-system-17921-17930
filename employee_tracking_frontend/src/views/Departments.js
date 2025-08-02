import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Department listing and management screen.
 */
function Departments() {
  const [departments, setDepartments] = useState([
    { id: 1, name: "HR" },
    { id: 2, name: "IT" },
    { id: 3, name: "Finance" }
  ]);
  const [editingId, setEditingId] = useState(null);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setDepartments([...departments, { id: Date.now(), name: input }]);
    setInput("");
  };
  const handleEdit = (dep) => {
    setEditingId(dep.id);
    setInput(dep.name);
  };
  const handleSave = () => {
    setDepartments(departments.map(dep =>
      dep.id === editingId ? { id: editingId, name: input } : dep
    ));
    setEditingId(null);
    setInput("");
  };
  const handleDelete = (id) => {
    setDepartments(departments.filter(dep => dep.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div className="content">
      <h2>Departments</h2>
      <div className="card">
        <table className="dept-table">
          <thead>
            <tr>
              <th>Department</th>
              <th style={{width:'110px'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {departments.map(dep => (
              <tr key={dep.id}>
                <td>
                  {editingId === dep.id
                    ? <input value={input} onChange={e => setInput(e.target.value)} />
                    : dep.name}
                </td>
                <td>
                  {editingId === dep.id
                    ? <>
                        <button className="btn" onClick={handleSave}>Save</button>
                        <button className="btn secondary" onClick={() => setEditingId(null)}>Cancel</button>
                      </>
                    : <>
                        <button className="btn" onClick={() => handleEdit(dep)}>Edit</button>
                        <button className="btn secondary" onClick={() => handleDelete(dep.id)}>Delete</button>
                      </>
                  }
                </td>
              </tr>
            ))}
            {editingId == null && (
              <tr>
                <td>
                  <input value={input} onChange={e => setInput(e.target.value)} placeholder="New Department" />
                </td>
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

export default Departments;
