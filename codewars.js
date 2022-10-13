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
//            Kata 7 
//https://www.codewars.com/kata/54bf85e3d5b56c7a05000cf9/train/javascript

var number=function(array){
  if(array.length == 0 ){
    return []
  }else {
  let r= array.map((x,index)=>`${index+1}: ${x}` )
  console.log(r)
  return r;
}}
console.log(number(["a", "b", "c"])) // ["1: a", "2: b", "3: c"]