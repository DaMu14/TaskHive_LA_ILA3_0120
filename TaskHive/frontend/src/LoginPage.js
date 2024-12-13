import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function LoginPage({ setIsAuthenticated }) {
  const [isLogin, setIsLogin] = useState(true); // Umschalten zwischen Login und Registrierung
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const apiBaseUrl = "http://localhost:5000/api/auth";

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(""); // Fehlermeldung zurücksetzen

    if (password.length < 5) {
      setMessage("Das Passwort muss mindestens 5 Zeichen lang sein.");
      return;
    }

    const endpoint = isLogin ? `${apiBaseUrl}/login` : `${apiBaseUrl}/register`;

    try {
      const response = await axios.post(endpoint, { username, password });

      if (isLogin) {
        setIsAuthenticated(true);
        localStorage.setItem("token", response.data); // JWT speichern
        navigate("/todo"); // Weiterleitung zur To-Do-Seite
      } else {
        setMessage("Registrierung erfolgreich! Bitte loggen Sie sich ein.");
        setIsLogin(true); // Zur Login-Ansicht wechseln
      }

      setUsername("");
      setPassword("");
    } catch (error) {
      setMessage(
        error.response?.data ||
          "Etwas ist schiefgelaufen. Bitte versuchen Sie es erneut."
      );
    }
  };

  return (
    <div>
      <header className="header">
        <h1>Task Hive</h1>
      </header>
      <div className="auth-container">
        <h1>{isLogin ? "Login" : "Registrieren"}</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Benutzername"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Passwort"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button type="submit">
            {isLogin ? "Einloggen" : "Registrieren"}
          </button>
        </form>
        <p
          className="toggle-link"
          onClick={() => {
            setIsLogin(!isLogin);
            setMessage(""); // Fehlermeldung zurücksetzen
          }}
        >
          {isLogin ? (
            <>
              Noch keinen Account?{" "}
              <span className="highlight">Registrieren</span>
            </>
          ) : (
            <>
              Bereits registriert? <span className="highlight">Einloggen</span>
            </>
          )}
        </p>

        {message && <div className="message">{message}</div>}
      </div>
    </div>
  );
}

export default LoginPage;
