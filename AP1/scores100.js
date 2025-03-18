/**Given an array of scores, return true if there are scores of 100 next to each other in the array. The array length will be at least 2. */

function scores100(scores) {
  const size = scores.length;
  for (let i = 0; i < size - 1; i++)
    if (scores[i] === 100 && scores[i + 1] === 100) return true;
  return false;
}

console.log(scores100([1, 100, 100]));
console.log(scores100([1, 100, 99, 100]));
console.log(scores100([100, 1, 100, 100]));
console.log(scores100([100, 1, 100, 1]));
console.log(scores100([1, 2, 3, 4, 5]));
console.log(scores100([1, 2, 100, 4, 5]));
