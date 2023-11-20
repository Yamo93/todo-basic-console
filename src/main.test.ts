import { expect, test } from "vitest";
import { createTodoInstance } from "./main.ts";

test("should add a todo", () => {
  const todo = createTodoInstance();
  todo.addTodo("A todo", "A description");
  const todos = todo.getTodos();
  expect(todos).toHaveLength(1);
  expect(todos[0].id).toBe(1);
  expect(todos[0].name).toBe("A todo");
  expect(todos[0].description).toBe("A description");
});

test("should remove a todo", () => {
  const todo = createTodoInstance();
  todo.addTodo("A todo", "A description");
  expect(todo.getTodos()).toHaveLength(1);
  expect(todo.getTodos()[0].id).toBe(1);
  todo.removeTodo(1);
  expect(todo.getTodos()).toHaveLength(0);
});

test("should throw error when removing todo with invalid id", () => {
  const todo = createTodoInstance();
  todo.addTodo("A todo", "A description");
  expect(todo.getTodos()).toHaveLength(1);
  expect(todo.getTodos()[0].id).toBe(1);
  expect(() => todo.removeTodo(999)).toThrowError();
  expect(todo.getTodos()).toHaveLength(1);
});

test("should update name of todo", () => {
  const todo = createTodoInstance();
  todo.addTodo("A todo", "A description");
  expect(todo.getTodos()).toHaveLength(1);
  expect(todo.getTodos()[0].id).toBe(1);
  todo.updateName(1, "new name");
  expect(todo.getTodos()[0].name).toBe("new name");
});

test("should update description of todo", () => {
  const todo = createTodoInstance();
  todo.addTodo("A todo", "A description");
  expect(todo.getTodos()).toHaveLength(1);
  expect(todo.getTodos()[0].id).toBe(1);
  todo.updateDescription(1, "new description");
  expect(todo.getTodos()[0].description).toBe("new description");
});

test("should mark todo as completed", () => {
  const todo = createTodoInstance();
  todo.addTodo("A todo", "A description");
  expect(todo.getTodos()).toHaveLength(1);
  expect(todo.getTodos()[0].id).toBe(1);
  todo.markAsCompleted(1, true);
  expect(todo.getTodos()[0].completed).toBe(true);
});

test("should move todo down", () => {
  const todo = createTodoInstance();
  todo.addTodo("Todo 1", "A description");
  todo.addTodo("Todo 2", "A description");
  expect(todo.getTodos()).toHaveLength(2);
  todo.moveTodo(1, 1);
  expect(todo.getTodos()[0].id).toBe(2);
  expect(todo.getTodos()[1].id).toBe(1);
});

test("should move todo up", () => {
  const todo = createTodoInstance();
  todo.addTodo("Todo 1", "A description");
  todo.addTodo("Todo 2", "A description");
  expect(todo.getTodos()).toHaveLength(2);
  todo.moveTodo(2, 0);
  expect(todo.getTodos()[0].id).toBe(2);
  expect(todo.getTodos()[1].id).toBe(1);
});

test("should search todos by name in beginning of string", () => {
  const todo = createTodoInstance();
  todo.addTodo("banana", "A description");
  todo.addTodo("ana", "A description");
  todo.addTodo("anab", "A description");
  const result = todo.searchTodosByName("BAN");
  expect(result).toHaveLength(1);
  expect(result[0].name).toBe("banana");
});

test("should search todos by name in middle of string", () => {
  const todo = createTodoInstance();
  todo.addTodo("hello", "A description");
  todo.addTodo("hello there world", "A description");
  todo.addTodo("hello world", "A description");
  const result = todo.searchTodosByName("THERE");
  expect(result).toHaveLength(1);
  expect(result[0].name).toBe("hello there world");
});

test("should search todos by name in end of string", () => {
  const todo = createTodoInstance();
  todo.addTodo("hello", "A description");
  todo.addTodo("hello there world", "A description");
  todo.addTodo("hello world", "A description");
  const result = todo.searchTodosByName("WORLD");
  expect(result).toHaveLength(2);
  expect(result[0].name).toBe("hello there world");
  expect(result[1].name).toBe("hello world");
});

test("should sort todos alphabetically in ascending order", () => {
  const todo = createTodoInstance();
  todo.addTodo("c", "A description");
  todo.addTodo("b", "A description");
  todo.addTodo("a", "A description");
  const result = todo.sortTodosByName();
  expect(result[0].name).toBe("a");
  expect(result[1].name).toBe("b");
  expect(result[2].name).toBe("c");
});

test("should load todos if local storage has data", () => {
  localStorage.setItem("todos", JSON.stringify([
    { id: 1, name: "hello world", description: "hej", completed: false, creationDate: new Date() },
    { id: 2, name: "hello world", description: "hej", completed: false, creationDate: new Date() },
  ]));

  const todo = createTodoInstance();
  todo.readTodosFromLocalStorage();
  expect(todo.getTodos()).toHaveLength(2);
  expect(todo.getTodos()[0].id).toBe(1);
  expect(todo.getTodos()[1].id).toBe(2);

  localStorage.removeItem("todos");
});