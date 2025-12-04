
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

//4
function multiplication_formula(n){

    for (let i = 1; i <=10 ;i++)
        {
        for(let j = 1; j <=n;j++){

            console.log(i*j+"\t");
   }
}}
const num2=prompt("enter a number for multiplication table:");
console.log(multiplication_formula(num2));

//5c 
 function loop_words(){
    let word= prompt("enter a word (type 'stop' to end):");
while(word !== "stop" )
    {  console.log(word);
     word = prompt("enter a word (type 'stop' to end):");
  
}

} loop_words();

//6
function max_number(){
    let max =0
    use_number = Number(prompt("enter a number (type '-1' to end):"));
    while(use_number !== -1){
        if (use_number>max){
            max = use_number;
        }
        use_number = Number(prompt("enter a number (type '-1' to end):"));
    }
return max;
}
console.log("the max num is", max_number());   

//7