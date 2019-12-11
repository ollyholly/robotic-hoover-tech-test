/* eslint-disable no-console */
const Printer = require('../src/printer');

describe('Printer', () => {
  beforeEach(() => {
    global.console.log = jest.fn();
  });

  describe('#PrintGreeting', () => {
    test('Hoover should say hello', () => {
      Printer.printGreeting();
      expect(console.log.mock.calls[0][0]).toBe('\nBeep-beep!\n');
    });
  });

  describe('#PrintDivider', () => {
    test('Should print divider', () => {
      Printer.printDivider();
      expect(console.log.mock.calls[0][0]).toBe('––––––––––––––––');
    });
  });

  describe('#PrintInput', () => {
    test('Should print input data', () => {
      const inputData = {
        initialPosition: { x: 0, y: 0 },
        roomDimensions: { x: 2, y: 2 },
        dirtPatchMap: [
          { x: 1, y: 0 },
          { x: 1, y: 1 },
        ],
        instructions: 'EEN',
      };
      Printer.printInput(inputData);
      expect(console.log.mock.calls[0][0]).toBe('Input received.\n');
      expect(console.log.mock.calls[1][0]).toBe('INPUT DATA');
      expect(console.log.mock.calls[2][0]).toBe('––––––––––––––––');
      expect(console.log.mock.calls[4][0]).toBe('––––––––––––––––');
      expect(console.log.mock.calls[5][0]).toBe(
        '\n\nInitialising cleaning sequence...\n',
      );
    });
  });
  describe('#PrintReport', () => {
    test('Should print report data', () => {
      const reportData = {
        finalPosition: { x: 1, y: 3 },
        dirtPatchCleaned: 1,
      };
      Printer.printReport(reportData);
      expect(console.log.mock.calls[0][0]).toBe('CLEANING REPORT');
      expect(console.log.mock.calls[1][0]).toBe('––––––––––––––––');
      expect(console.log.mock.calls[3][0]).toBe('––––––––––––––––');
    });
  });
});
