import {completeTodo, deleteTodoItem} from './script.js'

export function countItemsLeft() {
    let numberOfTodoItem = document.querySelectorAll('.todo-item').length
    let numberOfCompletedItem = document.querySelectorAll('.todo-item--checked').length
    let numberOfItemsLeft = numberOfTodoItem - numberOfCompletedItem

    document.getElementById('number-of-items').textContent = numberOfItemsLeft.toString() + ' items left'
    console.log('sono un modulo')
}


export function createNewTodo(num, text) {
    let todoItem = document.createElement("div");
    let todoInput = document.createElement("input");
    let todoLabel = document.createElement("label");
    let crossIcon = document.createElement('img')

    todoItem.setAttribute('class', 'todo-item')
    todoInput.setAttribute('id', num)
    todoInput.setAttribute('type', 'checkbox')
    todoLabel.setAttribute('for', num)
    todoLabel.setAttribute('id', 'created-label')
    crossIcon.setAttribute('class', 'cross-icon')
    crossIcon.setAttribute('id', `cross-icon-${num}`)
    crossIcon.src = 'images/icon-cross.svg';

    todoItem.appendChild(todoInput);
    todoItem.appendChild(todoLabel);
    todoItem.appendChild(crossIcon);

    todoLabel.textContent = text;

    document.getElementById('todo-list').appendChild(todoItem);
    document.getElementById(num).addEventListener('click', (e) => completeTodo(e))
    document.getElementById('cross-icon')
    document.getElementById(`cross-icon-${num}`).addEventListener('click', (e) => deleteTodoItem(e))
    countItemsLeft()

}