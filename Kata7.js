// Currying functions: multiply all elements in an array

// function multiplyAll(array) {
//   return (number) => {
//     return array.map((el) => el * number);
//   };
// }

// console.log(multiplyAll([1, 2, 3])(2));
// multiplyAll([1, 2, 3])(2) = [2, 4, 6];
//############################################
//Coding Meetup #11 - Higher-Order Functions Series - Find the average age
// function getAverageAge(list) {
//   let ages = list.map((el) => el.age);
//   console.log(ages);
//   let sumAges = ages.reduce((c, item) => {
//     c = c + item;
//     return c;
//   }, 0);
//   console.log(sumAges);
//   return Math.round(sumAges / ages.length);
// }
//#########################################################
// function findAdmin(list, lang) {
//   if (list.githubAdmin == []) {
//     return [];
//   }
//   let newlist = list.filter(
//     (el) => el.language.includes(lang) && el.githubAdmin == "yes"
//   );
//   console.log(newlist);
//   return newlist;
// }
