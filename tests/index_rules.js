function normalizeIndex(index, size) {
  if (size <= 0) return -1;
  return Math.max(0, Math.min(index, size - 1));
}

console.assert(normalizeIndex(0, 5) === 0);
console.assert(normalizeIndex(9, 5) === 4);
console.assert(normalizeIndex(-2, 5) === 0);
console.assert(normalizeIndex(0, 0) === -1);
console.log('Gallery index rules passed');
