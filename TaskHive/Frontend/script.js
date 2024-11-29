// Default data
let users = [];
let tasks = [];
let shoppingLists = [];

// Helper functions
function showPage(pageId) {
  document.querySelectorAll('.page').forEach((page) => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}

// Benutzerverwaltung
document.getElementById('userForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const userName = document.getElementById('userName').value;
  users.push(userName);
  updateUserList();
  updateTaskUserDropdown();
  document.getElementById('userName').value = '';
});

function updateUserList() {
  const userList = document.getElementById('userList');
  userList.innerHTML = '';
  users.forEach((user, index) => {
    const li = document.createElement('li');
    li.textContent = user;
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Löschen';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
      users.splice(index, 1);
      updateUserList();
      updateTaskUserDropdown();
    });
    li.appendChild(deleteBtn);
    userList.appendChild(li);
  });
}

function updateTaskUserDropdown() {
  const taskUser = document.getElementById('taskUser');
  taskUser.innerHTML = '<option value="">Benutzer zuweisen</option>';
  users.forEach((user) => {
    const option = document.createElement('option');
    option.value = user;
    option.textContent = user;
    taskUser.appendChild(option);
  });
}

// Aufgabenverwaltung
document.getElementById('taskForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const taskTitle = document.getElementById('taskTitle').value;
  const taskUser = document.getElementById('taskUser').value;
  tasks.push({ title: taskTitle, user: taskUser, completed: false });
  updateTaskList();
  document.getElementById('taskTitle').value = '';
});

function updateTaskList() {
  const taskList = document.getElementById('taskList');
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.textContent = `${task.title} (${task.user || 'Nicht zugewiesen'})`;
    const completeBtn = document.createElement('button');
    completeBtn.textContent = task.completed ? 'Erledigt' : 'Erledigen';
    completeBtn.addEventListener('click', () => {
      tasks[index].completed = !tasks[index].completed;
      updateTaskList();
    });
    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = 'Löschen';
    deleteBtn.classList.add('delete');
    deleteBtn.addEventListener('click', () => {
      tasks.splice(index, 1);
      updateTaskList();
    });
    li.appendChild(completeBtn);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
  });
}

// Einkaufslistenverwaltung
document.getElementById('shoppingForm').addEventListener('submit', (e) => {
  e.preventDefault();
  const shoppingTitle = document.getElementById('shoppingTitle').value;
  const shoppingDate = document.getElementById('shoppingDate').value;
  shoppingLists.push({ title: shoppingTitle, date: shoppingDate, items: [] });
  updateShoppingLists();
  document.getElementById('shoppingTitle').value = '';
  document.getElementById('shoppingDate').value = '';
});

function updateShoppingLists() {
  const container = document.getElementById('shoppingListsContainer');
  container.innerHTML = '';
  shoppingLists.forEach((list, index) => {
    const listDiv = document.createElement('div');
    listDiv.classList.add('shopping-list');

    const title = document.createElement('h3');
    title.textContent = `${list.title} (für ${list.date})`;

    const itemInput = document.createElement('input');
    itemInput.placeholder = 'Artikel hinzufügen';
    const addItemBtn = document.createElement('button');
    addItemBtn.textContent = 'Hinzufügen';
    addItemBtn.addEventListener('click', () => {
      if (itemInput.value.trim() !== '') {
        list.items.push(itemInput.value);
        itemInput.value = '';
        updateShoppingLists();
      }
    });

    const itemList = document.createElement('ul');
    list.items.forEach((item, itemIndex) => {
      const li = document.createElement('li');
      li.textContent = item;
      const deleteBtn = document.createElement('button');
      deleteBtn.textContent = 'Löschen';
      deleteBtn.classList.add('delete');
      deleteBtn.addEventListener('click', () => {
        list.items.splice(itemIndex, 1);
        updateShoppingLists();
      });
      li.appendChild(deleteBtn);
      itemList.appendChild(li);
    });

    const deleteListBtn = document.createElement('button');
    deleteListBtn.textContent = 'Liste löschen';
    deleteListBtn.classList.add('delete');
    deleteListBtn.addEventListener('click', () => {
      shoppingLists.splice(index, 1);
      updateShoppingLists();
    });

    listDiv.appendChild(title);
    listDiv.appendChild(itemInput);
    listDiv.appendChild(addItemBtn);
    listDiv.appendChild(itemList);
    listDiv.appendChild(deleteListBtn);

    container.appendChild(listDiv);
  });
}

// Initial load
showPage('users');
