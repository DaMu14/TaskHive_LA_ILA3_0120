import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import LoginPage from "./LoginPage";
import TodoPage from "./TodoPage";
import ShoppingListPage from "./ShoppingListPage";
import HomePage from "./HomePage";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Router>
      <Routes>
        <Route
          path="/login"
          element={<LoginPage setIsAuthenticated={setIsAuthenticated} />}
        />

<Route
          path="/home"
          element={
            isAuthenticated ? (
              <HomePage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/todo"
          element={
            isAuthenticated ? (
              <TodoPage setIsAuthenticated={setIsAuthenticated} />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route
          path="/shopping-lists"
          element={
            isAuthenticated ? (
              <ShoppingListPage />
            ) : (
              <Navigate to="/login" replace />
            )
          }
        />

        <Route path="*" element={<Navigate to="/login" replace />} />
      </Routes>
    </Router>
  );
}



export default App;
