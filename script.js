function validation() {
    const form = document.getElementById('form');
    const email = document.getElementById('email').value;
    const text = document.getElementById('text');
    const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    const button = document.getElementById('sub-email');

    if (email.match(mailFormat)) {
        form.classList.add("valid");
        form.classList.remove("invalid");
        text.innerHTML = "Your email is valid";
        text.style.color = '00ff00';

    } else {
        form.classList.remove('valid');
        form.classList.add('invalid');
        text.innerHTML = "Please enter a valid email";
        text.style.color = '#ff0000'
    };
}