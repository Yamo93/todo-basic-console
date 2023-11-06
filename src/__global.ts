export {};
declare global {
  interface Window {
    todo: {
      addTodo: (name: string, description: string) => void;
      removeTodo: (id: number) => void;
      updateName: (name: string) => void;
      updateDescription: (description: string) => void;
      listTodos: () => void;
      markAsCompleted: (completed: boolean) => void;
      moveTodo: (newIndex: number) => void;
      searchTodoByName: (name: string) => Todo | undefined;
      sortTodosByName: () => Todo[];
      sortTodosByCreationDate: () => Todo[];
      saveTodosToLocalStorage: () => void;
      readTodosFromLocalStorage: () => void;
    };
  }
}
