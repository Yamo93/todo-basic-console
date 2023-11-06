type Todo = {
  id: number;
  name: string;
  description: string;
};

const todo = (() => {
  const todos: Todo[] = [];

  return {
    /**
     * Adds a todo with a unique id.
     * @param name Name of the todo
     * @param description Description of the todo
     */
    addTodo(name: string, description: string): void {
      throw new Error("addTodo is not implemented.");
    },

    /**
     * Removes a todo. Should throw error if the id is missing.
     * @param id Id of todo to delete
     */
    removeTodo(id: number): void {
      throw new Error("removeTodo is not implemented.");
    },

    /**
     * Updates the name of a todo. Should throw error if the id is missing.
     * Should throw error if name is missing.
     * @param id Id of todo.
     * @param name New name.
     */
    updateName(id: number, name: string): void {
      throw new Error("updateName is not implemented.");
    },

    /**
     * Updates the description of a todo. Should throw error if the id is missing.
     * Should throw error if description is missing.
     * @param id Id of todo.
     * @param description New description.
     */
    updateDescription(id: number, description: string): void {
      throw new Error("updateDescription is not implemented.");
    },

    /**
     * Marks a todo as completed or not. Should throw error if the id is missing.
     * @param id Id of todo.
     * @param completed Todo is completed.
     */
    markAsCompleted(id: number, completed: boolean): void {
      throw new Error("markAsCompleted is not implemented.");
    },

    /**
     * Moves a todo to a new index in the array. Should throw error if id is missing.
     * Should throw error if the new index is invalid. Shifts all the todos after it.
     * @param id Id of todo.
     * @param newIndex New index.
     */
    moveTodo(id: number, newIndex: number): void {
      throw new Error("moveTodo is not implemented.");
    },

    /**
     * Searches for a todo by name.
     * @param name Name of todo.
     * @returns All todos that match the name.
     */
    searchTodosByName(name: string): Todo[] {
      throw new Error("searchTodoByName is not implemented.");
    },

    /**
     * Sorts todos by name alphabetically in ascending order.
     */
    sortTodosByName(): Todo[] {
      throw new Error("sortTodosByName is not implemented.");
    },

    /**
     * Sorts todos by creation date (oldest first).
     */
    sortTodosByCreationDate(): Todo[] {
      throw new Error("sortTodosByCreationDate is not implemented.");
    },

    /**
     * Saves todos to local storage.
     */
    saveTodosToLocalStorage(): void {
      throw new Error("saveTodosToLocalStorage is not implemented.");
    },

    /**
     * Reads todo from local storage if such exists.
     */
    readTodosFromLocalStorage(): void {
      throw new Error("readTodosFromLocalStorage is not implemented.");
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
})();

console.log(`Welcome to the Todo console application.
Type "todo" in the Console to see the available functions.`);
console.log(todo);
// expose todo object on Window
window.todo = todo;
