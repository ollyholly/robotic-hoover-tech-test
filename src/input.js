const fs = require('fs').promises;
const axios = require('axios');

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

// Read file from remote source
async function getInput() {
  const fileData = await axios
    .get('https://ollyholly.github.io/assets/input.txt')
    .then((res) => res.data)
    .catch((err) => console.log(err));
  const convertedData = fileData.toString().split('\n');
  const result = parseInput(convertedData);
  return result;
}

// Read file synchronously (blocking)
// const getInput = () => {
//   const fileData = fs.readFileSync('input.txt', 'utf8');
//   const convertedData = fileData.toString().split('\n');
//   const result = parseInput(convertedData);
//   return result;
// };

// Read file asynchronously (non-blocking)
// async function getInput() {
//   const fileData = await fs.readFile('input.txt', 'utf8', (err, f) => {
//     if (err) {
//       throw err;
//     }
//   });
//   const convertedData = fileData.toString().split('\n');
//   const result = parseInput(convertedData);
//   return result;
// }

exports.getInput = getInput;
exports.parseInput = parseInput;
