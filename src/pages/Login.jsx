import { useState } from "react";
import { getAllUsers } from "../api/usersApi";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  async function handleLogin(e) {
    e.preventDefault();

    const users = await getAllUsers();
    const user = users.find(
      u => u.username === username && u.password === password
    );

    if (!user) {
      alert("Wrong credentials");
      return;
    }

    localStorage.setItem("userId", user.id);

    if (username === "Arito" && password === "arthur123") {
      navigate("/admin");
    } else {
      navigate("/letter");
    }
  }
  console.log(import.meta.env.VITE_API_URL);


  return (
    
    <div className="login-page">
      <form className="login-card" onSubmit={handleLogin}>
        <h2 className="login-title">Welcome</h2>
        <p className="login-subtitle">Use your login and password that I gave you</p>

        <div className="input-group">
          <label>Username</label>
          <input
            placeholder="Enter username"
            value={username}
            onChange={e => setUsername(e.target.value)}
          />
        </div>

        <div className="input-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
        </div>

        <button className="login-button">Login</button>
      </form>
    </div>
  );

}
