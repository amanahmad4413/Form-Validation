const form = document.getElementById('form');
const password1El = document.getElementById('password1');
const password2El = document.getElementById('passsword2');
const messageContainer = document.querySelector('.message-container');
const message = document.getElementById('message');

let isValid = false;
let passswordsMatch = false;

function validateForm() {
  // Using Contarint API
  isValid = form.checkValidity();

  // Style main message for an Error
  if (!isValid) {
    message.textContent = 'Please fill out all fields.';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    return;
  }

  // Check to see if Passwords Match
  if (password1El.value === password2El.value) {
    passswordsMatch = true;
    password1El.style.borderColor = 'green';
    password2El.style.borderColor = 'green';
  } else {
    passswordsMatch = false;
    message.textContent = 'Make sure Passwords Match';
    message.style.color = 'red';
    messageContainer.style.borderColor = 'red';
    password1El.style.borderColor = 'red';
    password2El.style.borderColor = 'red';
    return;
  }

  // If form is valid and passwords match
  if (isValid && passswordsMatch) {
    message.textContent = 'Successfully Registered!';
    message.style.color = 'green';
    messageContainer.style.borderColor = 'green';
  }
}

function storeFormData() {
    const user = {
        name: form.name.value,
        phone: form.phone.value,
        email: form.email.value,
        website: form.website.value,
        password: form.password.value
    };
    console.log(user);
}

function processFormData(e) {
  e.preventDefault();

  // Validate Form
  validateForm();

//   Submit Data If Valid
    if (isValid && passswordsMatch) {
        storeFormData();
    }
}

// Event Listener
form.addEventListener('submit', processFormData);