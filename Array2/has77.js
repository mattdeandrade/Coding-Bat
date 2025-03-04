/**Given an array of ints, return true if the array contains two 7's next to each other, or there are two 7's separated by one element, such as with {7, 1,7}. */

function has77(nums) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 7 && (nums[i + 1] === 7 || nums[i + 2] === 7)) return true;
  }
  return false;
}

console.log(has77([1, 7, 7]));
console.log(has77([1, 7, 1, 7]));
console.log(has77([1, 7, 1, 1, 7]));
console.log(has77([7, 7, 1, 1, 7]));
console.log(has77([2, 7, 2, 2, 7, 2]));
console.log(has77([2, 7, 2, 2, 7, 7]));
console.log(has77([7, 2, 7, 2, 2, 7]));
console.log(has77([7, 2, 6, 2, 2, 7]));
console.log(has77([7, 7, 7]));
console.log(has77([7, 1, 7]));
console.log(has77([7, 1, 1]));
console.log(has77([1, 2]));
console.log(has77([1, 7]));
console.log(has77([7]));
