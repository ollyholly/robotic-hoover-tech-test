const Hoover = require('../src/hoover');

describe('Hoover', () => {
  let hoover;

  // describe('Starting conditions', () => {
  //   hoover = new Hoover({
  //     xPosition: 1,
  //     yPosition: 2,
  // xRoomDimension: 5,
  // yRoomDimension: 5
  //   });

  // });

  describe('#Move', () => {
    beforeEach(() => {
      hoover = new Hoover({
        xPosition: 0,
        yPosition: 0,
        xRoomDimension: 2,
        yRoomDimension: 2,
      });
    });

    test('A hoover can move North and its yPosition increases by 1', () => {
      hoover.move('N');
      expect(hoover.yPosition).toEqual(1);
    });

    test('A hoover can move South and its yPosition decreases by 1', () => {
      hoover.move('N');
      hoover.move('S');
      expect(hoover.yPosition).toEqual(0);
    });

    test('A hoover can move East and its xPosition increases by 1', () => {
      hoover.move('E');
      expect(hoover.xPosition).toEqual(1);
    });

    test('A hoover can move West and its xPosition decreases by 1', () => {
      hoover.move('E');
      hoover.move('W');
      expect(hoover.xPosition).toEqual(0);
    });

    test('If hoover moves West towards the wall, its position doesnt change', () => {
      hoover.move('W');
      expect(hoover.xPosition).toEqual(0);
    });

    test('If hoover moves East towards the wall, its position doesnt change', () => {
      hoover.move('E');
      hoover.move('E');
      expect(hoover.xPosition).toEqual(1);
    });

    test('If hoover moves South towards the wall, its position doesnt change', () => {
      hoover.move('S');
      expect(hoover.yPosition).toEqual(0);
    });

    test('If hoover moves North towards the wall, its position doesnt change', () => {
      hoover.move('N');
      hoover.move('N');
      expect(hoover.yPosition).toEqual(1);
    });
  });
});
