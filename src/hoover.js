class Hoover {
  constructor(args) {
    this.xPosition = args.xPosition;
    this.yPosition = args.yPosition;
    this.xRoomDimension = args.xRoomDimension;
    this.yRoomDimension = args.yRoomDimension;
    this.dirtPatchMap = args.dirtPatchMap;
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
    this.dirtPatchMap = this.dirtPatchMap.filter(
      (patch) => patch.x !== this.xPosition && patch.y !== this.yPosition,
    );
    console.log(this.dirtPatchMap);
    this.dirtPatchCleaned += 1;
  }
}

module.exports = Hoover;
