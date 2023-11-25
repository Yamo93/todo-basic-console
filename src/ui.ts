import { TodoInstance } from '.';

export function draw(todo: TodoInstance) {
    const app = document.getElementById('app');
    if (!app) throw new Error('App root missing');
    // TODO: build a ui here
    const header = document.createElement('h1');
    header.textContent = 'Replace me and build UI with the todo instance';
    app.appendChild(header);

    const input = document.createElement('input');
    input.setAttribute('type', 'text');
    app.append(input);

    const button = document.createElement('button');
    button.setAttribute('type', 'button');
    button.textContent = 'Add todo';
    app.append(button);

    const list = document.createElement('ul');
    app.append(list);

    const inputSearch = document.createElement("input");
    inputSearch.setAttribute('type','text')
    inputSearch.setAttribute('placeholder', 'search for todoname');
    inputSearch.classList.add('search');   
    app.append(inputSearch)

    const searchButton = document.createElement('button')
    searchButton.setAttribute('type','button')
    searchButton.textContent ='search'
    app.append(searchButton)
    
    searchButton.addEventListener('click', () => {
        const searchTerm = inputSearch.value;
        const searchResults = todo.searchTodosByName(searchTerm);
        console.log(searchResults); 
        updateTodoList();
    });
    
    button.addEventListener('click', () => {
        const name = input.value;
        const description = '';
        todo.addTodo(name, description);
        input.value = '';
        updateTodoList();
    });

    function updateTodoList() {
        const todos = todo.getTodos();
        list.innerHTML = '';
        const sortedTodos = todo.sortTodosByName();

        sortedTodos.forEach((todoItem) => {
            const li = document.createElement('li');
            li.textContent = `${todoItem.name}: ${todoItem.description}`;

            if (todoItem.completed) {
                li.style.textDecoration = 'line-through';
            } else {
                li.style.textDecoration = 'none';
            }

            li.addEventListener('click', () => {
                todo.markAsCompleted(todoItem.id, !todoItem.completed);
                updateTodoList();
            });

            list.appendChild(li);

            const nameUpdateButton = document.createElement('button');
            nameUpdateButton.textContent = 'Update Name';
            nameUpdateButton.addEventListener('click', (event) => {
                const updateName = prompt('Update your todo', todoItem.name);
                event.stopPropagation();
                if (updateName !== null && updateName !== '') {
                    todo.updateName(todoItem.id, updateName);
                    updateTodoList();
                } else if (updateName === '') {
                    alert('You must enter a value');
                }
            });
            li.appendChild(nameUpdateButton);

            const descUpdateButton = document.createElement('button');
            descUpdateButton.textContent = 'Update Description';
            descUpdateButton.addEventListener('click', (event) => {
                event.stopPropagation();
                const newDescription = prompt('Enter new description', todoItem.description);
                if (newDescription !== null && newDescription !== todoItem.description) {
                    todo.updateDescription(todoItem.id, newDescription);
                    updateTodoList();
                }
            });
            li.appendChild(descUpdateButton);

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Delete';
            deleteButton.addEventListener('click', () => {
                todo.removeTodo(todoItem.id);
                updateTodoList();
            });
            li.appendChild(deleteButton);

            list.appendChild(li);

            const moveup = document.createElement('button');
            moveup.textContent = 'Move Up';
            moveup.addEventListener('click', (event) => {
                event.stopPropagation();

                const currentIndex = todos.findIndex((t) => t.id === todoItem.id);
                const newIndex = Math.max(currentIndex - 1, 0);
                todo.moveTodo(todoItem.id, newIndex);
                updateTodoList();
            });
            li.appendChild(moveup);

            const movedown = document.createElement('button');
            movedown.textContent = 'Move Down';
            movedown.addEventListener('click', (event) => {
                event.stopPropagation(); 

                const currentIndex = todos.findIndex((t) => t.id === todoItem.id);
                const newIndex = Math.min(currentIndex + 1, todos.length - 1);
                todo.moveTodo(todoItem.id, newIndex);
                updateTodoList();
            });
            li.appendChild(movedown);
        });
    }
}
