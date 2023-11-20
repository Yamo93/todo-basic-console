import { createTodoInstance } from './todo';
import { draw } from './ui';

console.log(`Welcome to the Todo console application.
Type "todo" in the Console to see the available functions.`);
const todo = createTodoInstance();
console.log(todo);
// expose todo object on Window
window.todo = todo;

todo.readTodosFromLocalStorage();

// pass todo to ui
draw(todo);

