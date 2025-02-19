/** The squirrels in Palo Alto spend most of the day playing. In particular, they play if the temperature is between 60 and 90 (inclusive). Unless it is summer, then the upper limit is 100 instead of 90. Given an int temperature and a boolean isSummer, return true if the squirrels play and false otherwise.*/

function squirrelPlay(temp, isSummer) {
  if (isSummer) {
    if (temp >= 60 && temp <= 100) return true;
    else return false;
  }
  if (!isSummer) {
    if (temp >= 60 && temp <= 90) return true;
    else return false;
  }
}

console.log(squirrelPlay(70, false));
console.log(squirrelPlay(95, false));
console.log(squirrelPlay(95, true));
console.log(squirrelPlay(90, false));
console.log(squirrelPlay(90, true));
console.log(squirrelPlay(50, false));
console.log(squirrelPlay(50, true));
console.log(squirrelPlay(100, false));
console.log(squirrelPlay(100, true));
console.log(squirrelPlay(105, true));
console.log(squirrelPlay(59, false));
console.log(squirrelPlay(59, true));
console.log(squirrelPlay(60, false));
