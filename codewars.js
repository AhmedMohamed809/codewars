//https://www.codewars.com/kata/5f0ed36164f2bc00283aed07/train/javascript
function overTheRoad(address, n) {
  let eveNumber = [];

  let oldNumber = [];
  let countEven = 0;
  let countOld = 1 - 2;
  let resulr = [];
  for (let i = 0; i < n; i++) {
    countEven += 2;
    eveNumber.push(countEven);
  }
  for (let i = 0; i < n; i++) {
    countOld += 2;
    oldNumber.push(countOld);
  }
 let newEven = eveNumber.sort((a, b) => b - a);
  if (address % 2 == 0) {
    for (let i = 0; i < eveNumber.length; i++) {
      if (eveNumber[i] == address) {
        resulr = i;
      }
    }
    return  oldNumber[resulr]
  }else {
     for (let i = 0; i < oldNumber.length; i++) {
       if (oldNumber[i] == address) {
         resulr = i;
       }
     }
     return eveNumber[resulr];
  }
}
console.log(overTheRoad(23633656673, 310027696726)); // 6
