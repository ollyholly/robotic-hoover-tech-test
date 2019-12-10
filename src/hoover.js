class Hoover {
  constructor(args) {
    this.xPosition = args.xPosition;
    this.yPosition = args.yPosition;
  }

  move(direction) {
    this.yPosition += 1;
  }
}

module.exports = Hoover;
