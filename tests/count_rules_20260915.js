function validCount(count) {
  return Number.isInteger(count) && count >= 0;
}

console.assert(validCount(0));
console.assert(validCount(5));
console.assert(!validCount(-1));
