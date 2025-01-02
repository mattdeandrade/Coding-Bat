/**Given a string, return a string made of the chars at indexes 0,1, 4,5, 8,9 ... so "kittens" yields "kien".

Examples

altPairs('kitten') → kien
altPairs('Chocolate') → Chole
altPairs('CodingHorror') → Congrr */

function altPairs(str) {
  let splitStr = str.split("");
  let newStr = "";
  for (let i = 0; i < splitStr.length; i++) {
    if (i % 4 === 0 || i % 4 === 1) {
      newStr = newStr + splitStr[i];
    }
  }
  return newStr;
}

console.log(altPairs("kitten"));
console.log(altPairs("Chocolate"));
console.log(altPairs("CodingHorror"));
