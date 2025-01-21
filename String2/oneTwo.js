/**Given a string, compute a new string by moving the first char to come after the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars, so "abcdef" yields "bcaefd". Ignore any group of fewer than 3 chars at the end.

Examples

oneTwo('abc') → bca
oneTwo('tca') → cat
oneTwo('tcagdo') → catdog */

function oneTwo(str){
    const size=str.length;
    let newStr="";
    for (let i=0; i<size; i++){
   if (size-i>=3 && i%3===0) 
     newStr=newStr+str.charAt(i+1)+str.charAt(i+2)+str.charAt(i);
    }
  return newStr;
  }

  console.log(oneTwo("abc"));
  console.log(oneTwo("tcagdo"));
  console.log(oneTwo("1234567890"));
  console.log(oneTwo("chocolate"));
  console.log(oneTwo("xy"));
  console.log(oneTwo("x"));
  console.log(oneTwo(""));
  console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz1234567890"));
  console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz123456789"));
  console.log(oneTwo("abcdefghijklkmnopqrstuvwxyz123456789"));