import { expect, test } from "vitest";
import { todo } from "./main";

test("should add a todo", () => {
  // act
  todo.addTodo("A todo", "A description");
  const todos = todo.getTodos();
  expect(todos).toHaveLength(1);
  expect(todos[0].id).toBe(1);
  expect(todos[0].name).toBe("A todo");
  expect(todos[0].description).toBe("A description");
});
