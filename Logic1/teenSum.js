/** Given 2 ints, a and b, return their sum. However, "teen" values in the range 13..19 inclusive, are extra lucky. So if either value is a teen, just return 19.*/

function teenSum(a, b){
    if ((a<=19 && a>=13) || (b<=19 && b>=13)) return 19; 
    if ((a+b)<=19 && (a+b)>=13) return 19;
    return a+b;
  }

  console.log(teenSum(3, 4));
  console.log(teenSum(10, 13));
  console.log(teenSum(13, 2));
  console.log(teenSum(3, 19));
  console.log(teenSum(13, 13));
  console.log(teenSum(10, 10));
  console.log(teenSum(6, 14));