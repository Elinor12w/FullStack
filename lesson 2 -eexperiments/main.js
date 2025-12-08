const shalomButton = document.querySelector(".shalomBtn");
const byeButton = document.querySelector(".byeBtn");
const masterBtn = document.querySelector(".master");
const inputDiv = document.querySelector(".inputdiv");
let flag = false;
const inp = document.createElement("input");
inp.placeholder = "אנא הכניסי את שמך";

inp.style.minWidth = "5rem";
inp.style.minHeight = "1rem";
inp.style.background = "lightBlue";

const colors = ["gold", "pink", "red", "white", "black", "green"];

const WorkOnButtons = () => {
  allButtons.forEach(function (button) {
    button.style.background = colors[Math.ceil(Math.random() * colors.length)];
    button.style.padding = "3rem";
  });
};

masterBtn.addEventListener("click", WorkOnButtons);
console.log(masterBtn);

// shalomButton.addEventListener("click", function () {
//   if (!flag) {
//     shalomButton.innerText = "נלחצתי";
//     flag = true;
//   } else {
//     shalomButton.innerText = "נלחצתי שוב :)";
//     flag = false;
//   }
// });

byeButton.addEventListener("", function (e) {
  console.log(e);
  inputDiv.innerHTML = "";
});

const allButtons = document.querySelectorAll("button");

console.log(allButtons);

inputDiv.appendChild(inp);

const numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numArr.forEach(function (num) {
  const btn = document.createElement("button");
  btn.innerText = num;
  btn.style.padding = "1rem";
  btn.style.border = "none";

  inputDiv.appendChild(btn);
});

inputDiv.style.display = "flex";
inputDiv.style.gap = "1rem";
