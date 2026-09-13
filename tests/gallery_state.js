function nextIndex(index, length) {
  return length > 0 ? (index + 1) % length : 0;
}

console.assert(nextIndex(0, 4) === 1);
console.assert(nextIndex(3, 4) === 0);
console.assert(nextIndex(0, 0) === 0);
console.log('Gallery navigation tests passed');
