/**Given an array of ints, return true if the number of 1's is greater than the number of 4's */

function more14(nums){
    let oneCount=0;
    let fourCount=0;
    for (let i=0; i<nums.length;i++){
    if (nums[i]===1) oneCount++;
    if (nums[i]===4) fourCount++;}
    if (oneCount>fourCount) return true;
    else return false;
  }