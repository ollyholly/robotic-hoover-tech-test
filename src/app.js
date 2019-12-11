const Hoover = require('../src/hoover');
const Output = require('../src/output');
const Input = require('../src/input');

const cleanUp = () => {
  console.log('\nBeep-beep!\n');
  const inputData = Input.getInput();
  console.log('Input received.\n');
  console.log('INPUT DATA');
  console.log('––––––––––––––––');
  console.log('', inputData);
  console.log('––––––––––––––––\n\n');
  console.log('Initialising cleaning sequence...\n');
  const hoover = new Hoover(inputData);

  hoover.followInstructions();
  console.log('Cleaning complete! Beep!\n');
  const report = hoover.getReport();
  console.log('CLEANING REPORT');
  console.log('––––––––––––––––');
  console.log('', report);
  console.log('––––––––––––––––');

  Output.writeOutput(report);
  console.log('Shutting down! Beep!');
};

cleanUp();

exports.cleanUp = cleanUp;
