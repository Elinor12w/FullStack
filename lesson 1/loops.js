
console.log("hello world it is me elinor ")

//1
function TEN_loop(name1){
    for (let i = 0; i < 10; i++) {
        console.log(name1);
    }
}

let name = prompt("Enter your name:");
TEN_loop(name);

//2
function x_loop(number){
    for (let i = 0; i < number; i++)
    {
        console.log("hi,", i + 1);
    }
}
const num = prompt("Enter a number:");
x_loop(num);

//3


function x_marks_avrgege(x1)
{
    let mark=0;
    let sum =0;
    for (let i = 0; i < x; i++){
         mark =Number(prompt("enter a mark"+(i+1)+":"));
         sum =sum + mark;
    }
return sum/x1;
}
const x= Number(prompt("enter a num"));
console.log( "the marks avrege is ", x_marks_avrgege(x));