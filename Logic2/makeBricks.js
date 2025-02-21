/** We want to make a row of bricks that is goal inches long. We have a number of small bricks (1 inch each) and big bricks (5 inches each). Return true if it is possible to make the goal by choosing from the given bricks. This is a little harder than it looks and can be done without any loops. See also: Introduction to MakeBricks*/

function makeBricks(small, big, goal) {
  for (let i = 0; i <= small; i++)
    for (let j = 0; j <= big; j++) if (i + j * 5 === goal) return true;
  return false;
}

console.log(makeBricks(3, 1, 8));
console.log(makeBricks(3, 1, 9));
console.log(makeBricks(3, 2, 10));
console.log(makeBricks(3, 2, 8));
console.log(makeBricks(3, 2, 9));
console.log(makeBricks(6, 1, 11));
console.log(makeBricks(6, 0, 11));
console.log(makeBricks(1, 4, 11));
console.log(makeBricks(0, 3, 10));
console.log(makeBricks(1, 4, 12));
console.log(makeBricks(3, 1, 7));
console.log(makeBricks(1, 1, 7));
console.log(makeBricks(7, 1, 11));
