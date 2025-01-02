/**Given 2 strings, a and b, return a string of the form short+long+short, with the shorter string on the outside and the longer string on the inside. The strings will not be the same length, but they may be empty (length 0).

Examples

comboString('Hello', 'hi') → hiHellohi
comboString('Hi', 'Hello') → HiHelloHi
comboString('aaa', 'b') → baaab */

function comboString(a, b) {
  const aSize = a.length;
  const bSize = b.length;

  if (aSize < bSize) return a + b + a;
  else return b + a + b;
}

console.log(comboString("Hello", "hi"));
console.log(comboString("Hi", "Hello"));
console.log(comboString("aaa", "b"));
