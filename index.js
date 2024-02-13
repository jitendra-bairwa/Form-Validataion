let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let errorMessages = document.querySelectorAll(".error-message");
let emptyFieldMessage = document.querySelectorAll(".empty-field");
let showPasswordBtn = document.querySelector(".btn");

let firstname, lastname, email, password;
let field;
let fnTarget, lnTarget, eTarget, pTarget;

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
      fnTarget = e.target;
      break;
    case "lastName":
      lastname = e.target.value;
      lnTarget = e.target;
      break;
    case "email":
      email = e.target.value;
      eTarget = e.target;
      break;
    case "password":
      password = e.target.value;
      pTarget = e.target;
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
    emptyFieldMessage[0].classList.add("d-none");
    if (!nameRegex.test(firstname)) {
      fnTarget.classList.add("error");
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
    emptyFieldMessage[1].classList.add("d-none");
    if (!nameRegex.test(lastname)) {
      lnTarget.classList.add("error");
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
    emptyFieldMessage[2].classList.add("d-none");
    if (!emailRegex.test(email)) {
      eTarget.classList.add("error");
      errorMessages[2].classList.remove('d-none');
    } else {
      errorMessages[2].classList.add("d-none");
    }
  }
  else {
    emptyFieldMessage[2].classList.remove("d-none");
  }

  if (password) {
    emptyFieldMessage[3].classList.add("d-none");
    if (!pwdRegex.test(password)) {
      pTarget.classList.add("error");
      errorMessages[3].classList.remove('d-none');
    } else {
      errorMessages[3].classList.add("d-none");
    }
  }
  else {
    emptyFieldMessage[3].classList.remove("d-none");
  }
})

showPasswordBtn.addEventListener('click',(e)=>{
  e.preventDefault();
  // console.log(e.target);
  if(pTarget.getAttribute('type')==='text'){
    pTarget.setAttribute('type','password');
  }else{
    pTarget.setAttribute('type','text');
  }

})

