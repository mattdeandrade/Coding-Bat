/** Given 2 int arrays, a and b, return a new array length 2 containing, as much as will fit, the elements from a followed by the elements from b. The arrays may be any length, including 0, but there will be 2 or more elements available between the 2 arrays.*/

function make2(a, b) {
  if (a.length >= 2) return [a[0], a[1]];
  if (a.length === 1) return [a[0], b[0]];
  if (a.length === 0) return [b[0], b[1]];
}

console.log(make2([4, 5], [1, 2, 3]));
console.log(make2([4], [1, 2, 3]));
console.log(make2([], [1, 2]));
console.log(make2([1, 2], []));
console.log(make2([3], [1, 2, 3]));
console.log(make2([3], [1]));
console.log(make2([3, 1, 4], []));
console.log(make2([1], [1]));
console.log(make2([1, 2, 3], [7, 8]));
console.log(make2([7, 8], [1, 2, 3]));
console.log(make2([7], [1, 2, 3]));
console.log(make2([5, 4], [2, 3, 7]));
