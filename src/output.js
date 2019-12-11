const fs = require('fs');

const parseOutput = (data) => {
  const result = `${data.finalPosition.x} ${data.finalPosition.y}\n${data.dirtPatchCleaned}`;
  return result;
};

const writeOutput = (data) => {
  const result = parseOutput(data);

  fs.writeFile('output.txt', result, (err) => {
    if (err) {
      throw err;
    }
    console.log(result);
    console.log('Cleaning report saved.');
  });
};

exports.writeOutput = writeOutput;
exports.parseOutput = parseOutput;
