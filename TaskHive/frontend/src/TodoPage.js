import React, { useState, useEffect } from "react";
import "./App.css";

function TodoPage({ setIsAuthenticated }) {
  const [tasks, setTasks] = useState([]);
  const [users, setUsers] = useState([]);
  const [newTaskName, setNewTaskName] = useState("");
  const [newTaskDueDate, setNewTaskDueDate] = useState("");
  const [selectedUserId, setSelectedUserId] = useState("");

  const TASK_API_URL = "http://localhost:5000/api/task";
  const USER_API_URL = "http://localhost:5000/api/users";

  useEffect(() => {
    loadTasks();
    loadUsers();
  }, []);

  const loadTasks = async () => {
    try {
      const response = await fetch(TASK_API_URL);
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error("Fehler beim Laden der Aufgaben:", error);
    }
  };

  const loadUsers = async () => {
    try {
      const response = await fetch(USER_API_URL);
      const data = await response.json();
      setUsers(data);
    } catch (error) {
      console.error("Fehler beim Laden der Benutzer:", error);
    }
  };

  const addTask = async () => {
    if (
      newTaskName.trim() === "" ||
      newTaskDueDate.trim() === "" ||
      selectedUserId.trim() === ""
    ) {
      alert(
        "Bitte geben Sie einen Namen, ein Fälligkeitsdatum und einen Benutzer ein."
      );
      return;
    }

    try {
      const newTask = {
        id: null,
        name: newTaskName,
        dueDate: newTaskDueDate,
        isCompleted: false,
        userId: selectedUserId,
      };

      const response = await fetch(TASK_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newTask),
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
      setSelectedUserId("");
    } catch (error) {
      console.error(error.message);
      alert("Fehler beim Erstellen der Aufgabe. Überprüfen Sie die Eingabe.");
    }
  };

  const deleteTask = async (id) => {
    try {
      await fetch(`${TASK_API_URL}/${id}`, { method: "DELETE" });
      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {
      console.error("Fehler beim Löschen der Aufgabe:", error);
    }
  };

  const toggleCompletion = async (task) => {
    try {
      const updatedTask = { ...task, isCompleted: !task.isCompleted };

      await fetch(`${TASK_API_URL}/${task.id}`, {
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

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return renderTodoPage({
    tasks,
    users,
    newTaskName,
    setNewTaskName,
    newTaskDueDate,
    setNewTaskDueDate,
    selectedUserId,
    setSelectedUserId,
    addTask,
    deleteTask,
    toggleCompletion,
    handleLogout,
  });
}

function renderTodoPage({
  tasks,
  users,
  newTaskName,
  setNewTaskName,
  newTaskDueDate,
  setNewTaskDueDate,
  selectedUserId,
  setSelectedUserId,
  addTask,
  deleteTask,
  toggleCompletion,
  handleLogout,
}) {
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
            placeholder="Aufgabenname eingeben..."
            value={newTaskName}
            onChange={(e) => setNewTaskName(e.target.value)}
          />
          <input
            type="date"
            value={newTaskDueDate}
            onChange={(e) => setNewTaskDueDate(e.target.value)}
          />
          <select
            value={selectedUserId}
            onChange={(e) => setSelectedUserId(e.target.value)}
            className="user-select"
          >
            <option value="">Benutzer auswählen...</option>
            {users.map((user) => (
              <option key={user.id} value={user.id}>
                {user.username}
              </option>
            ))}
          </select>
          <button onClick={addTask}>Hinzufügen</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p>Keine Aufgaben verfügbar. Fügen Sie eine Aufgabe hinzu!</p>
          ) : (
            tasks.map((task) => (
              <div key={task.id} className="task-item">
                <span>
                  {task.name} - Fällig am:{" "}
                  {task.dueDate
                    ? new Date(task.dueDate).toLocaleDateString("de-DE")
                    : "Kein Datum"}
                </span>
                <div className="task-buttons">
                  <span className="task-user">
                    Zugewiesen an:{" "}
                    {users.find((u) => u.id === task.userId)?.username ||
                      "Unbekannt"}
                  </span>
                  <button
                    className={`complete-button ${
                      task.isCompleted ? "completed" : ""
                    }`}
                    onClick={() => toggleCompletion(task)}
                  >
                    {task.isCompleted ? "Erledigt" : "Als erledigt markieren"}
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
