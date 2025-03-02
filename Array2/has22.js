/**Given an array of ints, return true if the array contains a 2 next to a 2 somewhere. */

function has22(nums){
    for (let i=0; i<nums.length;i++)
      if (nums[i]===2 && nums[i+1]===2) return true;
    return false;
  }

  console.log(has22([1, 2, 2]));
  console.log(has22([1, 2, 1, 2]));
  console.log(has22([2, 1, 2]));
  console.log(has22([2, 2, 1, 2]));
  console.log(has22([1, 3, 2]));
  console.log(has22([1, 3, 2, 2]));
  console.log(has22([2, 3, 2, 2]));
  console.log(has22([4, 2, 4, 2, 2, 5]));
  console.log(has22([1, 2]));
  console.log(has22([2,2]));
  console.log(has22([2]));
  console.log(has22([]));
  console.log(has22([3,3,2,2]));
  console.log(has22([5,2,5,2]));