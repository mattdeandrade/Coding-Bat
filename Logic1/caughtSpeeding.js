/** You are driving a little too fast, and a police officer stops you. Write code to compute the result, encoded as an int value: 0=no ticket, 1=small ticket, 2=big ticket. If speed is 60 or less, the result is 0. If speed is between 61 and 80 inclusive, the result is 1. If speed is 81 or more, the result is 2. Unless it is your birthday -- on that day, your speed can be 5 higher in all cases.*/

function caughtSpeeding(speed, isBirthday) {
  if (isBirthday) {
    if (speed > 85) return 2;
    if (speed > 65) return 1;
    else return 0;
  }
  if (!isBirthday) {
    if (speed > 80) return 2;
    if (speed > 60) return 1;
    else return 0;
  }
}

console.log(caughtSpeeding(60, false));
console.log(caughtSpeeding(65, false));
console.log(caughtSpeeding(65, true));
console.log(caughtSpeeding(80, false));
console.log(caughtSpeeding(85, false));
console.log(caughtSpeeding(85, true));
console.log(caughtSpeeding(70, false));
console.log(caughtSpeeding(75, false));
console.log(caughtSpeeding(75, true));
console.log(caughtSpeeding(40, false));
console.log(caughtSpeeding(40, true));
console.log(caughtSpeeding(90, false));
console.log(caughtSpeeding(86, true));
