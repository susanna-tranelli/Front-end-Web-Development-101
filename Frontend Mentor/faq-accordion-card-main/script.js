const accordion = document.getElementsByClassName('accordion__option');
console.log(accordion)

let i;

for (i=0; i<accordion.length; i++) {
    accordion[i].addEventListener('click', function () {
        this.classList.toggle('active')
    })
}