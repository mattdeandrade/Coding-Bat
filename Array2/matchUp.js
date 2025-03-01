/**Given arrays nums1 and nums2 of the same length, for every element in nums1, consider the corresponding element in nums2 (at the same index). Return the count of the number of times that the two elements differ by 2 or less, but are not equal. */

function matchUp(a, b) {
  let count = 0;
  for (let i = 0; i < a.length; i++) {
    if (Math.abs(a[i] - b[i]) > 0 && Math.abs(a[i] - b[i]) <= 2) count++;
  }
  return count;
}
