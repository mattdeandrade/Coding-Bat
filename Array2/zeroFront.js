/** Return an array that contains the exact same numbers as the given array, but rearranged so that all the zeros are grouped at the start of the array. The order of the non-zero numbers does not matter. So {1, 0, 0, 1} becomes {0 ,0, 1, 1}. You may modify and return the given array or make a new array.*/

function zeroFront(nums) {
  const newArray = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) newArray.unshift(0);
    else newArray.push(nums[i]);
  }
  return newArray;
}

console.log(zeroFront([1, 0, 0, 1]));
console.log(zeroFront([0, 1, 1, 0, 1]));
console.log(zeroFront([1, 0]));
console.log(zeroFront([0, 1]));
console.log(zeroFront([1, 1, 1, 0]));
console.log(zeroFront([2, 2, 2, 2]));
console.log(zeroFront([0, 0, 1, 0]));
console.log(zeroFront([-1, 0, 0, -1, 0]));
console.log(zeroFront([0, -3, 0, -3]));
console.log(zeroFront([]));
console.log(zeroFront([9, 9, 0, 9, 0, 9]));
