/** Consider the leftmost and righmost appearances of some value in an array. We'll say that the "span" is the number of elements between the two inclusive. A single value has a span of 1. Returns the largest span found in the given array. (Efficiency is not a priority.)*/

function maxSpan(nums) {
  if (nums.length === 0) return 0;
  const distances = [];
  const size = nums.length;
  for (let i = 0; i < size; i++) {
    let count = 0;
    for (let j = i + 1; j < size; j++) {
      if (nums[i] === nums[j] && j - i > count) count = j - i;
    } //j
    distances.push(count);
  } //i
  let max = 0;
  for (let i = 0; i < distances.length; i++) {
    max = Math.max(max, distances[i]);
  }
  return max + 1;
}

console.log(maxSpan([1, 2, 1, 1, 3]));
console.log(maxSpan([1, 4, 2, 1, 4, 1, 4]));
console.log(maxSpan([1, 4, 2, 1, 4, 4, 4]));
console.log(maxSpan([3, 3, 3]));
console.log(maxSpan([3, 9, 3]));
console.log(maxSpan([3, 9, 9]));
console.log(maxSpan([3, 9]));
console.log(maxSpan([3, 3]));
console.log(maxSpan([]));
console.log(maxSpan([1]));
