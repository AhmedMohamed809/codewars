
    
//https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript
// function overTheRoad(address, n) {
//   let eveNumber = [];

//   let oldNumber = [];
//   let countEven = 0;
//   let countOld = 1 - 2;
//   let resulr = [];
//   for (let i = 0; i < n; i++) {
//     countEven += 2;
//     eveNumber.push(countEven);
//   }
//   for (let i = 0; i < n; i++) {
//     countOld += 2;
//     oldNumber.push(countOld);
//   }
//  let newEven = eveNumber.sort((a, b) => b - a);
//   if (address % 2 == 0) {
//     for (let i = 0; i < eveNumber.length; i++) {
//       if (eveNumber[i] == address) {
//         resulr = i;
//       }
//     }
//     return  oldNumber[resulr]
//   }else {
//      for (let i = 0; i < oldNumber.length; i++) {
//        if (oldNumber[i] == address) {
//          resulr = i;
//        }
//      }
//      return eveNumber[resulr];
//   }
// }
// console.log(overTheRoad(23633656673, 310027696726)); // 6
//#####################################################################
//https://www.codewars.com/kata/5715eaedb436cf5606000381/train/javascript 
// function positiveSum(arr) {
//    return arr.filter(x=>x>0).reduce((c,v)=>c+=v,0)
// }
// console.log(positiveSum([1,-2,3,4,5]))//13
//##########################################
//                              Kata 7 
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

// var number=function(array){
//   if(array.length == 0 ){
//     return []
//   }else {
//   let r= array.map((x,index)=>`${index+1}: ${x}` )
//   console.log(r)
//   return r;
// }}
// console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]




//###########################################
//www.codewars.com/kata/5809b62808ad92e31b000031/train/javascript

//  function calculate(str) {
//    const plus = /plus/gi;
//    const minus = /minus/gi;
//    let sum = str.replace(plus, "+").replace(minus, "-");

//    return eval(sum).toString();
//  }
//  console.log(calculate("1minus2minus3minus4")); // -8
////////////////////////////////////////////
//https://www.codewars.com/kata/557cd6882bfa3c8a9f0000c1/train/javascript
// function getAge(inputString) {
//   return inputString.split(" ")[0] * 1;
// }
//####################################################
//https://www.codewars.com/kata/5250a89b1625e5decd000413/train/javascript
// var flatten = function (array) {
//   return array.flat();
// };
//##########################################
//https://www.codewars.com/kata/546e2562b03326a88e000020/train/javascript

// function squareDigits(num) {
// let arryNumber = num.toString().split("");
// let newArray=[]
// for(let i=0;i<arryNumber.length;i++){
// newArray.push(parseInt(arryNumber[i] * arryNumber[i]));
// }
// return newArray.join("") ;
// }
// console.log(squareDigits(2112)); // expect to equl 4114
//################################################################


// function DNAStrand(dna) {
// let newDna=dna.split("").map(x=>{
//     if (x == "A") {
//       return x.replace(/A/gi, "T");
//     } else if (x == "T") {
//       return x.replace(/T/gi, "A");
//     } else if (x == "C") {
//       return x.replace(/C/gi, "G");
//     } else if (x == "G") {
//       return x.replace(/G/gi, "C");
//     }
// });
//   return newDna.join("");
// }
// console.log(DNAStrand("ATTGC"));
//############################################
//https://www.codewars.com/kata/574b3b1599d8f897470018f6/train/javascript
// function getRealFloor(n) {
//   if (n > 13) {
//     return 13;
//   } else if (n < 13) return n - 1;
// }             





// ########################################################
//                                 Kata 6

// function moveZeros(arr) {

  
//   let r = arr.map((x,i)=>{
//     if( x==0){
//         x[i].splice(arr.length-1, 1, 0);
//     }
// return x 
// });
//   console.log(r)
//   return r 

// }
// console.log(moveZeros([1, 2, 0, 1, 3, 1, 0, 0, 0, 0]));

//##################################
//https://www.codewars.com/kata/54da5a58ea159efa38000836/train/javascript
// function findOdd(A) {
//   const count = {};
//   let resalt="";

//   A.forEach((element) => {
//       count[element] = (count[element] || 0) + 1;
//     });
   
//     for (const  key in count) {
         
//       if (count[key] % 2 !== 0) {
//      resalt = key
    
//     }
//     }
//     console.log(count)
//     return resalt;
// }

//   console.log(
//     findOdd([20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5])
//   );
//#############################################
//https://www.codewars.com/kata/541c8630095125aba6000c00/train/javascript

// function digitalRoot(n) {
//     let randomNumber=0;
// let newNumber=n.toString().split("").map(x=>x*1).reduce((c,v)=>{c=c+v;
// return c ; 
// },0);


// if(newNumber < 9){
// return +newNumber
// }else  if (newNumber >= 10) {
//    randomNumber= newNumber
//     .toString()
//     .split("")
//     .map((x) => x * 1)
//     .reduce((c, v) => {
//       c = c + v;
//       return c;
//     }, 0);
//     if(randomNumber >=10)
//     {
//         return randomNumber
//           .toString()
//           .split("")
//           .map((x) => x * 1)
//           .reduce((c, v) => {
//             c = c + v;
//             return c;
//           }, 0);
//     }
//     return randomNumber
// }
// }

//######################
//https://www.codewars.com/kata/523f5d21c841566fde000009/train/javascript
// function arrayDiff(a, b) {
// let ran = a.filter((x) => !b.includes(x));
// return ran 
// }
// console.log(arrayDiff([1,2,2], [2]));// 1
//####################################


// var countBits = function (n) {
//     let count = 0 ;
//   let toDigt= n.toString(2).split('').map(x=>x*1).filter(x=>{
//     if(x==1){
//        return count++
//     }
//   });
//   return count

// };
// console.log(countBits(10));
////#################################################################
//####
// https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/train/javascript
// 

// function duplicateCount(text) {
//     let count=0

// let newArray = text.toLowerCase().split("")

// if(newArray.length==0){

// return count

// }

// let r = newArray.filter((x, i) => newArray.indexOf(x) !== i)

// for(let i = 0 ; i < r.length;i++){

// if (r.indexOf(r[i]) == i ){

// count += 1

// }

// }

// console.log(count);

// return count

// }

// console.log(duplicateCount("Indivisibility"));
//################################
// function findShort(s) {
//   let g = 0;
//   let arry = s.split(" ");
//   g = arry[0].length;
//   for (i = 0; i < arry.length; i++) {
//     if (arry[i].length <  arry[i+1].length) {
//       g = arry[i].length;
//     }
//   }
//   console.log(g);
// }
// console.log(findShort("bitcoin take over the world maybe who knows perhaps"));
// #######################################

// function expandedForm(num) {
//   let r = num.toString().split("");
//   console.log(r)
//   let map = r.map((x) => x * 1);
//   if (r.length == 2) {
//     let hi = `${map[0] * 10} + ${map[1]}`;
//     console.log(hi);
//     return hi;
//   } else {
//       let first = map.slice(0,2).join("")
//       let seco =  map.slice(2,4).join("")
//   console.log(first);
//     let y = `${first  * 100} + ${seco * 10} + ${map[map.length - 1]}`;
//     return y;
//   }
// }
// console.log(expandedForm(70304)); // 7000 + 300 + 4
//##########################
function stringExpansion(s) {
  let ms = s.split("");
  console.log(typeof ms[0])
let n=[]
for ( let i = 0 ; i < ms.length;i++){
if(ms[i]== '0' && typeof m[i+1] == string  || ms[i]== '1' || ms[i]== '2'|| ms[i]== '3' || ms[i]== '4' || ms[i]== '5'){
    n.push(ms[i+1].repeat(ms[i] *1))
}
}
  console.log(ms);
return n.join('')
}
console.log(stringExpansion("3d332f2a"));