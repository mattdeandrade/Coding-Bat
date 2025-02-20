/**Given a string str, if the string starts with "f" return "Fizz". If the string ends with "b" return "Buzz". If both the "f" and "b" conditions are true, return "FizzBuzz". In all other cases, return the string unchanged. */

function fizzString(str) {
  if (str.charAt(0) === "f" && str.charAt(str.length - 1) === "b")
    return "FizzBuzz";
  if (str.charAt(0) === "f") return "Fizz";
  if (str.charAt(str.length - 1) === "b") return "Buzz";
  return str;
}

console.log(fizzString("fig"));
console.log(fizzString("dib"));
console.log(fizzString("fib"));
console.log(fizzString("abc"));
console.log(fizzString("fooo"));
console.log(fizzString("booo"));
console.log(fizzString("ooob"));
console.log(fizzString("fooob"));
console.log(fizzString("f"));
console.log(fizzString("b"));
console.log(fizzString("abcb"));
console.log(fizzString("Hello"));
console.log(fizzString("Hellob"));
console.log(fizzString("af"));
console.log(fizzString("bf"));
console.log(fizzString("fb"));
