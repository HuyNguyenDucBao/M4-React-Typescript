type Todo = {
    text: string;
    completed: boolean;
};

let todos: Todo[] = [];

const addTodo = (): void => {
    const todoText: string = (document.getElementById('new-todo') as HTMLInputElement).value;
    if (todoText.trim() !== '') {
        todos.push({ text: todoText, completed: false });
        (document.getElementById('new-todo') as HTMLInputElement).value = '';
        renderTodos();
    }
}

const deleteTodo = (index: number): void => {
    todos.splice(index, 1);
    renderTodos();
}

const toggleComplete = (index: number): void => {
    todos[index].completed = !todos[index].completed;
    renderTodos();
}

const filterTodos = (status: string): void => {
    renderTodos(status);
}

const searchTodo = (): void => {
    renderTodos();
}

const renderTodos = (filter: string = 'all'): void => {
    const search: string = (document.getElementById('search-todo') as HTMLInputElement).value.toLowerCase();
    const filteredTodos: Todo[] = todos.filter(todo => {
        const matchesFilter: boolean = filter === 'all' || (filter === 'completed' && todo.completed) || (filter === 'active' && !todo.completed);
        const matchesSearch: boolean = !search || todo.text.toLowerCase().includes(search);
        return matchesFilter && matchesSearch;
    });

    const todoList: HTMLElement = document.getElementById('todo-list')!;
    todoList.innerHTML = '';
    filteredTodos.forEach((todo, index) => {
        const todoItem: HTMLElement = document.createElement('li');
        const todoText: HTMLElement = document.createElement('span');
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
}
