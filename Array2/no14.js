/**Given an array of ints, return true if it contains no 1's or it contains no 4's.

 */

function no14(nums) {
  let oneCount = false;
  let fourCount = false;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 1) oneCount = true;
    if (nums[i] === 4) fourCount = true;
  }
  if (oneCount && fourCount) return false;
  return true;
}

console.log(no14([1, 2, 3]));
console.log(no14([1, 2, 3, 4]));
console.log(no14([2, 3, 4]));
console.log(no14([1, 1, 4, 4]));
console.log(no14([2, 2, 4, 4]));
console.log(no14([2, 3, 4, 1]));
console.log(no14([2, 1, 1]));
console.log(no14([1, 4]));
console.log(no14([2]));
console.log(no14([2, 1]));
console.log(no14([1]));
console.log(no14([4]));
console.log(no14([]));
console.log(no14([1, 1, 1, 1]));
console.log(no14([9, 4, 4, 1]));
console.log(no14([4, 2, 3, 1]));
console.log(no14([4, 2, 3, 5]));
console.log(no14([4, 4, 2]));
console.log(no14([1, 4, 4]));
