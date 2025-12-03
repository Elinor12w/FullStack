

console.log("hi word it is me elinor :)")



const cat={
    name: "kitty",
    color:"white",
    
    saymeow:function(){
        console.log("Meow")
    }
}
cat.saymeow();

const newprop = prompt("Enter the cat's attribute.")
if (newprop){
    const newvalue= prompt("What is the value of the attribute"+newprop+"?")
    cat[newprop]=newvalue;
}
console.log("The object is updated:",cat)


 function catname(catobj,stringcat){
    return (catobj.name==stringcat);
 }

 const user_cat_name=prompt("Enter cat name");

 const result =catname(cat,user_cat_name);
 console.log("The result is;",result);

function merge_obj( catobj1,catobj2){
    const newcatobj={};

    for(let key in catobj1){
        newcatobj[key]=catobj1[key];
    }

    
     for(let key in catobj2){
        newcatobj[key]=catobj2[key];
    }
    return newcatobj;
    
}
// בדיקה ל merge
const cat12 = { name: "Milly", color: "gray" };
const extra = { age: 3, favoriteFood: "tuna" };

const merged = merge_obj(cat12, extra);

console.log(merged);
const catwrapper={};

for (let index = 0; index <5; index++) {
    const cat_name= "cat"+index;
    const color= prompt("Enter color name");

    const cats = {
      name: cat_name,
      color: color,};

      catwrapper[cat_name]=cats;
}
console.log("all the cats;",catwrapper)