

function result() {
    let userChoice = document.querySelector('input[name="rating"]:checked').value;

    document.getElementById("container").remove()

    let card = document.getElementById('card')

    let container = document.createElement('div')
    container.classList.add('card__second-container')

    let image = document.createElement(`img`);
    image.classList.add('card__thank-you-img')
    image.setAttribute('src', 'images/illustration-thank-you.svg')

    let qwerty = document.createElement('div')
    qwerty.classList.add('def')
    qwerty.textContent = `You selected ${userChoice} out of 5`;

    let title = document.createElement('h1')
    title.classList.add('card__title')
    title.classList.add('card__title--no-margin')
    title.textContent = 'Thank you!'

    let description = document.createElement('p')
    description.classList.add('card__description')
    description.textContent = 'We appreciate you taking the time to give a rating. ' +
        'If you ever need more support, don’t hesitate to get in touch!'

    card.appendChild(container)
    container.appendChild(image)
    container.appendChild(qwerty)
    container.appendChild(title)
    container.appendChild(description)
}




// document.querySelector() <-- tag html
// document.getElementsByClassName() <-- class
// document.getElementById() <-- id


// .innerHTML <-- sostituisce il contenuto del tag
// .textContent <-- sostituisce solo il testo
// .appendChild <-- inserisce un elemento node

// document.createElement() <-- crea un elemento tag html
// .classList.add('classe') <-- aggiunge una classe ad un elemento