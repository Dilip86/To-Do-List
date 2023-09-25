// Use querySelector to select elements by ID
const inputBox = document.querySelector("#input-text");
const listContainer = document.querySelector(".list-items");

// Function to add a new task
function addTask() {
    const taskText = inputBox.value.trim(); // Remove leading/trailing whitespace

    if (taskText === '') {
        alert("You must write something!");
        return; // Prevent adding empty tasks
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const span = document.createElement("span");
    span.textContent = "\u00d7";

    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
}

// Event listener to mark a task as checked or delete it
listContainer.addEventListener("click", function (e) {
    const target = e.target;

    if (target.tagName === "LI") {
        target.classList.toggle('checked');
    } else if (target.tagName === "SPAN") {
        target.parentElement.remove();
    }

    saveData();
}, false);

// Function to save tasks to local storage
function saveData() {
    localStorage.setItem("tasks", listContainer.innerHTML);
}

// Function to load saved tasks from local storage
function loadTasks() {
    const savedTasks = localStorage.getItem("tasks");
    if (savedTasks) {
        listContainer.innerHTML = savedTasks;
    }
}

// Load tasks when the page loads
loadTasks();

