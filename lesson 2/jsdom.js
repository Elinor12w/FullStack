console.log("Hello, World!");   

//1

const button = document.getElementById("showButton");
const input = document.getElementById("userinput");
button.addEventListener("click", function() {
    alert(input.value);
});

//2
document.addEventListener("mousemove", function(event) {
    document.querySelector(".x_cordinate").innerHTML = event.clientX;
    document.querySelector(".y_cordinate").innerHTML= event.clientY;

})
//3
const showButton=document.querySelector(".showEmgBtn")
//4
const inputEmg= document.querySelector(".imageinpute")
const container= document.querySelector(".imageContainer")
showButton.addEventListener("click",function(){
     const img = document.createElement("img");
     img.src=inputEmg.value
    container.innerHTML=""
    container.appendChild(img)


})
//5
const remove_button= document.querySelector(".removeBtn")
const num_arr=[1,2,3,4,5,6,7,8,9]
console.log("the arr:",num_arr)

remove_button.addEventListener("click",function(){
    num_arr.pop()
    console.log("the arr after remove:",num_arr)
})

const four_butoons=document.querySelectorAll(".color_btn")
four_butoons.forEach(function(button)
{
    button.addEventListener("click",function()
    {
        const color= button.getAttribute("data_color")
       document.body.style.backgroundColor = color;
    })

    })

    //6
    const arr_colors=["red","green","blue","yellow","pink","black"]
    function randm_colorfunc(){
        const index= Math.floor(Math.random()* arr_colors.length)    
        return arr_colors[index]
    }
    setInterval(function(){
        const radom_color= randm_colorfunc();
        document.body.style.backgroundColor= radom_color;
    }, 2000)