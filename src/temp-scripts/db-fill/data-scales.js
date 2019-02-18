var _ = require('lodash')

var scalesData = [
  {
    name: "Chromatic",
    type: "Scale",
    intervals: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]
  },
  {
    name: "minor Pentatonic",
    type: "Scale",
    intervals: [0, 3, 5, 7, 10]
  },
  {
    name: "Major",
    type: "Scale",
    intervals: [0, 2, 4, 5, 7, 9, 11]
  },
  {
    name: "Natural minor",
    type: "Scale",
    intervals: [0, 2, 3, 5, 7, 8, 10]
  },
  {
    name: "minor Pentatonic Blues",
    type: "Scale",
    intervals: [0, 3, 5, 6, 7, 10]
  },
  {
    name: "Harmonic minor",
    type: "Scale",
    intervals: [0, 2, 3, 5, 7, 8, 11]
  },
  {
    name: "Melodic minor",
    type: "Scale",
    intervals: [0, 2, 3, 5, 7, 9, 11]
  },
  {
    name: "minor",
    type: "Triad",
    intervals: [0, 3, 7]
  },
  {
    name: "Major",
    type: "Triad",
    intervals: [0, 4, 7]
  },
  {
    name: "diminished",
    type: "Triad",
    intervals: [0, 3, 6]
  },
  {
    name: "augmented",
    type: "Triad",
    intervals: [0, 4, 8]
  },
  {
    name: "min7",
    type: "Arpeggio",
    intervals: [0, 3, 7, 10]
  },
  {
    name: "maj7",
    type: "Arpeggio",
    intervals: [0, 4, 7, 11]
  },
  {
    name: "7",
    type: "Arpeggio",
    intervals: [0, 4, 7, 10]
  },
  {
    name: "dim7",
    type: "Arpeggio",
    intervals: [0, 3, 7, 10]
  }
]

// Is a slug necessary? we could use ObjectId class ...
function addSlugField(scalesArray) {
  return scalesArray.map((scale) => {
    let slug = `${scale.type}-${scale.name}`;
    slug = _.replace(slug, ' ', '-');
    slug = _.toLower(slug);
    scale.slug = slug;
    return scale
  });
};

exports.scalesData = addSlugField(scalesData)