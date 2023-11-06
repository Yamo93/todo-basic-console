import { expect, test } from "vitest";
import { todo } from "./main";

test("should add a todo", () => {
  // act
  todo.addTodo("A todo", "A description");
  expect(todo.getTodos()).toHaveLength(1);
});
