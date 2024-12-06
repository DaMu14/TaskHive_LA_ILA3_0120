import React, { useState, useEffect } from "react";
import "./App.css";

function TodoPage({ setIsAuthenticated }) {
  const [tasks, setTasks] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");

  const API_URL = "http://localhost:5000/api/task"; // Backend-URL

  const loadTasks = async () => {
    try {
      const response = await fetch(API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Fehler beim Laden der Aufgaben:", error);
    }
  };

  const addTask = async () => {
    if (newTaskName.trim() === "" || newTaskDueDate.trim() === "") {
      alert("Bitte geben Sie einen Namen und ein Fälligkeitsdatum ein.");
      return;
    }

    try {
      const dueDate = newTaskDueDate;

      console.log("Gesendete Daten:", {
        id: null,
        name: newTaskName,
        dueDate,
        isCompleted: false,
      });

      const response = await fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          id: null,
          name: newTaskName,
          dueDate,
          isCompleted: false,
        }),
      });

      if (!response.ok) {
        const errorText = await response.text();
        console.error("Serverfehler:", errorText);
        throw new Error(
          `Fehler beim Erstellen der Aufgabe: ${response.status}`
        );
      }

      const createdTask = await response.json();
      setTasks([...tasks, createdTask]);
      setNewTaskName("");
      setNewTaskDueDate("");
    } catch (error) {
      console.error(error.message);
      alert("Fehler beim Erstellen der Aufgabe. Überprüfen Sie die Eingabe.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${API_URL}/${id}`, { method: "DELETE" });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Fehler beim Löschen der Aufgabe:", error);
    }
  };

  const toggleCompletion = async (task) => {
    try {
      const updatedTask = { ...task, isCompleted: !task.isCompleted };

      await fetch(`${API_URL}/${task.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedTask),
      });

      setTasks(
        tasks.map((t) =>
          t.id === task.id ? { ...t, isCompleted: !t.isCompleted } : t
        )
      );
    } catch (error) {
      console.error("Fehler beim Aktualisieren der Aufgabe:", error);
    }
  };

  // Beim Start Aufgaben laden
  useEffect(() => {
    loadTasks();
  }, []);

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <header className="header">
        <h1>Task Hive</h1>
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      </header>

      <div className="App">
        {/* Eingabefelder für neue Aufgabe */}
        <div className="task-input">
          <input
            type="text"
            placeholder="Aufgabenname eingeben..."
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <input
            type="date"
            value={newTaskDueDate}
            onChange={(e) => setNewTaskDueDate(e.target.value)}
          />
          <button onClick={addTask}>Hinzufügen</button>
        </div>

        {/* Aufgabenliste */}
        <div className="task-list">
          {tasks.length === 0 ? (
            <p>Keine Aufgaben verfügbar. Fügen Sie eine Aufgabe hinzu!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="task-item">
                <span
                  style={{
                    textDecoration: task.isCompleted ? "line-through" : "none",
                  }}
                >
                  {task.name} - Fällig am:{" "}
                  {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString("de-DE")
                    : "Kein Datum"}
                </span>
                <div className="task-buttons">
                  <button
                    className="complete-button"
                    onClick={() => toggleCompletion(task)}
                  >
                    {task.isCompleted ? "Unerledigt" : "Erledigt"}
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteTask(task.id)}
                  >
                    Löschen
                  </button>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
