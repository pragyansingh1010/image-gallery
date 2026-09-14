function canNavigate(images) {
  return Array.isArray(images) && images.length > 0;
}

console.assert(canNavigate(['a.jpg']));
console.assert(canNavigate(['a.jpg', 'b.jpg']));
console.assert(!canNavigate([]));
console.assert(!canNavigate(null));
console.log('Empty gallery rules passed');
