import { useEffect, useState } from "react";
import { getUserLetter } from "../api/usersApi";
import "./Letter.css";

export default function Letter() {
  const [letter, setLetter] = useState("");
  const userId = localStorage.getItem("userId");

  useEffect(() => {
    async function loadLetter() {
      const data = await getUserLetter(userId);
      setLetter(data);
    }

    loadLetter();
  }, [userId]);

  return (
    <div className="letter-page">
      <div className="letter-paper letter-animate">
        <div className="letter-frame" />

        <h2 className="letter-title">Your Christmas Letter</h2>

        <div className="letter-text">
          {letter || "No letter yet"}
        </div>

        <div className="letter-signature">
          — Santa 🎅
        </div>
      </div>
    </div>
  );
}
