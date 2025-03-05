/**Start with 2 int arrays, a and b, each length 2. Consider the sum of the values in each array. Return the array which has the largest sum. In event of a tie, return a. */

function biggerTwo(a, b){
    let sumA=0;
    let sumB=0;
    
    for (let i=0; i<2; i++){
    sumA=sumA+a[i];
    sumB=sumB+b[i];}
    
    if (sumA>=sumB) return a;
    if (sumA<sumB) return b;
    
  }
  