const fs = require('fs');
// const https = require('https');
// const axios = require('axios');

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

// const getInput = () => {
//   const fileData = async () => {
//     const url = 'https://ollyholly.github.io/assets/input.txt';
//     try {
//       const res = await axios.get(url);
//       const { data } = res;
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.log(error);
//     }
//   };
//   console.log(fileData);
//   const convertedData = fileData.toString().split('\n');
//   const result = parseInput(convertedData);
//   return result;
// };

// https
//   .get('https://ollyholly.github.io/assets/input.txt')
//   .on('response', (response) => {
//     let body = '';
//     let i = 0;
//     response.on('data', (chunk) => {
//       i++;
//       body += chunk;
//       console.log('BODY Part: ', i);
//     });
//     response.on('end', () => {
//       console.log(body);
//       console.log('Finished');
//     });
//   });

const getInput = () => {
  const fileData = fs.readFileSync('input.txt', 'utf8', (err, f) => {
    if (err) {
      throw err;
    }
  });
  const convertedData = fileData.toString().split('\n');
  const result = parseInput(convertedData);
  return result;
};

exports.getInput = getInput;
exports.parseInput = parseInput;
