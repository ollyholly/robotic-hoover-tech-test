const fs = require('fs');

// const getInput = () => {
//   fs.readFile('../public/input.txt', (err, f) => {
//     const data = f.toString().split('\n');
//     return data;
//   });
// };
// const getInput = async (error, result) => {};
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

// const getOutput = () => {};

// exports.getInput = getInput;
exports.parseInput = parseInput;
// exports.getOutput = getOutput;
