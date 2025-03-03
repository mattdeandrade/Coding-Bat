/** Return an array that is "left shifted" by one -- so {6, 2, 5, 3} returns {2, 5, 3, 6}. You may modify and return the given array, or return a new array.*/

function shiftLeft(nums) {
  const newArray = [];
  const size = nums.length;
  for (let i = 0; i < size; i++) {
    newArray.push(nums[(i + 1) % size]);
  }
  return newArray;
}

console.log(shiftLeft([6, 2, 5, 3]));
console.log(shiftLeft([1, 2]));
console.log(shiftLeft([1]));
console.log(shiftLeft([]));
console.log(shiftLeft([1, 1, 2, 2, 4]));
console.log(shiftLeft([1, 1, 1]));
console.log(shiftLeft([1, 2, 3]));
