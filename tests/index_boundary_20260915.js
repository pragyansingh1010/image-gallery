function nextIndex(index, length) {
  return length ? (index + 1) % length : 0;
}

console.assert(nextIndex(0, 3) === 1);
console.assert(nextIndex(2, 3) === 0);
