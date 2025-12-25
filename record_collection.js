const recordCollection = {
  2548: {
    albumTitle: 'Slippery When Wet',
    artist: 'Bon Jovi',
    tracks: ['Let It Rock', 'You Give Love a Bad Name']
  },
  2468: {
    albumTitle: '1999',
    artist: 'Prince',
    tracks: ['1999', 'Little Red Corvette']
  },
  1245: {
    artist: 'Robert Palmer',
    tracks: []
  },
  5439: {
    albumTitle: 'ABBA Gold'
  }
};


function updateRecords(records, id, prop, value) {
  // Deleting property
  if (value === '') {
    delete records[id][prop];
  }
  // Adding a new property with a value
  else if (prop !== 'tracks' && value !== '') {
    records[id][prop] = value;
  }
  // Adding property 'tracks' and its value
  else if (prop === 'tracks' && value !== '' && !records[id].hasOwnProperty('tracks')) {
    const tracks = [];
    tracks.push(value);

    records[id][prop] = tracks;
  }
  // Addinga new value to property 'tracks'
  else if (prop === 'tracks' && value !== '') {
    records[id][prop].push(value);
  }

  return records;
}

updateRecords(recordCollection, 5439, "tracks", "Take a Chance on Me");

console.log(recordCollection);