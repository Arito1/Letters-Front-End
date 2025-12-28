import { useEffect, useState } from "react";
import { addLetter, getAllUsers } from "../api/usersApi";

export default function Admin() {
  const [users, setUsers] = useState([]);
  const [selectedUserId, setSelectedUserId] = useState(null);
  const [letter, setLetter] = useState("");

  useEffect(() => {
    async function loadUsers() {
      const data = await getAllUsers();
      setUsers(data);
    }
    loadUsers();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();

    if (!selectedUserId) {
      alert("Select a user");
      return;
    }

    await addLetter(selectedUserId, letter);
    alert("Letter added");
    setLetter("");
  }

  return (
    <div style={{ padding: "20px" }}>
      <h2>Admin panel</h2>

      <h3>Users</h3>

      <table border="1" cellPadding="8">
        <thead>
          <tr>
            <th>ID</th>
            <th>Username</th>
            <th>Password</th>
          </tr>
        </thead>
        <tbody>
          {users.map(user => (
            <tr
              key={user.id}
              onClick={() => setSelectedUserId(user.id)}
              style={{
                cursor: "pointer",
                background:
                  user.id === selectedUserId ? "green" : "transparent"
              }}
            >
              <td>{user.id}</td>
              <td>{user.username}</td>
              <td>{user.password}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <h4>
        Selected user ID:{" "}
        <span style={{ color: "green" }}>
          {selectedUserId ?? "none"}
        </span>
      </h4>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Letter text"
          value={letter}
          onChange={e => setLetter(e.target.value)}
          rows={4}
          cols={40}
        />

        <br />
        <button>Add letter</button>
      </form>
    </div>
  );
}
