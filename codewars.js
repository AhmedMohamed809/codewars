
    
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

function squareDigits(num) {
let arryNumber = num.toString().split("");
let newArray=[]
for(let i=0;i<arryNumber.length;i++){
newArray.push(parseInt(arryNumber[i] * arryNumber[i]));
}
return newArray.join("") ;
}
console.log(squareDigits(2112)); // expect to equl 4114









// ########################################################
//                                 Kata 5

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

