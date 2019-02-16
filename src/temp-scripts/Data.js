const GUITAR = [7, 2, 10, 5, 0, 7];

const DEGREES = ['I', 'II m', 'II M', 'III m', 'III M', 'IV', 'V-', 'V', 'VI m', 'VI M', 'VII m', 'VII M'];

const flatSymbol = String.fromCharCode(parseInt(0x266D));

const NOTES = [
  {sharp: 'A', flat: 'A'},
  {sharp: 'A#', flat: `B${flatSymbol}`},
  {sharp: 'B', flat: 'B'},
  {sharp: 'C', flat: 'C'},
  {sharp: 'C#', flat: `D${flatSymbol}`},
  {sharp: 'D', flat: 'D'},
  {sharp: 'D#', flat: `E${flatSymbol}`},
  {sharp: 'E', flat: 'E'},
  {sharp: 'F', flat: 'F'},
  {sharp: 'F#', flat: `G${flatSymbol}`},
  {sharp: 'G', flat: 'G'},
  {sharp: 'G#', flat: `A${flatSymbol}`}
];

const INTERVALS = [
  ['I', 'Root', 'Diminished Second'],
  ['II m', 'Minor Second', 'Augmented Root'],
  ['II M', 'Major Second', 'Diminished Third'],
  ['III m', 'Minor Third', 'Augmented Second'],
  ['III M', 'Major Third', 'Diminished Fourth'],
  ['IV', 'Perfect Fourth', 'Augmented Third'],
  ['V-', 'Diminished Fifth', 'Augmented Fourth'],
  ['V', 'Perfect Fifth', 'Diminished Sixth'],
  ['VI m', 'Minor Sixth', 'Augmented Fifth'],
  ['VI M', 'Major Sixth', 'Diminished Seventh'],
  ['VII m', 'Minor Seventh', 'Augmented Sixth'],
  ['VII M', 'Major Seventh', 'Diminished Octave']
];

const SCALES = {
  'maj' : [0, 2, 4, 5, 7, 9, 11],
  'minPenta' : [0, 3, 5, 7, 10],
  'minPentaBlues' : [0, 3, 5, 6, 7, 10],
  'minNat' : [0, 2, 3, 5, 7, 8, 10],
  'minMel' : [0, 2, 3, 5, 7, 9, 11],
  'minHar' : [0, 2, 3, 5, 7, 8, 11]
};

const TRIADS = {
  'min':[0, 3, 7],
  'maj':[0, 4, 7],
  'dim':[0, 3, 6],
  'aug':[0, 4, 8]
};

const ARPEGGIOS = {
  'min7':[0, 3, 7, 10],
  'maj7':[0, 4, 7, 11],
  '7':[0, 4, 7, 10],
  // 'dim7th':[0, 3, 7, 10],
  // 'Major-7th':[0, 4, 7, 11]
};

module.exports = {
  GUITAR,
  DEGREES,
  NOTES,
  INTERVALS,
  SCALES,
  TRIADS,
  ARPEGGIOS,
};
