const Hoover = require('./src/hoover');
const Output = require('./src/output');
const Input = require('./src/input');
const Printer = require('./src/printer');

const cleanUp = async () => {
  Printer.printGreeting();

  const inputData = await Input.getInput();
  Printer.printInput(inputData);

  const hoover = new Hoover(inputData);
  hoover.followInstructions();

  const report = hoover.getReport();
  Printer.printReport(report);

  Output.writeOutput(report);
};

cleanUp();

exports.cleanUp = cleanUp;
