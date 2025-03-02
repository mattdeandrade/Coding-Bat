/**Given an array of ints, return true if the value 3 appears in the array exactly 3 times, and no 3's are next to each other. */

function haveThree(nums) {
  let threeAdjacent = false;
  let threeCount = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 3) threeCount++;
    if (nums[i] === 3 && nums[i - 1] === 3) threeAdjacent = true;
  }

  if (threeCount === 3 && !threeAdjacent) return true;
  return false;
}

console.log(haveThree([3, 1, 3, 1, 3]));
console.log(haveThree([3, 1, 3, 3]));
console.log(haveThree([3, 4, 3, 3, 4]));
console.log(haveThree([1, 3, 1, 3, 1, 2]));
console.log(haveThree([1, 3, 1, 3, 1, 3]));
console.log(haveThree([1, 3, 3, 1, 3]));
console.log(haveThree([1, 3, 1, 3, 1, 3, 4, 3]));
console.log(haveThree([3, 4, 3, 4, 3, 4, 4]));
console.log(haveThree([3, 3, 3]));
console.log(haveThree([1, 3]));
console.log(haveThree([3]));
console.log(haveThree([1]));
