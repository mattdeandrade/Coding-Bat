/**For each multiple of 10 in the given array, change all the values following it to be that multiple of 10, until encountering another multiple of 10. So {2, 10, 3, 4, 20, 5} yields {2, 10, 10, 10, 20, 20}. */

function tenRun(nums) {
  let multByTen = false;
  const newArray = [];
  let lastMultiple = 0;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] % 10 === 0) {
      multByTen = true;
      lastMultiple = nums[i];
    }
    if (multByTen && nums[i] % 10 !== 0) newArray.push(lastMultiple);
    else newArray.push(nums[i]);
  }
  return newArray;
}

console.log(tenRun([2, 10, 3, 4, 20, 5]));
console.log(tenRun([10, 1, 20, 2]));
console.log(tenRun([10, 1, 9, 20]));
console.log(tenRun([1, 2, 50, 1]));
console.log(tenRun([1, 20, 50, 1]));
console.log(tenRun([10, 10]));
console.log(tenRun([10, 2]));
console.log(tenRun([0, 2]));
console.log(tenRun([1, 2]));
console.log(tenRun([1]));
console.log(tenRun([]));
