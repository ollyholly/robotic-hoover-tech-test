const fs = require('fs');

const parseInput = (data) => {
  const roomD = data.shift().split(' ');
  const initialP = data.shift().split(' ');
  const instructions = data.pop();
  const dirtPatchMap = data.map((patch) => {
    const coordinates = patch.split(' ');
    return { x: parseInt(coordinates[0], 10), y: parseInt(coordinates[1], 10) };
  });
  const result = {
    roomDimensions: { x: parseInt(roomD[0], 10), y: parseInt(roomD[1], 10) },
    initialPosition: {
      x: parseInt(initialP[0], 10),
      y: parseInt(initialP[1], 10),
    },
    instructions,
    dirtPatchMap,
  };
  return result;
};

const getInput = () => {
  fs.readFile('../public/input.txt', (err, f) => {
    if (err) {
      throw err;
    }
    const data = f.toString().split('\n');
    console.log(data);
    const result = parseInput(data);
    console.log(result);
    return result;
  });
};

exports.getInput = getInput;
exports.parseInput = parseInput;
