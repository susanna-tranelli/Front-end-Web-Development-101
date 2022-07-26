// variabile elementi della lista
let toDoList =[];

// funzione per ottenere ciò che scrive l'utente
function getUserInput() {
    let userInput = document.getElementById('user-input').value
    return(userInput)
}

// funzione per stampare ciò che ha scritto l'utente o che si trova nella lista
function printUserInput(input) {
    let toDoList = document.getElementById('to-do-list')

    let listItem = document.createElement('div')
    listItem.classList.add('list__item')

    let listCheckbox = document.createElement('input')
    listCheckbox.classList.add('list__checkbox')
    listCheckbox.setAttribute('type', 'checkbox')

    let listText = document.createElement('div')
    listText.classList.add('list__text')
    listText.textContent = input

    let deleteListItem = document.createElement('div')
    deleteListItem.classList.add('list__close')
    deleteListItem.setAttribute('onclick', 'deleteListItem(this)')

    listItem.appendChild(listCheckbox)
    listItem.appendChild(listText)
    listItem.appendChild(deleteListItem)
    toDoList.appendChild(listItem)
}

// funzione per salvare ciò che ha scritto un utente nel localstorage
function saveUserInput(input) {
    toDoList.push(input)
    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}

// funzione per evitare la sovrascrittura del localstorage
if (localStorage.getItem('toDoList') != null) {
    toDoList = JSON.parse(localStorage.getItem('toDoList'))
    for (let i = 0; i < toDoList.length; i++) {
        printUserInput(toDoList[i])
    }
}

// evento che parte alla premuta del tasto invio sulla tastiera
document.getElementById('user-input').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        getUserInput()
        printUserInput(getUserInput())
        saveUserInput(getUserInput())
    }
});

//funzione che parte all'onclick di un quadratino rosso che serve ad eliminare un listItem
function deleteListItem(input) {
    let listItem = input.parentElement;
    listItem.remove()

    const index = toDoList.indexOf(input.previousSibling.textContent);

    if (index > -1) {
        toDoList.splice(index, 1);
    }

    localStorage.setItem("toDoList", JSON.stringify(toDoList));
}