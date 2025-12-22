const load_button = document.querySelector(".load_user");
const user_container = document.querySelector(".user_card_container");

load_button.addEventListener("click", async function () {
  const response = await fetch("https://randomuser.me/api/");
  const data = await response.json();
  const user = data.results[0];
  console.log(Object.keys(user)); //checking what i have in user info

      user_container.innerHTML = "";

      const name = document.createElement("h2");
      name.innerHTML = `${user.name.first} ${user.name.last}`;

      const gender = document.createElement("p");
      gender.innerHTML = `Gender :${user.gender}`;
      const email = document.createElement("p");
      email.innerHTML = `Email: ${user.email}`;
      const cuntry = document.createElement("p");
      cuntry.innerHTML = `Country: ${user.location.country}`;

      user_container.appendChild(name);
      user_container.appendChild(gender);
      user_container.appendChild(email);
      user_container.appendChild(cuntry);
    });


//1

const load_todos_button = document.querySelector(".load_todos");
const todo_list = document.querySelector(".todo_list");

load_todos_button.addEventListener("click", async function () {
  const response = await fetch("https://jsonplaceholder.typicode.com/todos");
  const todos = await response.json();

  todo_list.innerHTML = "";

  todos.forEach((element) => {
    const li = document.createElement("li");

    li.innerHTML = element.title;

    if (element.completed === true) {
      li.style.textDecoration = "line-through";
    }

    todo_list.appendChild(li);
  });
});

//3
const Load_button = document.querySelector(".load_users");
const users_container = document.querySelector(".users_container");
const popup = document.querySelector(".popup");
const popup_details = document.querySelector(".popup_details");
const close_btn = document.querySelector(".close_btn");

Load_button.addEventListener("click",  async function () {
  const response = await fetch("https://randomuser.me/api/?results=5");
    const data = await response.json();
  
      users_container.innerHTML = "";

      data.results.forEach((user) => {
        const card = document.createElement("div");

        const name = document.createElement("p");
        name.innerHTML = `${user.name.first} ${user.name.last}`;

        const email = document.createElement("p");
        email.innerHTML = user.email;

        const link = document.createElement("a");
        link.href = "#";
        link.innerHTML = "View Details";

        link.addEventListener("click", function () {
          popup_details.innerHTML = `
                        <h2>${user.name.first} ${user.name.last}</h2>
                        <img src="${user.picture.large}">
                        <p>Phone: ${user.phone}</p>
                        <p>Country: ${user.location.country}</p>
                        <p>City: ${user.location.city}</p>
                    `;
          popup.classList.remove("hidden");
        });

        card.appendChild(name);
        card.appendChild(email);
        card.appendChild(link);

        users_container.appendChild(card);
      });
    });


close_btn.addEventListener("click", function () {
  popup.classList.add("hidden");
});

//4

console.log("im working???");

const pagination_button = document.querySelector(".pagination");
const cat_contianer = document.querySelector(".cat_contianer");

async function load_cats(page) {
  const params = new URLSearchParams({
    limit: 10,
    page: page,
  });

  const response_1 = await fetch(
    "https://api.thecatapi.com/v1/images/search?" + params
  );
  const cats = await response_1.json();
  cat_contianer.innerHTML = "";

  cats.forEach(function (cat) {
    const img = document.createElement("img");
    img.src = cat.url;
    img.style.width = "200px";
    img.style.height = "200px";

    cat_contianer.appendChild(img);
  });
  console.log(cats);
}

for (let i = 0; i < 10; i++) {
  const btn = document.createElement("button");
  btn.innerHTML = i;
  btn.addEventListener("click", function () {
    load_cats(i);
  });
  pagination_button.appendChild(btn);
}

load_cats(0);
//5

const select_btn = document.querySelector(".breed_select");
const cats_container = document.querySelector(".cats_container");

async function load_breeds() {
  const response_2 = await fetch("https://api.thecatapi.com/v1/breeds");
  const breeds = await response_2.json();
  console.log(breeds);

  breeds.forEach(function (breed) {
    const option = document.createElement("option");
    option.value = breed.id;
    option.innerHTML = breed.name;

    select_btn.appendChild(option);
  });
}

async function load_cats_by_breed(breed_id) {
  const response_3 = await fetch(
    "https://api.thecatapi.com/v1/images/search?breed_ids=" + breed_id
  );
  const data = await response_3.json();
  cat_contianer.innerHTML = "";
  const img = document.createElement("img");
  img.src = data[0].url;

  img.style.width = "300px";
  img.style.height = "300px";

  cat_contianer.appendChild(img);
}

select_btn.addEventListener("change", function () {
  load_cats_by_breed(select_btn.value);

});

load_breeds();
