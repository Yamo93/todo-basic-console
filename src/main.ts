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
      todos.push({ id: 1, name, description });
    },

    /**
     *
     * @param id Id of todo to delete
     */
    removeTodo(id: number): void {
      throw new Error("removeTodo is not implemented.");
    },

    updateName(name: string): void {
      throw new Error("updateName is not implemented.");
    },

    updateDescription(description: string): void {
      throw new Error("updateDescription is not implemented.");
    },

    markAsCompleted(completed: boolean): void {
      throw new Error("markAsCompleted is not implemented.");
    },

    moveTodo(newIndex: number): void {
      throw new Error("moveTodo is not implemented.");
    },

    searchTodoByName(name: string): Todo | undefined {
      throw new Error("searchTodoByName is not implemented.");
    },

    sortTodosByName(): Todo[] {
      throw new Error("sortTodosByName is not implemented.");
    },

    sortTodosByCreationDate(): Todo[] {
      throw new Error("sortTodosByCreationDate is not implemented.");
    },

    saveTodosToLocalStorage(): void {
      throw new Error("saveTodosToLocalStorage is not implemented.");
    },

    readTodosFromLocalStorage(): void {
      throw new Error("readTodosFromLocalStorage is not implemented.");
    },

    listTodos() {
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
window.todo = todo;
