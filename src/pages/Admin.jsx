import { useState } from "react";
import { addLetter } from "../api/usersApi";

export default function Admin() {
  const [userId, setUserId] = useState("");
  const [letter, setLetter] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await addLetter(userId, letter);
    alert("Letter added");
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Admin panel</h2>

      <input
        placeholder="User ID"
        value={userId}
        onChange={e => setUserId(e.target.value)}
      />

      <textarea
        placeholder="Letter text"
        value={letter}
        onChange={e => setLetter(e.target.value)}
      />

      <button>Add letter</button>
    </form>
  );
}
