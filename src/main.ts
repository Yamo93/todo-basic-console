import { type Todo } from ".";

export const createTodoInstance = () => {
  const todos: Todo[] = [];

  let newId = 1;

  return {
    /**
     * Adds a todo with a unique id.
     * @param name Name of the todo
     * @param description Description of the todo
     */
    addTodo(name: string, description: string): void {
      const myTodo: Todo = {
        id: newId,
        name: name,
        description: description,
        completed: false,
        creationDate: new Date(),
      };
      todos.push(myTodo);
      console.log(`Todo added: ${name} ${description}`);
      newId++;
    },

    /**
     * Removes a todo. Should throw error if the id is missing.
     * @param id Id of todo to delete
     */
    removeTodo(id: number): void {
      if (!id) {
        throw new Error("Id is missing");
        const index = todos.findIndex((todo) => todo.id === id);
        if (index == -1) {
          throw new Error("todo with this id does not exist");
        }
        todos.splice(index, 1);
      }
    },

    /**
     * Updates the name of a todo. Should throw error if the id is missing.
     * Should throw error if name is missing.
     * @param id Id of todo.
     * @param name New name.
     */
    updateName(id: number, name: string): void {
      if (!id) throw new Error("id is missing");
      else if (!name) {
        throw new Error("name is missing");
        const index = todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          todos[index].name = name;
        }
      }
    },

    /**
     * Updates the description of a todo. Should throw error if the id is missing.
     * Should throw error if description is missing.
     * @param id Id of todo.
     * @param description New description.
     */
    updateDescription(id: number, description: string): void {
      if (!id) throw new Error("id is missing");
      else if (!description) {
        throw new Error("description is missing");
        const index = todos.findIndex((todo) => todo.id === id);
        if (index !== -1) {
          todos[index].description = description;
        }
      }
    },

    /**
     * Marks a todo as completed or not. Should throw error if the id is missing.
     * @param id Id of todo.
     * @param completed Todo is completed.
     */
    markAsCompleted(id: number, completed: boolean): void {
      if (!id) throw new Error("id is missing");
      const index = todos.findIndex((todo) => todo.id === id);
      if (index !== -1) {
        todos[index].completed = completed;
      }
    },

    /**
     * Moves a todo to a new index in the array. Should throw error if id is missing.
     * Should throw error if the new index is invalid. Shifts all the todos after it.
     * @param id Id of todo.
     * @param newIndex New index.
     */
    moveTodo(id: number, newIndex: number): void {
      if (!id) throw new Error("id is missing");
      else if (newIndex < 0 || newIndex >= todos.length) {
        throw new Error("newindex is invalid");
      }
      const index = todos.findIndex((todo) => todo.id === id);
      if (index === newIndex) {
        throw new Error("index is the same");
        const remove = todos.splice(index, 1)[0];
        todos.splice(newIndex, 0, remove);
      }
    },

    /**
     * Searches for a todo by name.
     * @param name Name of todo.
     * @returns All todos that match the name.
     */
    searchTodosByName(name: string): Todo[] {
      const result = todos.filter((todo) => todo.name.startsWith(name));
      return result;
    },

    /**
     * Sorts todos by name alphabetically in ascending order.
     */
    sortTodosByName(): Todo[] {
      return todos.slice().sort((a, b) => (a.name > b.name ? 1 : -1));
    },

    /**
     * Sorts todos by creation date (oldest first).
     */
    sortTodosByCreationDate(): Todo[] {
      return todos
        .slice()
        .sort((a, b) => a.creationDate.getTime() - b.creationDate.getTime());
    },

    /**
     * Saves todos to local storage.
     */
    saveTodosToLocalStorage(): void {
      localStorage.setItem("todos", JSON.stringify(todos));
    },

    /**
     * Reads todo from local storage if such exists.
     */
    readTodosFromLocalStorage(): void {
      const local = localStorage.getItem("todos");
      if (local) {
        JSON.parse(local);
      }
    },

    /**
     * Get a copy of todos for the purpose of testing.
     * @returns A copy of todos.
     */
    getTodos(): Todo[] {
      return todos.map((todo) => ({
        ...todo,
      }));
    },

    /**
     * Lists todos and prints them to console.
     */
    listTodos(): void {
      if (todos.length === 0) {
        console.log("List is empty.");
        return;
      }

      // loop through todos
      for (const todo of todos) {
        console.log(todo);
      }
    },
  };
};

console.log(`Welcome to the Todo console application.
Type "todo" in the Console to see the available functions.`);
const todo = createTodoInstance();
console.log(todo);
// expose todo object on Window
window.todo = todo;

todo.readTodosFromLocalStorage();
