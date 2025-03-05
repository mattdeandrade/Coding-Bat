/** Given an array of ints length 3, return an array with the elements "rotated left" so {1, 2, 3} yields {2, 3, 1}.*/

function rotateLeft3(nums){
    const newNums=[];
    for (let i=0; i<3; i++)
      newNums[i]=nums[(i+1)%3];
    return newNums;
  }

  console.log(rotateLeft3([1, 2, 3]));
  console.log(rotateLeft3([5, 11, 9]));
  console.log(rotateLeft3([7, 0, 0]));
  console.log(rotateLeft3([1, 2, 1]));
  console.log(rotateLeft3([0, 0, 1]));
