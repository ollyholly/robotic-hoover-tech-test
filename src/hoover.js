class Hoover {
  constructor(args) {
    this.xPosition = args.xPosition;
    this.yPosition = args.yPosition;
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
        this.xPosition -= 1;
        break;
      default:
        break;
    }
  }
}

module.exports = Hoover;
