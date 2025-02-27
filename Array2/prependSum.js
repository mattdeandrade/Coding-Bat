/**Return a modified version of the input array (nums), where the first two items have been removed and one item – the sum of those two items - is added to the start of the array. */
function prependSum(nums) {
  const newArray = [];
  newArray.push(nums[0] + nums[1]);
  for (let i = 2; i < nums.length; i++) newArray.push(nums[i]);
  return newArray;
}

console.log(prependSum([1, 2, 4, 4]));
console.log(prependSum([3, 3, 0]));
console.log(prependSum([1, 1, 1, 1, 1]));
console.log(prependSum([5, 7]));
console.log(prependSum([0, 0, 0, 0]));
console.log(prependSum([12, 13, 19, 20]));
console.log(prependSum([-2, 2, -2, 2]));
console.log(prependSum([5, 4, 3, 2, 1, 0]));
