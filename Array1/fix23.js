/**Given an int array length 3, if there is a 2 in the array immediately followed by a 3, set the 3 element to 0. Return the changed array. */

function fix23(nums) {
  const newArray = [];
  for (let i = 0; i < 3; i++) newArray.push(nums[i]);
  for (let i = 0; i < 3; i++) {
    if (nums[i] === 2 && nums[i + 1] === 3) {
      newArray[i] = 2;
      newArray[i + 1] = 0;
    }
  }
  return newArray;
}

console.log(fix23([1, 2, 3]));
console.log(fix23([2, 3, 5]));
console.log(fix23([1, 2, 1]));
console.log(fix23([3, 2, 1]));
console.log(fix23([2, 2, 3]));
console.log(fix23([2, 3, 3]));
