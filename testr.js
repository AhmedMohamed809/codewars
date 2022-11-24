// let familyMembers = ["Homer", "Marge", "Bart", "Lisa", "Maggie"];

// // Create variables to store the values here
// let [dad, mum, son, daughter, baby] = familyMembers;
// console.log(
//   `In the Simpsons family, ${dad} and ${mum} are the parents. ${son} is the son, ${daughter} is the daughter, and ${baby} is the baby.`
// );
//########################################

let citiesByPopulation = [
  { name: "London", population: 8000000 },
  { name: "Birmingham", population: 1000000 },
  { name: "Glasgow", population: 600000 },
  { name: "Manchester", population: 500000 },
];

// Assign variables using array destructuring on this line
let [london, birmingham, glasgow, manchester] = citiesByPopulation;
console.log(`${london.name} population is ${london.population}`);
console.log(`${birmingham.name} population is ${birmingham.population}`);
console.log(`${glasgow.name} population is ${glasgow.population}`);
console.log(`${manchester.name} population is ${manchester.population}`);
// function sumAndMultiply(a, b) {
//   return [a + b, a * b];
// }

// let [sum, multiply] = sumAndMultiply(4, 6);
// // Assign variables using array destructuring on this line

// console.log(
//   `The sum of the two numbers is ${sum}, the multiplication of the two numbers is ${multiply}`
// );
