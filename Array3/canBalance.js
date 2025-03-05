/** Given a non-empty array, return true if there is a place to split the array so that the sum of the numbers on one side is equal to the sum of the numbers on the other side.*/

function canBalance(nums) {
  const size = nums.length;
  let iSum = 0;
  let jSum = 0;

  for (let j = 0; j < size; j++) jSum = jSum + nums[j];

  for (let i = 0; i < size; i++) {
    iSum = iSum + nums[i];
    jSum = jSum - nums[i];
    if (iSum === jSum) return true;
  }

  return false;
}

console.log(canBalance([1, 1, 1, 2, 1]));
console.log(canBalance([2, 1, 1, 2, 1]));
console.log(canBalance([10, 10]));
console.log(canBalance([10, 0, 1, -1, 10]));
console.log(canBalance([1, 1, 1, 1, 4]));
console.log(canBalance([2, 1, 1, 1, 4]));
console.log(canBalance([2, 3, 4, 1, 2]));
console.log(canBalance([1, 2, 3, 1, 0, 2, 3]));
console.log(canBalance([1, 2, 3, 1, 0, 1, 3]));
console.log(canBalance([1]));
