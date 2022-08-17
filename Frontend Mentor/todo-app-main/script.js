let numberOfEnter = 0

let defaultTheme = 'light'

let mainThemeStored

if(localStorage.key("isTheLightTheme")){
    mainThemeStored = localStorage.getItem("isTheLightTheme");

    if(!(mainThemeStored === defaultTheme)) {
        // defaultTheme = mainThemeStored;
        toggleTheme()
    }
}

function toggleTheme() {
    let main = document.getElementById('main');

    if (main.classList.contains('main--light')) {
        main.classList.remove('main--light')
        main.classList.add('main--dark')
        document.getElementById("switch-theme").src="images/icon-sun.svg";
        document.getElementById("switch-theme").alt="icon-sun";
        defaultTheme = 'dark'

    } else if (main.classList.contains('main--dark')) {
        main.classList.remove('main--dark')
        main.classList.add('main--light')
        document.getElementById("switch-theme").src="images/icon-moon.svg";
        document.getElementById("switch-theme").alt="icon-moon";
        defaultTheme = 'light'
    }

    localStorage.setItem('isTheLightTheme', defaultTheme);
}

function createNewTodo(num) {
    let userInput = document.getElementById('new-todo').value;

    let todoItem = document.createElement("div");
    let todoInput = document.createElement("input");
    let todoLabel = document.createElement("label");
    let crossIcon = document.createElement('img')

    todoItem.setAttribute('class', 'todo-item')
    todoInput.setAttribute('id', num)
    todoInput.setAttribute('type', 'checkbox')
    todoLabel.setAttribute('for', num)
    crossIcon.setAttribute('class', 'cross-icon')
    crossIcon.setAttribute('id', `cross-icon-${num}`)
    crossIcon.src = 'images/icon-cross.svg';

    todoItem.appendChild(todoInput);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(crossIcon);

    todoLabel.textContent = userInput;

    document.getElementById('todo-list').appendChild(todoItem);
    document.getElementById(num).addEventListener('click', (e) => completeTodo(e))
    document.getElementById('cross-icon')
    document.getElementById(`cross-icon-${num}`).addEventListener('click', (e) => deleteTodoItem(e))
    countItemsLeft()
}

function completeTodo(e) {
    e.target.parentElement.classList.toggle('todo-item--checked')
    countItemsLeft()
}

function deleteTodoItem(e) {
    e.target.parentElement.remove()
    countItemsLeft()
}

function showAll() {
    document.querySelectorAll('.todo-item--hidden').forEach(item => {
        item.classList.remove('todo-item--hidden')
    })
}

function showActive() {
    document.querySelectorAll('.todo-item--checked').forEach(item => {
        item.classList.add('todo-item--hidden');
    });

    document.querySelectorAll('.todo-item').forEach(item => {
        if(item.classList.contains('todo-item--hidden') && item.classList.contains('todo-item--checked') === false) {
            item.classList.remove('todo-item--hidden')
        }
    })
}

function showCompleted() {
    document.querySelectorAll('.todo-item').forEach(item => {
        if(item.classList.contains('todo-item--checked') === false) {
            item.classList.add('todo-item--hidden');
        }
    });

    document.querySelectorAll('.todo-item--checked').forEach(item => {
        if(item.classList.contains('todo-item--hidden')) {
            item.classList.remove('todo-item--hidden')
        }
    })
}

function clearChecked() {
    document.querySelectorAll('.todo-item--checked').forEach(item => {
        item.remove()
    })
    countItemsLeft()
}

function countItemsLeft() {
    let numberOfTodoItem = document.querySelectorAll('.todo-item').length
    let numberOfCompletedItem = document.querySelectorAll('.todo-item--checked').length
    let numberOfItemsLeft = numberOfTodoItem - numberOfCompletedItem

    document.getElementById('number-of-items').textContent = numberOfItemsLeft.toString() + ' items left'
}

document.getElementById("switch-theme").addEventListener('click',(e) => toggleTheme())

document.getElementById('new-todo').addEventListener("keydown", function (e) {
    if (e.code === "Enter" && document.getElementById('new-todo').value !== '') {
        numberOfEnter++
        createNewTodo(numberOfEnter.toString())
    }
})

