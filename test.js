// ## .map() => retrun  a naew array (same item numbers || same array.length )
// ## .filter() = > return you can find exatle item from the array by condation (  i > 8 ))
// ## .split() => return 


// let array = [1,2,3,4,5,6]
// let nawArray=[]

// for(let i = 0 ; i < array.length ; i ++){
//    nawArray.push(array[i] * 2)
// }
// console.log(nawArray);
// let arrayMap=array.map(function (x){
//     return x * 2
// })
// console.log(arrayMap)
// let array = [1, 2, 3, 4, 5, 6];
// let newArray = array.map(i=>i * 5)
// console.log(newArray);
// ####################################################################
////               Filter() =>  
// let array =["spray", "limit", "elite", "exuberant", "destruction", "present"];
//1-go to firest item in array 
// 2-cheack how many letter in this item //item.length 
// 3-if item greten than 5  // if ()
// 4- print this item  // console.log 
// 5 - repet from line 1 to 4 // for //while// filter
// let newArray = array.filter((i) => i==array[1]);
// console.log(newArray)
// ##############################

///  split()
// let  str = "The quick brown fox";

//  let newStr = str.split(" ")
//  let newfilter=newStr.filter(i=>i=="fox")
//  console.log(newStr)
//   console.log(newfilter);
//charCodeAt >> a =787 , b= 899 , c =8998 , h=84 
// const sentence = "The quick brown fox jumps over the lazy dog.";
// console.log(sentence.charCodeAt(2));




const greekGods = [
  "Aphrodite",
  "Ares",
  "Artemis",
  "Athena",
  "Poseidon",
  "Zeus",
];
// for(let i = 0 ; i < greekGods.length;i++){
//     if(i==2){
//     setTimeout(function () {
//       console.log(i,greekGods[2]);
//     }, 2000);
// }else{
//     console.log(i,greekGods[i])
// }
// }
greekGods.forEach((god,i)=>{
        if (i == 2) {
          setTimeout( ()=>{
            console.log(i, god);
          }, 2000);
        } else {
          console.log(i, god);
        }
})
let r= document.getElementById
let li = document.createElement("li")
r.forEach(x=>{
    li.innerHTML(x)
})





