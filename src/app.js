const Hoover = require('../src/hoover');
const Output = require('../src/output');
const Input = require('../src/input');

const cleanUp = () => {
  const inputData = Input.getInput();
  console.log('app input data: ', inputData);
  const hoover = new Hoover(inputData);

  hoover.followInstructions();
  const report = hoover.getReport();

  Output.writeOutput(report);
};

cleanUp();

exports.cleanUp = cleanUp;
