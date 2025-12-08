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
const inputEmg= document.querySelector(".imageinpute")
const container= document.querySelector(".imageContainer")
showButton.addEventListener("click",function(){
     const img = document.createElement("img");
     img.src=inputEmg.value
    container.innerHTML=""
    container.appendChild(img)


})
//4
const remove_button= document.querySelector(".removeBtn")
const num_arr=[1,2,3,4,5,6,7,8,9]
console.log("the arr:",num_arr)

remove_button.addEventListener("click",function(){
    num_arr.pop()
    console.log("the arr after remove:",num_arr)
})