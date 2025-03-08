/** Given n>=0, create an array with the pattern {1, 1, 2, 1, 2, 3, ... 1, 2, 3 .. n} (spaces added to show the grouping). Note that the length of the array will be 1 + 2 + 3 ... + n, which is known to sum to exactly n*(n + 1)/2.*/

function seriesUp(n) {
  let index = 1;
  const newArray = [];

  while (index <= n) {
    for (let j = 1; j <= index; j++) newArray.push(j);
    index++;
  }
  return newArray;
}

console.log(seriesUp(3));
console.log(seriesUp(4));
console.log(seriesUp(2));
console.log(seriesUp(1));
console.log(seriesUp(0));
