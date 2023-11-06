export {};
declare global {
  interface Window {
    todo: {
      addTodo: (name: string, description: string) => void;
      removeTodo: (id: number) => void;
      updateName: (id: number, name: string) => void;
      updateDescription: (id: number, description: string) => void;
      markAsCompleted: (id: number, completed: boolean) => void;
      moveTodo: (id: number, newIndex: number) => void;
      searchTodoByName: (name: string) => Todo | undefined;
      sortTodosByName: () => Todo[];
      sortTodosByCreationDate: () => Todo[];
      saveTodosToLocalStorage: () => void;
      readTodosFromLocalStorage: () => void;
      listTodos: () => void;
    };
  }
}
