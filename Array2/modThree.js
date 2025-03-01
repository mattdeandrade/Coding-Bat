/**Given an array of ints, return true if the array contains either 3 even or 3 odd values all next to each other. */

function modThree(nums) {
  let even3 = false;
  let odd3 = false;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 2 === 0 && nums[i + 1] % 2 === 0 && nums[i + 2] % 2 === 0)
      even3 = true;
    if (nums[i] % 2 === 1 && nums[i + 1] % 2 === 1 && nums[i + 2] % 2 === 1)
      odd3 = true;
  }

  if (even3 || odd3) return true;
  return false;
}

console.log(modThree([2, 1, 3, 5]));
console.log(modThree([2, 1, 2, 5]));
console.log(modThree([2, 4, 2, 5]));
console.log(modThree([1, 2, 1, 2, 1]));
console.log(modThree([9, 9, 9]));
console.log(modThree([1, 2, 1]));
console.log(modThree([1, 2]));
console.log(modThree([1]));
console.log(modThree([]));
console.log(modThree([9, 7, 2, 9]));
console.log(modThree([9, 7, 2, 9, 2, 2]));
console.log(modThree([9, 7, 2, 9, 2, 2, 6]));
