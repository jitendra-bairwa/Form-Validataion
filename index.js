let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");

let firstname, lastname, email, password;
let field;

for (let errorMessage of errorMessages) {
  errorMessage.classList.add("d-none");
}

for (let element of emptyFieldMessage) {
  element.classList.add('d-none');
}


// Regular Expression Regex;
let nameRegex = /^[a-z]+$/i;
let emailRegex = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
let pwdRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;

formData.addEventListener("keyup", (e) => {
  e.preventDefault();
  field = e.target.dataset.key;
  switch (field) {
    case "firstName":
      firstname = e.target.value;
      break;
    case "lastName":
      lastname = e.target.value;
      break;
    case "email":
      email = e.target.value;
      break;
    case "password":
      password = e.target.value;
      break;
    default:
      firstname = lastname = email = password = "";
      break;
  }
})

submitButton.addEventListener('click', (e) => {
  e.preventDefault();
  console.log(firstname, lastname, email, password);
  if (firstname) {
    if (!nameRegex.test(firstname)) {
      errorMessages[0].classList.remove('d-none');
    }
    else {
      errorMessages[0].classList.add("d-none");
    }
  }
  else {
    emptyFieldMessage[0].classList.remove("d-none");
  }

  if (lastname) {
    if (!nameRegex.test(lastname)) {
      errorMessages[1].classList.remove('d-none');
    }
    else {
      errorMessages[1].classList.add("d-none");
    }
  }
  else {
    emptyFieldMessage[1].classList.remove("d-none");
  }

  if (email) {
    if (!emailRegex.test(email)) {
      errorMessages[2].classList.remove('d-none');
    } else {
      errorMessages[2].classList.add("d-none");
    }
  }
  else {
    emptyFieldMessage[2].classList.remove("d-none");
  }

  if (password) {
    if (!pwdRegex.test(password)) {
      errorMessages[3].classList.remove('d-none');
    } else {
      errorMessages[3].classList.add("d-none");
    }
  }
  else {
    emptyFieldMessage[3].classList.remove("d-none");
  }
})

