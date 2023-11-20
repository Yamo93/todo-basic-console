export type Todo = {
  id: number;
  name: string;
  description: string;
  completed: boolean;
  creationDate: Date;
};

export type TodoInstance = {
  addTodo: (name: string, description: string) => void;
  removeTodo: (id: number) => void;
  updateName: (id: number, name: string) => void;
  updateDescription: (id: number, description: string) => void;
  markAsCompleted: (id: number, completed: boolean) => void;
  moveTodo: (id: number, newIndex: number) => void;
  searchTodosByName: (name: string) => Todo[];
  sortTodosByName: () => Todo[];
  sortTodosByCreationDate: () => Todo[];
  saveTodosToLocalStorage: () => void;
  readTodosFromLocalStorage: () => void;
  getTodos: () => Todo[];
  listTodos: () => void;
};

declare global {
  interface Window {
    todo: TodoInstance;
  }
}
