import React, { useState } from "react";

/**
 * PUBLIC_INTERFACE
 * Role listing and management screen.
 */
function Roles() {
  const [roles, setRoles] = useState([
    { id: 1, name: "Manager" },
    { id: 2, name: "Dev" },
    { id: 3, name: "HR Executive" }
  ]);
  const [editingId, setEditingId] = useState(null);
  const [input, setInput] = useState("");

  const handleAdd = () => {
    if (input.trim() === "") return;
    setRoles([...roles, { id: Date.now(), name: input }]);
    setInput("");
  };
  const handleEdit = (role) => {
    setEditingId(role.id);
    setInput(role.name);
  };
  const handleSave = () => {
    setRoles(roles.map(role =>
      role.id === editingId ? { id: editingId, name: input } : role
    ));
    setEditingId(null);
    setInput("");
  };
  const handleDelete = (id) => {
    setRoles(roles.filter(role => role.id !== id));
    if (editingId === id) setEditingId(null);
  };

  return (
    <div className="content">
      <h2>Roles</h2>
      <div className="card">
        <table className="role-table">
          <thead>
            <tr>
              <th>Role</th>
              <th style={{width:'110px'}}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {roles.map(role => (
              <tr key={role.id}>
                <td>
                  {editingId === role.id
                    ? <input value={input} onChange={e => setInput(e.target.value)} />
                    : role.name}
                </td>
                <td>
                  {editingId === role.id
                    ? <>
                        <button className="btn" onClick={handleSave}>Save</button>
                        <button className="btn secondary" onClick={() => setEditingId(null)}>Cancel</button>
                      </>
                    : <>
                        <button className="btn" onClick={() => handleEdit(role)}>Edit</button>
                        <button className="btn secondary" onClick={() => handleDelete(role.id)}>Delete</button>
                      </>
                  }
                </td>
              </tr>
            ))}
            {editingId == null && (
              <tr>
                <td>
                  <input value={input} onChange={e => setInput(e.target.value)} placeholder="New Role" />
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

export default Roles;
