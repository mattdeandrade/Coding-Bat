/**Given a string, return true if it is a nesting of zero or more pairs of parenthesis, like "(())" or "((()))". Suggestion: check the first and last chars, and then recur on what's inside them. */

function nestParen(str) {
  const size = str.length;
  if (size === 0) return true;
  if (size <= 2 && str === "()") return true;
  if (str.charAt(0) === "(" && str.charAt(size - 1) === ")")
    return nestParen(str.slice(1, size - 1));

  return false;
}

console.log(nestParen("(())"));
console.log(nestParen("((()))"));
console.log(nestParen("(((x))"));
console.log(nestParen("((())"));
console.log(nestParen("((()()"));
console.log(nestParen("()"));
console.log(nestParen(""));
console.log(nestParen("(yy)"));
console.log(nestParen("(((y))"));
console.log(nestParen("((y)))"));
console.log(nestParen("((()))"));
console.log(nestParen("(())))"));
console.log(nestParen("((yy())))"));
console.log(nestParen("(((())))"));
