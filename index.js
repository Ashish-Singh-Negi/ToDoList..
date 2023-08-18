const container = document.getElementById("container");
const form = document.querySelector("form");
const title = document.getElementById("title");
const description = document.getElementById("description");
const addBtn = document.querySelector("button");

const tasks = localStorage.getItem("tasks")?JSON.parse(localStorage.getItem("tasks")):[];

displayAllTasks()

function displayAllTasks() {
  tasks.forEach((value, index) => {
    const div = document.createElement("div");
    div.setAttribute("class", "tasks");

    const innerDiv = document.createElement("div");
    innerDiv.setAttribute("class", "innerTask");
    div.append(innerDiv);

    const p = document.createElement("p");
    p.innerText = value.title;
    innerDiv.append(p);

    const span = document.createElement("span");
    span.innerText = value.description;
    innerDiv.append(span);

    const btn = document.createElement("button");
    btn.innerText = "-";

    btn.addEventListener("click", () => {
      deleteTask();
      tasks.splice(index, 1);
      localStorage.setItem("tasks",JSON.stringify(tasks))
      displayAllTasks();
    });

    div.append(btn);

    container.append(div);
  });
}

function deleteTask() {
  tasks.forEach(() => {
    const div = document.querySelector(".tasks");
    div.remove();
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  deleteTask();
  tasks.push({ title: title.value, description: description.value });
  localStorage.setItem("tasks",JSON.stringify(tasks))
  displayAllTasks();
});

console.log(tasks);
