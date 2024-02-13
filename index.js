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
      console.log("Invalid name");
    } else {
      console.log("Good to go");
    }
  }else {
    console.log("Please fill the first field");
  }
})

