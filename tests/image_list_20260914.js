function validImages(images) {
  return Array.isArray(images) && images.every(item => typeof item === 'string' && item.trim());
}

console.assert(validImages(['a.jpg', 'b.jpg']));
console.assert(validImages([]));
console.assert(!validImages(['a.jpg', '']));
console.assert(!validImages(null));
console.log('Image list rules passed');
