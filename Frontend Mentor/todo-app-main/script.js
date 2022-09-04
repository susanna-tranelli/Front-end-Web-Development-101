import {countItemsLeft, createNewTodo} from './countItemsLeft.js'

let numberOfEnter = 0

let defaultTheme = 'light'

let mainThemeStored

let clientListItems = []

if(localStorage.key("isTheLightTheme")){
    mainThemeStored = localStorage.getItem("isTheLightTheme");

    if(!(mainThemeStored === defaultTheme)) {
        defaultTheme = mainThemeStored;
        toggleTheme()
    }
}

function saveDataInLocalStorage() {
    let newTodoValue = document.getElementById('new-todo').value
    clientListItems.push(newTodoValue)
    localStorage.setItem('todoSaved', JSON.stringify(clientListItems))
}


if (localStorage.getItem("todoSaved") != null) {
    let storedItems = JSON.parse(localStorage.getItem('todoSaved'));
    clientListItems = storedItems
    for (let i = 0; i < storedItems.length; i++) {
        console.log(storedItems[i]);
        numberOfEnter++
        createNewTodo(numberOfEnter.toString(), storedItems[i])
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


export function completeTodo(e) {
    e.target.parentElement.classList.toggle('todo-item--checked')
    countItemsLeft()
}

export function deleteTodoItem(e) {
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



document.getElementById("switch-theme").addEventListener('click',(e) => toggleTheme())

document.getElementById('new-todo').addEventListener("keydown", function (e) {
    if (e.code === "Enter" && document.getElementById('new-todo').value !== '') {
        numberOfEnter++
        createNewTodo(numberOfEnter.toString(), document.getElementById('new-todo').value)
        saveDataInLocalStorage()
    }
})

