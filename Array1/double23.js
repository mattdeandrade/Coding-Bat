/**Given an int array, return true if the array contains 2 twice, or 3 twice. The array will be length 0, 1, or 2. */

function double23(nums){
    let twoCount=0;
    let threeCount=0;
    for (let i=0; i<nums.length; i++){
    if (nums[i]===2) twoCount++;
    if (nums[i]===3) threeCount++;}
    if (twoCount>=2 || threeCount>=2) return true;
    return false;
  }

  console.log(double23([2,2]));
  console.log(double23([3,3]));
  console.log(double23([2,3]));
  console.log(double23([3,2]));
  console.log(double23([4,5]));
  console.log(double23([2]));
  console.log(double23([3]));
  console.log(double23([]));
  console.log(double23([3,4]));
