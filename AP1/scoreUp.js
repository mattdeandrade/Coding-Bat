/** The "key" array is an array containing the correct answers to an exam, like {"a", "a", "b", "b"}. the "answers" array contains a student's answers, with "?" representing a question left blank. The two arrays are not empty and are the same length. Return the score for this array of answers, giving +4 for each correct answer, -1 for each incorrect answer, and +0 for each blank answer.*/

function scoreUp(key, answers) {
  let score = 0;
  for (let i = 0; i < answers.length; i++) {
    if (answers[i] === key[i]) score = score + 4;
    else if (answers[i] === "?") score = score;
    else if (answers[i] !== key[i]) score--;
  }
  return score;
}

console.log(scoreUp(["a", "a", "b", "b"], ["a", "c", "b", "c"]));
console.log(scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "c"]));
console.log(scoreUp(["a", "a", "b", "b"], ["a", "a", "b", "b"]));
console.log(scoreUp(["a", "a", "b", "b"], ["?", "c", "b", "?"]));
console.log(scoreUp(["a", "a", "b", "b"], ["?", "c", "?", "?"]));
console.log(scoreUp(["a", "a", "b", "b"], ["c", "?", "b", "b"]));
console.log(scoreUp(["a", "a", "b", "b"], ["c", "?", "b", "?"]));
console.log(scoreUp(["a", "b", "c"], ["a", "c", "b"]));
console.log(
  scoreUp(["a", "a", "b", "b", "c", "c"], ["a", "c", "a", "c", "a", "c"])
);
console.log(
  scoreUp(["a", "a", "b", "b", "c", "c"], ["a", "c", "?", "?", "a", "c"])
);
console.log(
  scoreUp(["a", "a", "b", "b", "c", "c"], ["a", "c", "?", "?", "c", "c"])
);
console.log(scoreUp(["a", "b", "c"], ["a", "b", "c"]));
