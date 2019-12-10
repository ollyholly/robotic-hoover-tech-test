const Output = require('../src/output');

describe('Output', () => {
  describe('#writeOutput', () => {});

  describe('#ParseOutput', () => {
    test('Data parsed correctly for an output', () => {
      const data = {
        finalPosition: { x: 1, y: 3 },
        dirtPatchCleaned: 1,
      };
      expect(Output.parseOutput(data)).toEqual('1 3\n1');
    });
  });
});
