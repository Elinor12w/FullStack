console.log("hi word it is me elinor :")

const user_size=prompt("enter the length of the arrays");

function make_array(size) {
    let array=[];    
    for (let index = 0; index < size; index++) {
       array.push(index+1) ;   
    }
return array;
}

const result = make_array(user_size);
 console.log("your array ; "+result)
//2
 function dubelle(arr) {
    let new_arr=[];
    for (let index = 0; index < arr.length; index++) {
         new_arr.push(arr[index]);
         new_arr.push(arr[index]);
        
    }
    return new_arr;
 }

console.log("the dublle array is :"+ dubelle(result));

//3

 function my_reverse(arr){
    let arr2=[];
    
      for(let i= arr.length-1; i>=0;i--){
        arr2.push(arr[i]);
      }
      return arr2;
 }
 const revs_arr =my_reverse(result);
 console.log("the original arry"+ result);
 console.log("the reverse arry is :"+ revs_arr);

//4
 const  first_num=Number(prompt("entwr the first num of the array ;"))
 function following(first_num){
 const follow_array=[];
 for (let index = 0; index < 10; index++) {
    follow_array.push((first_num+index)); 
}
 return follow_array
 }
 console.log("the following array is :"+following(first_num))
 //5
const dogs_array=[];



function dogs_func(){

    for (let index = 0; index <4; index++) {
       let eyes=prompt("enter the eye color");
      let weight=prompt("enter the weight");
       let age=prompt("enter thr age");

       const dog={
        eyes_color:eyes,
        dog_weight:weight,
        dog_age:age,
       }
        
        dogs_array.push(dog);
    }

return dogs_array

}

console.log("the dogs array is :", dogs_func());
//part 2
// נסיונות לשחק עם 
// let array = [1, 2, 45,68,12,11,27];
// console.log(array.join("number  ")); 
// const str ="elin,or";
// console.log(str.split(","));
// array.sort(function(a,b){return a-b});
// console.log(array);
function repitition(arr){
    let newarray=[];
    for (let index = 0; index < arr.length; index++) {
        newarray.push(arr[index]*arr[index]);
    }
    return newarray;
}
function repitition_map(arr){
    return arr.map(function(x){return x*x;});
}

const array=[1,2,3,9,10];
console.log("the repitition array is :"+repitition(array));
console.log("the repitition map array is :"+repitition_map(array));

//2

arr_market=["apple","banana","orange","mango"];
function ordered_market(arr,dirction)
{
    if (dirction=="up ")
        {arr.sort();}
    else if (dirction=="down") 
        {
            arr.sort();
        arr.reverse();
    }
    return arr;

}

let dirction=prompt("enter the dirction up / down");
console.log("the ordered market is :", ordered_market(arr_market,dirction));

//3
function last (arr,x){
    if (x<=0 )
    {
        return arr.pop();
    }
    else{
        return arr.slice(-x);
    }
}
console.log("the last element is :"+ last(array,2));
//4

function noCapotal(arr){
    return arr.filter(function(x){return x==x.toLowerCase();});
}
const str_array=["Avi", "Dani", "shuki", "mOshe", "arik"];
console.log("the no capotal array is :"+ noCapotal(str_array));

//5

function reverseStr(str){
    return str.split("").reverse().join("");
}
console.log("the reverse str is :"+ reverseStr("Elinor"));

function isPalindrome( str_arr){
    let new_array=[];
    for (let index = 0; index < str_arr.length; index++) {

        const reversed= reverseStr(str_arr[index]);
        if (reversed==str_arr[index]){
            new_array.push(str_arr[index]);
        }
    }

   return new_array;

}
console.log("the palindroms are :",isPalindrome(["madam", "hello", "racecar", "world", "level"]));
//7
function delAnimals(arr,arr_del){
    return arr.filter(function(x){return !arr_del.includes(x);});

}
const animals=["dog","cat","rabbit","fish","hamster"];
const del_animals=["cat","fish"];
console.log("the new animals array is :", delAnimals(animals,del_animals));


//8

function guessgame( ){
    const random_num=Math.floor(Math.random()*6)+1;
    const guess_arr=[];

    while (true){
        const user_guess= Number(prompt('enter a num between 1 to 6:'));
        guess_arr.push (user_guess);
        if (user_guess==random_num)
        {
            console.log("all your guesses :", guess_arr);
            break;
        }
        else{
            console.log("try again")
        }
    }

}
guessgame();

//9 
const n1=Number(prompt("enter number 1"));
const n2=Number(prompt("enter number 2"));
const n3=Number(prompt("enter number 3"));
const n4=Number(prompt("enter number 4"));
const n5=Number(prompt("enter number 5"));
const dirction_sort=prompt("enter the dirction for sort up / down");

function my_sort( dirction,n1,n2,n3,n4,n5){
    const arr=[n1,n2,n3,n4,n5];
    if (dirction=="up")
    {
         return arr.sort(function(a,b){return a-b;});
        }else if (dirction=="down")
{
    return arr.sort(function(a,b){return b-a;});
} 
} 
console.log("the sorted array is :", my_sort(dirction_sort,n1,n2,n3,n4,n5));


//10

const main_array=[4,2,7,5,9,1,3,6,8,0];

const copy1_array=main_array.slice();
const copy2_array=[...main_array];
const copy3_array=Array.from(main_array);

console.log("the copy1 array is :", copy1_array);
console.log("the copy2 array is :", copy2_array);
console.log("the copy3 array is :", copy3_array);
