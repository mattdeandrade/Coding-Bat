/** Return true if the array contains, somewhere, three increasing adjacent numbers like .... 4, 5, 6, ... or 23, 24, 25.*/

function tripleUp(nums) {
  let ascendingThree = false;
  for (let i = 0; i < nums.length - 2; i++)
    if (nums[i] === nums[i + 1] - 1 && nums[i + 1] === nums[i + 2] - 1)
      ascendingThree = true;
  return ascendingThree;
}

console.log(ascendingThree([1, 4, 5, 6, 2]));
console.log(ascendingThree([1, 2, 3]));
console.log(ascendingThree([1, 2, 4]));
console.log(ascendingThree([1, 2, 4, 5, 7, 6, 5, 6, 7, 6]));
console.log(ascendingThree([1, 2, 4, 5, 7, 6, 5, 7, 7, 6]));
console.log(ascendingThree([1, 2]));
console.log(ascendingThree([1]));
console.log(ascendingThree([]));
console.log(ascendingThree([10, 9, 8, -100, -99, -98, 100]));
console.log(ascendingThree([10, 9, 8, -100, -99, 99, 100]));
console.log(ascendingThree([-100, -99, -99, 100, 101, 102]));
console.log(ascendingThree([2, 3, 5, 6, 8, 9, 2, 3]));
