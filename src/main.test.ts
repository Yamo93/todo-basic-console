import { expect, test } from "vitest";
import { createTodoInstance } from "./main.js";

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
