import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./App.css";

function ShoppingListPage({ setIsAuthenticated }) {
  const navigate = useNavigate();
  const [shoppingLists, setShoppingLists] = useState([]); // Alle Listen
  const [selectedListId, setSelectedListId] = useState(null); // Aktuell ausgewählte Liste
  const [selectedListName, setSelectedListName] = useState(""); // Name der ausgewählten Liste
  const [shoppingItems, setShoppingItems] = useState([]); // Elemente der ausgewählten Liste
  const [newListName, setNewListName] = useState(""); // Name der neuen Liste
  const [newItemName, setNewItemName] = useState(""); // Name des neuen Elements

  const SHOPPING_API_URL = "http://localhost:5000/api/ShoppingList";

  useEffect(() => {
    loadShoppingLists();
  }, []);

  // Laden aller Listen
  const loadShoppingLists = async () => {
    try {
      const response = await fetch(SHOPPING_API_URL); // GET /api/ShoppingList
      const data = await response.json();
      setShoppingLists(data);
    } catch (error) {
      console.error("Fehler beim Laden der Einkaufslisten:", error);
    }
  };

  // Laden der Elemente einer Liste
  const loadShoppingItems = async (listId, listName) => {
    try {
      const response = await fetch(`${SHOPPING_API_URL}/${listId}/items`); // GET /api/ShoppingList/{listId}/items
      const data = await response.json();
      setShoppingItems(data);
      setSelectedListId(listId); // Setze die ausgewählte Liste
      setSelectedListName(listName);
    } catch (error) {
      console.error("Fehler beim Laden der Elemente:", error);
    }
  };

  // Neue Liste erstellen
  const addShoppingList = async () => {
    if (newListName.trim() === "") {
      alert("Bitte geben Sie einen Namen für die Liste ein.");
      return;
    }

    try {
      const newList = {
        id: newListName.toLowerCase().replace(/\s+/g, "-"), // Beispiel für ID-Generierung
        title: newListName,
        items: [],
        createdAt: new Date().toISOString(),
      };
      const response = await fetch(SHOPPING_API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newList),
      });

      if (!response.ok) {
        throw new Error("Fehler beim Erstellen der Liste.");
      }

      const createdList = await response.json();
      setShoppingLists([...shoppingLists, createdList]); // Neue Liste hinzufügen
      setNewListName("");
    } catch (error) {
      console.error("Fehler beim Erstellen der Liste:", error);
      alert("Fehler beim Erstellen der Liste.");
    }
  };

  // Neues Element zur ausgewählten Liste hinzufügen
  const addShoppingItem = async () => {
    if (newItemName.trim() === "") {
      alert("Bitte geben Sie einen Namen für das Element ein.");
      return;
    }

    const newItem = {
      name: newItemName,
      quantity: 1, // Default-Wert für die Menge
      isBought: false, // Default-Wert für den Kaufstatus
    };

    try {
      const response = await fetch(`${SHOPPING_API_URL}/${selectedListId}/item`, {
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
    console.error("Fehler beim Hinzufügen des Elements:", error);
    alert("Fehler beim Hinzufügen des Elements.");
  }
  };

  const synchronizeLists = () => {
    // Finde die maximale Anzahl von Elementen in einer Liste
    const maxItemsLength = Math.max(...shoppingLists.map(list => list.items.length), 0);

    const updatedLists = shoppingLists.map(list => {
      const missingItems = maxItemsLength - list.items.length;
      // Falls eine Liste weniger Items hat, fügen wir leere Items hinzu
      if (missingItems > 0) {
        const emptyItems = Array(missingItems).fill({ name: '', purchased: false });
        list.items = [...list.items, ...emptyItems];
      }
      return list;
    });

    setShoppingLists(updatedLists); // Alle Listen aktualisieren
  };

  // Zurück zur Listenübersicht
  const backToLists = () => {
    setSelectedListId(null); // Auswahl der Liste zurücksetzen
    setShoppingItems([]); // Elemente zurücksetzen
    setSelectedListName(""); // Zurücksetzen des Listennamens
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
        {/* Ansicht: Listenübersicht */}
        {!selectedListId && (
          <div>
            <div className="new-list-input">
              <input
                type="text"
                placeholder="Neue Liste erstellen..."
                value={newListName}
                onChange={(e) => setNewListName(e.target.value)}
              />
              <button onClick={addShoppingList}>Liste erstellen</button>
            </div>

            <div className="shopping-lists">
              <h2>Listen</h2>
              {shoppingLists.map((list) => (
                <button
                  key={list.id}
                  className="list-button"
                  onClick={() => loadShoppingItems(list.id, list.title)} // List Name hier verwenden
                >
                  {list.title}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Ansicht: Elemente der ausgewählten Liste */}
        {selectedListId && (
          <div>
            <button className="back-button" onClick={backToLists}>
              Zurück zu den Listen
            </button>

            <h2>{selectedListName}</h2>

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
                shoppingItems.map((item, index) => (
                  <div key={index} className="shopping-item">
                    <span>
                      {item.name} -{" "}
                      {item.purchased ? "Gekauft" : "Nicht gekauft"}
                    </span>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default ShoppingListPage;
