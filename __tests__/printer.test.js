/* eslint-disable no-console */
const Printer = require('../src/printer');

describe('Printer', () => {
  beforeEach(() => {
    // mockTransactionHistory = [
    //   {
    //     date: "18/11/2019",
    //     credit: 100,
    //     debit: 0,
    //     balance: 800
    //   }
    // ];
    global.console.log = jest.fn();
  });

  describe('#PrintGreeting', () => {
    test('Hoover says hello', () => {
      Printer.printGreeting();
      expect(console.log.mock.calls[0][0]).toBe('\nBeep-beep!\n');
    });
  });
});
