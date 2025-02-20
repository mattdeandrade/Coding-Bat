/**Your cell phone rings. Return true if you should answer it. Normally you answer, except in the morning you only answer if it is your mom calling. In all cases, if you are asleep, you do not answer. */

function answerCell(isMorning, isMom, isAsleep) {
  if (isAsleep) return false;
  if (isMom) return true;
  if (isMorning) return false;
  return true;
}

console.log(answerCell(false, false, false));
console.log(answerCell(false, false, true));
console.log(answerCell(true, false, false));
console.log(answerCell(true, true, false));
console.log(answerCell(false, true, false));
console.log(answerCell(true, true, true));
