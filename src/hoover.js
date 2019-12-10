class Hoover {
  constructor(args) {
    this.xPosition = args.xPosition;
    this.yPosition = args.yPosition;
    this.xRoomDimension = args.xRoomDimension;
    this.yRoomDimension = args.yRoomDimension;
  }

  move(direction) {
    switch (direction) {
      case 'N':
        this.yPosition += 1;
        break;
      case 'S':
        this.yPosition -= 1;
        break;
      case 'E':
        this.xPosition += 1;
        break;
      case 'W':
        if (this.xPosition > 0) {
          this.xPosition -= 1;
        }
        break;
      default:
        break;
    }
  }
}

module.exports = Hoover;
