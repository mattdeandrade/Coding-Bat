/**Given 2 int arrays, each length 2, return a new array length 4 containing all their elements. */

function plusTwo(a, b) {
  const newArray = [];
  for (let i = 0; i < 2; i++) newArray.push(a[i]);
  for (let i = 0; i < 2; i++) newArray.push(b[i]);
  return newArray;
}

console.log(plusTwo([1, 2], [3, 4]));
console.log(plusTwo([4, 4], [2, 2]));
console.log(plusTwo([9, 2], [3, 4]));
