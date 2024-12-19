import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function ShoppingListPage({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [shoppingItems, setShoppingItems] = useState([]);
  const [newItemName, setNewItemName] = useState("");

  const SHOPPING_API_URL = "http://localhost:5000/api/ShoppingList";

  useEffect(() => {
    loadShoppingItems();
  }, []);

  const loadShoppingItems = async () => {
    try {
      const response = await fetch(SHOPPING_API_URL);
      const data = await response.json();
      setShoppingItems(data);
    } catch (error) {
      console.error("Fehler beim Laden der Einkaufsliste:", error);
    }
  };

  const addShoppingItem = async () => {
    if (newItemName.trim() === "") {
      alert("Bitte geben Sie einen Namen für das Element ein.");
      return;
    }

    try {
      const newItem = { name: newItemName, purchased: false };
      const response = await fetch(`${SHOPPING_API_URL}/{listId}/item`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newItem),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Hinzufügen des Elements.");
      }

      const createdItem = await response.json();
      setShoppingItems([...shoppingItems, createdItem]);
      setNewItemName("");
    } catch (error) {
      console.error(error);
      alert("Fehler beim Hinzufügen des Elements.");
    }
  };

  const deleteShoppingItem = async (id) => {
    try {
      await fetch(`${SHOPPING_API_URL}/${id}`, { method: "DELETE" });
      setShoppingItems(shoppingItems.filter((item) => item.id !== id));
    } catch (error) {
      console.error("Fehler beim Löschen des Elements:", error);
    }
  };

  const togglePurchased = async (item) => {
    try {
      const updatedItem = { ...item, purchased: !item.purchased };
      await fetch(`${SHOPPING_API_URL}/${item.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedItem),
      });

      setShoppingItems(
        shoppingItems.map((i) =>
          i.id === item.id ? { ...i, purchased: !i.purchased } : i
        )
      );
    } catch (error) {
      console.error("Fehler beim Aktualisieren des Elements:", error);
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("token");
  };

  return (
    <div>
      <header className="header">
        <h1>Einkaufsliste</h1>
        <div>
          <button onClick={handleLogout} className="logout-button">
            Logout
          </button>
          <button onClick={() => navigate("/home")} className="home-button">
            Zurück zur Startseite
          </button>
        </div>
      </header>

      <div className="App">
        <div className="shopping-input">
          <input
            type="text"
            placeholder="Element hinzufügen..."
            value={newItemName}
            onChange={(e) => setNewItemName(e.target.value)}
          />
          <button onClick={addShoppingItem}>Hinzufügen</button>
        </div>

        <div className="shopping-list">
          {shoppingItems.length === 0 ? (
            <p>Keine Elemente verfügbar. Fügen Sie ein Element hinzu!</p>
          ) : (
            shoppingItems.map((item) => (
              <div key={item.id} className="shopping-item">
                <span>
                  {item.name} -{" "}
                  {item.purchased ? "Gekauft" : "Nicht gekauft"}
                </span>
                <div className="shopping-buttons">
                  <button
                    className={`purchase-button ${
                      item.purchased ? "purchased" : ""
                    }`}
                    onClick={() => togglePurchased(item)}
                  >
                    {item.purchased ? "Nicht gekauft" : "Gekauft"}
                  </button>
                  <button
                    className="delete-button"
                    onClick={() => deleteShoppingItem(item.id)}
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

export default ShoppingListPage;
