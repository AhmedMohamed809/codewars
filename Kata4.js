// function sumStrings(a, b) {
//   return (BigInt(a) + BigInt(b)).toString();
// }
// console.log(
//   sumStrings("712569312664357328695151392", "8100824045303269669937")
// );
//'712577413488402631964821329'
//##################
// function nextBigger(n) {
//   let number = n
//     .toString()
//     .split("")
//     .map((x) => Number(x));

//   let r = number.filter((item, index) => {
//     if (number[index] === item || number.length == 1) {
//       return -1;
//     }
//   });
//   console.log();

//   //   for (let i = 0; i < number.length; i++) {
//   //     if (number.length == 1 || number.includes(number[i])) {
//   //       return -1;
//   //     } else {
//   //       return (
//   //         number
//   //           .sort((a, b) => {
//   //             return b - a;
//   //           })
//   //           .join("") * 1
//   //       );
//   //     }
//   //   }
//   console.log(">>>>>", r);
// }

// console.log(nextBigger(5)); // 21

//###################

// function add(a, b) {
//   return (BigInt(a) + BigInt(b)).toString(); // Fix me!
// }
//################################ Snail #############
snail = function(array) {
  let a = array.flat();
  console.log(a);
  return a;
}
let array = [[1,2,3],
         [4,5,6],
         [7,8,9]]
console.log(snail(array));
// snail(array) #=> [1,2,3,6,9,8,7,4,5]