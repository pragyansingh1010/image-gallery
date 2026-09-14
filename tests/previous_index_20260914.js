function previousIndex(index, length) {
  return length === 0 ? 0 : (index - 1 + length) % length;
}

console.assert(previousIndex(2, 3) === 1);
console.assert(previousIndex(0, 3) === 2);
console.assert(previousIndex(0, 0) === 0);
console.log('Previous gallery navigation passed');
