let numberOfEnter = 0

function toggleTheme() {
    let main = document.getElementById('main');

    if (main.classList.contains('main--light')) {
        main.classList.remove('main--light')
        main.classList.add('main--dark')
        document.getElementById("switch-theme").src="images/icon-sun.svg";
        document.getElementById("switch-theme").alt="icon-sun";

    } else if (main.classList.contains('main--dark')) {
        main.classList.remove('main--dark')
        main.classList.add('main--light')
        document.getElementById("switch-theme").src="images/icon-moon.svg";
        document.getElementById("switch-theme").alt="icon-moon";
    }
}

function createNewTodo(num) {
    let userInput = document.getElementById('new-todo').value;

    let todoItem = document.createElement("div");
    let todoInput = document.createElement("input");
    let todoLabel = document.createElement("label");

    todoItem.setAttribute('class', 'todo-item')
    todoInput.setAttribute('id', num)
    todoInput.setAttribute('type', 'checkbox')
    todoLabel.setAttribute('for', num)

    todoItem.appendChild(todoInput);
    todoItem.appendChild(todoLabel);

    todoLabel.textContent = userInput;

    document.getElementById('todo-list').appendChild(todoItem);
    document.getElementById(num).addEventListener('click', (e) => completeTodo(e))
}

function completeTodo(e) {
    e.target.parentElement.classList.toggle('todo-item--checked')
}


document.getElementById("switch-theme").addEventListener('click',(e) => toggleTheme())

document.getElementById('new-todo').addEventListener("keydown", function (e) {
    if (e.code === "Enter" && document.getElementById('new-todo').value !== '') {
        numberOfEnter++
        createNewTodo(numberOfEnter.toString())
    }
})