/** Given two arrays of ints sorted in increasing order, outer and inner, return true if all of the numbers in inner appear in outer. The best solution makes only a single "linear" pass of both arrays, taking advantage of the fact that both arrays are already in sorted order.*/

function linearIn(outer, inner) {
  for (let i = 0; i < outer.length; i++) {
    if (outer[i] === inner[0]) inner.shift();
  }
  if (inner.length === 0) return true;
  return false;
}

console.log(linearIn([1, 2, 4, 6], [2, 4]));
console.log(linearIn([1, 2, 4, 6], [2, 3, 4]));
console.log(linearIn([1, 2, 4, 4, 6], [2, 4]));
console.log(linearIn([2, 2, 4, 4, 6, 6], [2, 4]));
console.log(linearIn([2, 2, 2, 2, 2], [2, 2]));
console.log(linearIn([2, 2, 2, 2, 2], [2, 4]));
console.log(linearIn([2, 2, 2, 2, 4], [2, 4]));
console.log(linearIn([1, 2, 3], [2]));
console.log(linearIn([1, 2, 3], [-1]));
console.log(linearIn([1, 2, 3], []));
console.log(linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 0, 3, 12]));
console.log(linearIn([-1, 0, 3, 3, 3, 10, 12], [0, 3, 12, 14]));
console.log(linearIn([-1, 0, 3, 3, 3, 10, 12], [-1, 10, 11]));
