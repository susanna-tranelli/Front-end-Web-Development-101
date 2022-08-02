function checkInput() {
    let x = document.getElementById("user-email").value;
    let validRegex =   /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (!(x.match(validRegex))) {
        document.getElementById("container__messageError").innerHTML = "Please provide a valid email";
        document.getElementById('user-email').classList.add('container__email-address--error');
        document.getElementById('icon-error').classList.add('icon-error-visible');
        document.getElementById('after-click').classList.add('after-click-visible');

    } else {
        document.getElementById("container__messageError").innerHTML = "";
        document.getElementById('user-email').classList.remove('container__email-address--error');
        document.getElementById('icon-error').classList.remove('icon-error-visible');
        document.getElementById('after-click').classList.remove('after-click-visible');
    }
}

