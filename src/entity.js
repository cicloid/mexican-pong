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

  intersect() {
    return this.y + this.height > other.y &&
      this.y               < other.y + other.height &&
      this.x + this.width  > other.x &&
      this.x               < other.x + other.width
  }

}
