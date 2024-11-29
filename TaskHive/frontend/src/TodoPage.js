import React, { useState } from "react";
import "./App.css";

function TodoPage({ setIsAuthenticated }) {
  const [tasks, setTasks] = useState([
    { id: 1, text: "React lernen", completed: false },
    { id: 2, text: "Projekt strukturieren", completed: true },
  ]);
  const [newTask, setNewTask] = useState("");

  const addTask = () => {
    if (newTask.trim() !== "") {
      setTasks([
        ...tasks,
        { id: tasks.length + 1, text: newTask, completed: false },
      ]);
      setNewTask("");
    }
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

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
        <div className="task-input">
          <input
            type="text"
            placeholder="Neue Aufgabe hinzufügen..."
            value={newTask}
            onChange={(e) => setNewTask(e.target.value)}
          />
          <button onClick={addTask}>Hinzufügen</button>
        </div>
        <div className="task-list">
          {tasks.length === 0 ? (
            <p>Keine Aufgaben verfügbar. Fügen Sie eine Aufgabe hinzu!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="task-item">
                <span>{task.text}</span>
                <button onClick={() => deleteTask(task.id)}>Löschen</button>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}

export default TodoPage;
