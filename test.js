function solution(A) {
  let result = A.find((x) => x % 4 == 0 && x > 0);

  return result;
}
console.log(solution([-6, -91, 1011, -100, 84, -22, 0, 1, 473]));
