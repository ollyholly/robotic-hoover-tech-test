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
    console.log('\nCleaning report saved! Beep!\n');
    console.log('Shutting down... Boop!\n');
  });
};

exports.writeOutput = writeOutput;
exports.parseOutput = parseOutput;
