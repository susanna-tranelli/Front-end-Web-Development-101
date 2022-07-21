function getComputerChoice() {
    const firstChoice = 'rock'
    const secondChoice = 'scissor'
    const thirdChoice = 'paper'

    let randomChoice = Math.floor(Math.random() * 3)
    if (randomChoice === 0) {
        return firstChoice;
    } else if (randomChoice === 1) {
        return secondChoice;
    } else {
        return thirdChoice;
    }
}

function rockPaperScissor(a, b) {
    if (a == 'rock') {
        if (b == 'rock') {
            alert('Hai pareggiato')
        } else if (b == 'scissor') {
            alert('Hai Vinto')
        } else {
            alert('Hai Perso')
        }
    } else if (a == 'scissor') {
        if (b == 'rock') {
            alert('Hai Perso')
        } else if (b == 'scissor') {
            alert('Hai Pareggiato')
        } else {
            alert('Hai Vinto')
        }
    } else if (a == 'paper') {
        if (b == 'rock') {
            alert('Hai Vinto')
        } else if (b == 'scissor') {
            alert('Hai Perso')
        } else {
            alert('Hai Pareggiato')
        }
    }
}

let playerChoice = 'paper'

let computerChoice = getComputerChoice();

rockPaperScissor(playerChoice, computerChoice);