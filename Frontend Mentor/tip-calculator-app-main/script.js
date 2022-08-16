function reset() {
    document.getElementById("input-bill").value = "";
    document.getElementById("number-of-people").value = "";
    document.getElementById("total").value = "";
    document.getElementById("amount-tip").value = "";
}

let bill
let people
let tip

function costPerPerson(){

    bill = parseFloat(document.getElementById('input-bill').value);
    people = parseFloat(document.getElementById('number-of-people').value);

    let billPerPerson = (bill + (bill * tip)) / people;
    let tipPerPerson = (bill * tip) / people;

    if(isNaN(tip)) {
        billPerPerson = bill / people;
    } else {
       billPerPerson = (bill + (bill * tip)) / people;
    }

    if(!isNaN(billPerPerson)) {
        document.getElementById('total').textContent = billPerPerson;
    }

    if(!isNaN(tipPerPerson)) {
        document.getElementById('amount-tip').textContent = tipPerPerson;
    }
}

document.getElementById('input-bill').addEventListener('change', costPerPerson)
document.getElementById('number-of-people').addEventListener("change", costPerPerson)


const allTipButtons = document.getElementsByClassName('card__percentage');

for (i=0; i<allTipButtons.length; i++) {
    allTipButtons[i].addEventListener('click', function () {
        tip = parseFloat(this.value);
        costPerPerson()
    })
}

//
// function tipAmount(total) {
//     let tip = document.getElementById("card-percentage").value;
//     let amountTip = total / 100 * tip;
//     document.getElementById('amount-tip').textContent = amountTip;
//
// }
//
// document.getElementById('card-percentage').addEventListener("change", tipAmount)
//
