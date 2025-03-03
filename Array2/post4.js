/** Given a non-empty array of ints, return a new array containing the elements from the original array that come after the last 4 in the original array. The original array will contain at least one 4. Note that it is valid in java to create an array of length 0.*/

function post4(nums) {
  const newArray = [];
  let last4 = 0;
  for (let i = 0; i < nums.length; i++) if (nums[i] === 4) last4 = i;

  for (let i = last4 + 1; i < nums.length; i++) newArray.push(nums[i]);
  return newArray;
}

console.log(post4([2, 4, 1, 2]));
console.log(post4([4, 1, 4, 2]));
console.log(post4([4, 4, 1, 2, 3]));
console.log(post4([4, 2]));
console.log(post4([4, 4, 3]));
console.log(post4([4, 4]));
console.log(post4([4]));
console.log(post4([2, 4, 1, 4, 3, 2]));
console.log(post4([4, 1, 4, 2, 2, 2]));
console.log(post4([3, 4, 3, 2]));
