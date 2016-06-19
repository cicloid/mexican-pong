export default class Entity {
  constructor() {
    this.x = 0;
    this.y = 0;

    this.width = 0
    this.height = 0

    this.velocityX = 0
    this.velocityY = 0
  }

  update() {
    this.x += this.velocityX;
    this.y += this.velocityY;
  }

  draw(context) {
    context.fillStyle = '#fff'
    context.fillRect(this.x, this.y, this.width, this.height)
  }

  intersect(that) {
    return this.y + this.height > that.y &&
      this.y               < that.y + that.height &&
      this.x + this.width  > that.x &&
      this.x               < that.x + that.width
  }

}
