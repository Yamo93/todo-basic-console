import { TodoInstance } from ".";

export function draw(todo: TodoInstance) {
    const app = document.getElementById("app");
    if (!app) throw new Error("App root missing");
    const header = document.createElement("h1");
    header.textContent = "Build ui";
    app.appendChild(header);
}