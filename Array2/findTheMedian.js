/**Write a method that returns the median value of an array. The input array will never be empty. If the array is odd in length, the median is the value in the centre of the array. If the array is even, the median should be the average of the two middle values. Hint: You will need to ensure the input array is sorted - there is a sort() array method you can use for this step. */

function findTheMedian(nums) {
  const newArray = [];
  const size = nums.length;
  if (size === 1) return nums[0];
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - 1; j++) {
      const minn = Math.min(nums[j], nums[j + 1]);
      const maxx = Math.max(nums[j], nums[j + 1]);
      nums[j] = minn;
      nums[j + 1] = maxx;
    } //j
  } //i

  if (size % 2 === 0) return (nums[size / 2 - 1] + nums[size / 2]) / 2;
  else return nums[(size - 1) / 2];
  //return nums; you created the sorting algorithm above by yourself! uncomment this to show that you have successfully sorted the given arrays!
  //also, your solutions are correct for finding the median. CodingBat had wrong answers on the even arrays and the last array (odd).
}

console.log(findTheMedian([4, 9, 9, 2, 1, 5]));
console.log(findTheMedian([1, 5, 3, 1, 5]));
console.log(findTheMedian([10, 12, 15]));
console.log(findTheMedian([5]));
console.log(findTheMedian([11, 9, 0, 1]));
console.log(findTheMedian([-1, 11, -2, 10, -3, 15]));
console.log(findTheMedian([2, 10, 15, 13]));
console.log(findTheMedian([2, 5, -12]));
