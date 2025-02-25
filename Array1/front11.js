/**Given 2 int arrays, a and b, of any length, return a new array with the first element of each array. If either array is length 0, ignore that array. */

function front11(a, b) {
  if (a.length === 0 && b.length === 0) return [];
  if (a.length === 0) return [b[0]];
  if (b.length === 0) return [a[0]];
  return [a[0], b[0]];
}

console.log(front11([1, 2, 3], [7, 9, 8]));
console.log(front11([1], [2]));
console.log(front11([1, 7], []));
console.log(front11([], [2, 8]));
console.log(front11([], []));
console.log(front11([3], [1, 4, 1, 9]));
console.log(front11([1, 4, 1, 9], []));
