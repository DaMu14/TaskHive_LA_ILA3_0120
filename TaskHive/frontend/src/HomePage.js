import React from "react";
import { useNavigate } from "react-router-dom";

function HomePage() {
  const navigate = useNavigate();

  const handleNavigate = (path) => {
    navigate(path);
  };

  return (
    <div className="home-page">
      <header className="header">
        <h1>Willkommen</h1>
      </header>
      <div className="options">
        <button className="option-button" onClick={() => handleNavigate("/todo")}>
          To-Do Liste
        </button>
        <button
          className="option-button"
          onClick={() => handleNavigate("/shopping-lists")}
        >
          Shopping-Liste
        </button>
      </div>
    </div>
  );
}

export default HomePage;
