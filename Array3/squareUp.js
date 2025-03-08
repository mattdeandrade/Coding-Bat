/** Given n>=0, create an array length n*n with the following pattern, shown here for n=3 : {0, 0, 1, 0, 2, 1, 3, 2, 1} (spaces added to show the 3 groups).*/
function squareUp(n) {
  const newArray = [];

  for (let i = 1; i <= n; i++) {
    for (let j = n; j > 0; j--) {
      if (j > i) newArray.push(0);
      else {
        newArray.push(j);
      }
    }
  } //i
  return newArray;
}

console.log(squareUp(3));
console.log(squareUp(2));
console.log(squareUp(4));
console.log(squareUp(1));
console.log(squareUp(0));
