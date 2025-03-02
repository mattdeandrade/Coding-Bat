/**Given an array of ints, return true if every 2 that appears in the array is next to another 2. */

function twoTwo(nums) {
  let single = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 2 && nums[i - 1] !== 2 && nums[i + 1] !== 2) single = true;
  }

  return !single;
}

console.log(twoTwo([4, 2, 2, 3]));
console.log(twoTwo([2, 2, 4]));
console.log(twoTwo([2, 2, 4, 2]));
console.log(twoTwo([1, 3, 4]));
console.log(twoTwo([1, 2, 2, 3, 4]));
console.log(twoTwo([1, 2, 3, 4]));
console.log(twoTwo([2, 2]));
console.log(twoTwo([2, 2, 7]));
console.log(twoTwo([2, 2, 7, 2, 1]));
console.log(twoTwo([4, 2, 2, 2]));
console.log(twoTwo([2, 2, 2]));
console.log(twoTwo([1, 2]));
console.log(twoTwo([2]));
console.log(twoTwo([1]));
console.log(twoTwo([]));
console.log(twoTwo([5, 2, 2, 3]));
console.log(twoTwo([2, 2, 5, 2]));
