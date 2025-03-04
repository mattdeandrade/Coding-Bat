/**Return a version of the given array where each zero value in the array is replaced by the largest odd value to the right of the zero in the array. If there is no odd value to the right of the zero, leave the zero as a zero. */

function zeroMax(nums) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) newArray.push(nums[i]);

  for (let i = 0; i < nums.length; i++) {
    let largest = 0;
    let largestKey = 0;
    if (nums[i] === 0) {
      for (let j = i; j < nums.length; j++) {
        if (nums[j] % 2 === 1 && nums[j] > largest) {
          largest = nums[j];
          largestKey = j;
        }
      }
      if (j > i) newArray[i] = largest;
    } //for j
  } //for i

  return newArray;
}

console.log(zeroMax([0, 5, 0, 3]));
console.log(zeroMax([0, 4, 0, 3]));
console.log(zeroMax([0, 1, 0]));
console.log(zeroMax([0, 1, 5]));
console.log(zeroMax([0, 2, 0]));
console.log(zeroMax([1]));
console.log(zeroMax([0]));
console.log(zeroMax([]));
console.log(zeroMax([7, 0, 4, 3, 0, 2]));
console.log(zeroMax([7, 0, 4, 3, 0, 1]));
console.log(zeroMax([7, 0, 4, 3, 0, 0]));
console.log(zeroMax([7, 0, 4, 3, 0, 7]));
