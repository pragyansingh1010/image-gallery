function nextIndex(index, length) {
  return length === 0 ? 0 : (index + 1) % length;
}

console.assert(nextIndex(0, 3) === 1);
console.assert(nextIndex(2, 3) === 0);
console.assert(nextIndex(0, 0) === 0);
console.log('Gallery navigation bounds passed');
