
const load_button=document.querySelector(".load_user")
const user_container=document.querySelector(".user_card_container")

load_button.addEventListener("click", function(){

    fetch("https://randomuser.me/api/")
    .then(response=> response.json())
    .then(data=>
        {
        const user=data.results[0]
        console.log(Object.keys(user))//checking what i have in user info

        user_container.innerHTML="";

        const name= document.createElement("h2")
        name.innerHTML=`${user.name.first} ${user.name.last}`

        const gender=document.createElement("p")
        gender.innerHTML=`Gender :${user.gender}`     
        const email=document.createElement("p")
        email.innerHTML=`Email: ${user.email}`   
        const cuntry=document.createElement("p")
        cuntry.innerHTML=`Country: ${user.location.country}`

        user_container.appendChild(name)
        user_container.appendChild(gender)
        user_container.appendChild(email)
        user_container.appendChild(cuntry)

    })
})

//1


