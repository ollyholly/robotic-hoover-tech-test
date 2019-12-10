const Hoover = require('../src/hoover');

describe('Hoover', () => {
  let hoover;

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

  describe('#Clean', () => {
    beforeEach(() => {
      hoover = new Hoover({
        xPosition: 0,
        yPosition: 0,
        xRoomDimension: 2,
        yRoomDimension: 2,
        dirtPatchMap: [
          { x: 1, y: 0 },
          { x: 1, y: 1 },
        ],
      });
    });

    test('When hoover passes a dirt patch, it cleans it', () => {
      hoover.move('E');
      hoover.clean();
      expect(hoover.dirtPatchCleaned).toEqual(1);
      expect(hoover.dirtPatchMap).not.toContain({ x: 1, y: 0 });
    });
  });

  describe('#Drive', () => {
    beforeEach(() => {
      hoover = new Hoover({
        xPosition: 0,
        yPosition: 0,
        xRoomDimension: 2,
        yRoomDimension: 2,
        dirtPatchMap: [
          { x: 1, y: 0 },
          { x: 1, y: 1 },
        ],
        instructions: 'EEN',
      });
    });

    test('A hoover follows the instructions moving and cleaning dirt patches', () => {
      hoover.drive();
      expect(hoover.dirtPatchCleaned).toEqual(2);
      expect(hoover.dirtPatchMap).not.toContain({ x: 1, y: 0 });
      expect(hoover.dirtPatchMap).not.toContain({ x: 1, y: 1 });
      expect(hoover.xPosition).toEqual(1);
      expect(hoover.yPosition).toEqual(1);
    });
  });

  describe('#getReport', () => {
    beforeEach(() => {
      hoover = new Hoover({
        xPosition: 0,
        yPosition: 0,
        xRoomDimension: 2,
        yRoomDimension: 2,
        dirtPatchMap: [
          { x: 1, y: 0 },
          { x: 1, y: 1 },
        ],
        instructions: 'EEN',
      });
    });

    test('After following instruction return final position and number of cleaned dirt patches', () => {
      hoover.drive();
      const result = {
        dirtPatchCleaned: 2,
        finalPosition: {
          x: 1,
          y: 1,
        },
      };
      expect(hoover.getReport()).toEqual(result);
    });
  });
});
