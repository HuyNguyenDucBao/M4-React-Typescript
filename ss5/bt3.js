"use strict";
let todos = [];
const addTodo = () => {
    const todoText = document.getElementById('new-todo').value;
    if (todoText.trim() !== '') {
        todos.push({ text: todoText, completed: false });
        document.getElementById('new-todo').value = '';
        renderTodos();
    }
};
const deleteTodo = (index) => {
    todos.splice(index, 1);
    renderTodos();
};
const toggleComplete = (index) => {
    todos[index].completed = !todos[index].completed;
    renderTodos();
};
const filterTodos = (status) => {
    renderTodos(status);
};
const searchTodo = () => {
    renderTodos();
};
const renderTodos = (filter = 'all') => {
    const search = document.getElementById('search-todo').value.toLowerCase();
    const filteredTodos = todos.filter(todo => {
        const matchesFilter = filter === 'all' || (filter === 'completed' && todo.completed) || (filter === 'active' && !todo.completed);
        const matchesSearch = !search || todo.text.toLowerCase().includes(search);
        return matchesFilter && matchesSearch;
    });
    const todoList = document.getElementById('todo-list');
    todoList.innerHTML = '';
    filteredTodos.forEach((todo, index) => {
        const todoItem = document.createElement('li');
        const todoText = document.createElement('span');
        todoText.textContent = todo.text;
        if (todo.completed) {
            todoText.classList.add('completed');
        }
        todoItem.appendChild(todoText);
        todoItem.innerHTML += `
    <button onclick="toggleComplete(${index})">Hoàn thành</button>
    <button onclick="deleteTodo(${index})">Xóa</button>
`;
        todoList.appendChild(todoItem);
    });
};
