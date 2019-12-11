const printGreeting = () => {
  console.log('\nBeep-beep!\n');
};
const printDivider = () => {
  console.log('––––––––––––––––');
};

const printInput = (inputData) => {
  console.log('Input received.\n');
  console.log('INPUT DATA');
  printDivider();
  console.log(inputData);
  printDivider();
  console.log('\n\nInitialising cleaning sequence...\n');
};

const printReport = (reportData) => {
  console.log('CLEANING REPORT');
  printDivider();
  console.log(reportData);
  printDivider();
};

exports.printReport = printReport;
exports.printGreeting = printGreeting;
exports.printDivider = printDivider;
exports.printInput = printInput;
