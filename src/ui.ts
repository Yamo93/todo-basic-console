import { TodoInstance } from ".";

export function draw(todo: TodoInstance) {
    const app = document.getElementById("app");
    if (!app) throw new Error("App root missing");
    // TODO: build a ui here
    const header = document.createElement("h1");
    header.textContent = "Replace me and build UI with the todo instance";
    app.appendChild(header);
}