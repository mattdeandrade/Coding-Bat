/**Given an array of ints, return true if one of the first 4 elements 
in the array is a 9. The array length may be less than 4. 

 Examples

arrayFront9([1,2,9,3,4]) → true
arrayFront9([1,2,3,4,9]) → false
arrayFront9([1,2,3,4,5]) → false */

function arrayFront9(nums) {
  let size = nums.length;
  let isNine = false;
  if (size >= 4) {
    for (let i = 0; i < 4; i++) if (nums[i] === 9) isNine = true;
  } else {
    for (let i = 0; i < size; i++) if (nums[i] === 9) isNine = true;
  }

  return isNine;
}

console.log(arrayFront9([1, 2, 9, 3, 4]));
console.log(arrayFront9([1, 2, 3, 4, 9]));

console.log(arrayFront9([1, 2, 3, 4, 9]));
