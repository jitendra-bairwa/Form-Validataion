let formData = document.querySelector(".form");
let submitButton = document.querySelector(".button");
let firstname, lastname, email, password;
let field;

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

submitButton.addEventListener('click',(e)=>{
  e.preventDefault();
  console.log(firstname,lastname,email,password);
})

