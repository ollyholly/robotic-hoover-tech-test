class Hoover {
  constructor(args) {
    this.xPosition = args.xPosition;
    this.yPosition = args.yPosition;
    this.xRoomDimension = args.xRoomDimension;
    this.yRoomDimension = args.yRoomDimension;
    this.dirtPatchMap = args.dirtPatchMap;
    this.instructions = args.instructions;
    this.dirtPatchCleaned = 0;
  }

  move(direction) {
    switch (direction) {
      case 'N':
        if (this.yPosition < this.yRoomDimension - 1) this.yPosition += 1;
        break;
      case 'S':
        if (this.yPosition > 0) this.yPosition -= 1;
        break;
      case 'E':
        if (this.xPosition < this.xRoomDimension - 1) this.xPosition += 1;
        break;
      case 'W':
        if (this.xPosition > 0) this.xPosition -= 1;
        break;
      default:
        break;
    }
  }

  clean() {
    this.dirtPatchMap.map((patch) => {
      if (patch.x === this.xPosition && patch.y === this.yPosition) {
        this.dirtPatchMap = this.dirtPatchMap.filter(
          (item) => item.x === this.xPosition && item.y === this.yPosition,
        );
        this.dirtPatchCleaned += 1;
      }
    });
  }

  drive() {
    const string = this.instructions;
    for (let i = 0; i < string.length; i++) {
      const direction = string.charAt(i);
      this.move(direction);
      this.clean();
    }
  }

  getReport() {
    return {
      dirtPatchCleaned: this.dirtPatchCleaned,
      finalPosition: {
        x: this.xPosition,
        y: this.yPosition,
      },
    };
  }
}

module.exports = Hoover;
