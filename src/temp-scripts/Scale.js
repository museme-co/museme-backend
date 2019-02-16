const data = require('./Data');
const fb = require('./FretBoard');


// Set the ROOT of the scale
function setScaleRoot(root, scale) {
  scale.forEach((val, key) => {
    scale[key] = (val + root + 12) % 12;
  });
  return scale;
}


function mapFretBoard(root, scale) {
  let fretBoard = fb.fretBoard(data.GUITAR, 12)
  scale = setScaleRoot(root, scale);
  fretBoard = fretBoard.map((string) => {
    return string.map((item) => {
      return (scale.includes(item)) ? item:-1;
    });
  });
  return fretBoard;
}

console.log(mapFretBoard(7, data.TRIADS.min));
console.log(mapFretBoard(7, data.ARPEGGIOS.min7));