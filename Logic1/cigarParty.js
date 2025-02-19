/**
 * When squirrels get together for a party, they like to have cigars. A squirrel party is successful when the number of cigars is between 40 and 60, inclusive. Unless it is the weekend, in which case there is no upper bound on the number of cigars. Return true if the party with the given values is successful, or false otherwise.
 *
 */

function cigarParty(cigars, isWeekend) {
  if (cigars < 40) return false;
  if (cigars > 60 && !isWeekend) return false;
  else return true;
}

console.log(cigarParty(30, false));
console.log(cigarParty(50, false));
console.log(cigarParty(70, true));
console.log(cigarParty(30, true));
console.log(cigarParty(50, true));
console.log(cigarParty(60, false));
console.log(cigarParty(61, false));
console.log(cigarParty(40, false));
console.log(cigarParty(40, false));
console.log(cigarParty(40, false));
console.log(cigarParty(40, false));
