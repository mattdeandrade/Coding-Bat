/**We'll say a number is special if it is a multiple of 11 or if it is one more than a multiple of 11. Return true if the given non-negative number is special. Use the % "mod" operator. */

function specialEleven(n){
    if (n%11===0 || n%11===1) return true;
    else return false;
  }

  console.log(specialEleven(22));
  console.log(specialEleven(23));
  console.log(specialEleven(24));
  console.log(specialEleven(21));
  console.log(specialEleven(11));
  console.log(specialEleven(12));
  console.log(specialEleven(10));
  console.log(specialEleven(9));
  console.log(specialEleven(8));
  console.log(specialEleven(0));
  console.log(specialEleven(1));
  console.log(specialEleven(2));
  console.log(specialEleven(121));
  console.log(specialEleven(122));
  console.log(specialEleven(123));