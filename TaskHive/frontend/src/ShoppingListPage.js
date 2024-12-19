import React, { useEffect, useState } from "react";

function ShoppingListPage() {
  const [shoppingLists, setShoppingLists] = useState([]);
  const [newListTitle, setNewListTitle] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchShoppingLists();
  }, []);

  const fetchShoppingLists = async () => {
    setLoading(true);
    try {
      const response = await fetch("/api/ShoppingList");
      const data = await response.json();
      setShoppingLists(data);
    } catch (error) {
      console.error("Error fetching shopping lists:", error);
    } finally {
      setLoading(false);
    }
  };

  const addShoppingList = async () => {
    if (!newListTitle.trim()) return;

    try {
      const response = await fetch("/api/ShoppingList", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ title: newListTitle, items: [] }),
      });

      if (response.ok) {
        fetchShoppingLists();
        setNewListTitle("");
      } else {
        console.error("Failed to add shopping list");
      }
    } catch (error) {
      console.error("Error adding shopping list:", error);
    }
  };

  const deleteShoppingList = async (id) => {
    try {
      const response = await fetch(`/api/ShoppingList/${id}`, { method: "DELETE" });

      if (response.ok) {
        fetchShoppingLists();
      } else {
        console.error("Failed to delete shopping list");
      }
    } catch (error) {
      console.error("Error deleting shopping list:", error);
    }
  };

  return (
    <div>
      <h1>Shopping Lists</h1>
      <div>
        <input
          type="text"
          placeholder="New shopping list title"
          value={newListTitle}
          onChange={(e) => setNewListTitle(e.target.value)}
        />
        <button onClick={addShoppingList}>Add</button>
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <ul>
          {shoppingLists.map((list) => (
            <li key={list.id}>
              <h3>{list.title}</h3>
              <button onClick={() => deleteShoppingList(list.id)}>Delete</button>
              <ul>
                {list.items.map((item) => (
                  <li key={item.id}>
                    {item.name} - {item.quantity} {item.isBought ? "(Bought)" : ""}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ShoppingListPage;
