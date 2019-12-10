const Input = require('../src/input');

describe('Input', () => {
  describe('#ParseInput', () => {
    test('Data from input file parsed correctly', () => {
      const data = ['5 5', '1 2', '1 0', '2 2', 'NNESEESWNWW'];
      const result = Input.parseInput(data);
      expect(result.roomDimensions).toEqual({ x: 5, y: 5 });
      expect(result.initialPosition).toEqual({ x: 1, y: 2 });
      expect(result.dirtPatchMap).toEqual([
        { x: 1, y: 0 },
        { x: 2, y: 2 },
      ]);
      expect(result.instructions).toEqual('NNESEESWNWW');
    });
  });
});
