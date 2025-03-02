/**Given a number n, create and return a new string array of length n, containing the strings "0", "1" "2" .. through n-1. N may be 0, in which case just return a length 0 array. Note: String(xxx) will make the String form of most types. */

function fizzArray2(n){
    const newArray=[];
    for (let i=0; i<n; i++){
    newArray.push(""+i);}
    return newArray;
  }

  console.log(fizzArray2(4));
  console.log(fizzArray2(10));
  console.log(fizzArray2(2));
  console.log(fizzArray2(1));
  console.log(fizzArray2(0));
  console.log(fizzArray2(7));
  console.log(fizzArray2(9));
  console.log(fizzArray2(11));