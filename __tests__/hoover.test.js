const Hoover = require('../src/hoover');

describe('Hoover', () => {
  let hoover;

  beforeEach(() => {
    hoover = new Hoover({ xPosition: 0, yPosition: 0 });
  });

  describe('#Move', () => {
    test('A hoover can move North and its yPosition increases by 1', () => {
      hoover.move('N');
      expect(hoover.yPosition).toEqual(1);
    });
  });
});
