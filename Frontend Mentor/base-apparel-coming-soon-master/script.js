function checkInput() {
    let x = document.getElementById("user-email").value;
    let validRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!(x.match(validRegex))) {
        document.getElementById("container__messageError").innerHTML = "Please provide a valid email";
        document.getElementById('user-email').classList.add('container__email-address--error');
        document.getElementById('icon-error').classList.add('container__icon-error--visible');
        document.getElementById('after-click').classList.add('container__button--visible');

    } else {
        document.getElementById("container__messageError").innerHTML = "";
        document.getElementById('user-email').classList.remove('container__email-address--error');
        document.getElementById('icon-error').classList.remove('container__icon-error--visible');
        document.getElementById('after-click').classList.remove('container__button--visible');
    }
}

