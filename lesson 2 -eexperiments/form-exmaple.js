const detailsArr = [
  {
    name: "firstname",
    type: "text",
    required: true,
  },
  {
    name: "lastname",
    type: "text",
    required: true,
    validation: function (val) {
      if (val.length >= 5) {
        return false;
      } else {
        return true;
      }
    },
  },
  { name: "age", type: "number", required: true },
  { name: "email", type: "email", required: false },
];

const formContainer = document.querySelector(".formContainer");
const submitButton = document.querySelector("button");
detailsArr.forEach(function (inp) {
  const inputEl = document.createElement("input");
  inputEl.placeholder = inp.name;
  inputEl.type = inp.type;
  inputEl.required = inp.required;

  formContainer.appendChild(inputEl);
});

submitButton.addEventListener("click", function () {
  const allInputs = document.querySelectorAll("input");
  console.log(allInputs);
  const validationForDetails = detailsArr.find(function (detail) {
    return !!detail.validation;
  });
  allInputs.forEach(function (inp) {
    if (inp.required) {
      if (!inp.value) {
        console.log(inp);
        alert(`${inp.placeholder} is required!!!!!`);
        return;
      }
    }
    if (validationForDetails.name === inp.placeholder) {
      console.log(validationForDetails.validation(inp.value));
      if (validationForDetails.validation(inp.value)) {
        console.log("fell on validation");
        alert("too short for lastname");
        return false;
      }
    }
  });
});
//firstname

//lastname

//age

//email
