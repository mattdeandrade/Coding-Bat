/** Given an array of ints length 3, return the sum of all the elements.*/

function sum3(nums) {
  let sum = 0;
  for (let i = 0; i < 3; i++) sum = sum + nums[i];
  return sum;
}
