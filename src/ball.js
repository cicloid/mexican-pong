import Entity from './entity'

export default class Ball extends Entity {
  constructor(game) {
    super();

    this.game = game;

    this.width = 20;
    this.height = 20;

    this.restart();
  }

  _beep(type="square", freq=3000) {
    if (!this.game.sound) return
    var audioCtx = new (window.AudioContext || window.webkitAudioContext)()
    let duration = 100

    let osc = audioCtx.createOscillator()
    osc.type = type
    osc.frequency.value = freq // value in hertz
    osc.connect(audioCtx.destination)
    osc.start()

    setTimeout( () => {
      osc.stop()
      audioCtx = undefined
    }, duration);

  }

  update() {
    super.update();

    // Pong on vertical canvas walls
    if (this.y < 0 || this.y + this.height > this.game.height) {
      this.velocityY *= -1
      this._beep()
    }

    // Entity collision detection
    if (this.intersect(this.game.playerOne)) {
      var pong = this.game.playerOne
      this._beep()
    } else if (this.intersect(this.game.playerTwo)) {
      var pong = this.game.playerTwo
      this._beep()
    }

    // Ping
    if (pong) {
      this.velocityX *= -1.1 // Rebound and increase speed
      this.velocityY *= 1.1

      // Transfer some of the paddle vertical velocity to the ball
      this.velocityY += pong.velocityY / 4
    }

    // Winning conditions
    // PlayerOne
    if (this.x > this.game.width) {
      this.game.playerOne.points += 1
      this.restart()
    }
    // PlayerTwo
    if (this.x < -this.game.width) {
      this.game.playerTwo.points += 1
      this.restart()
    }

  }

  restart() {
    // Let's put the ball in the middle of the screen with some Spin to i:w

    this.x = this.game.width / 2 - this.width;
    this.y = this.game.height / 2 - this.width;

    let minAngle = -30,
      maxAngle = 30,
      angle = Math.floor(Math.random() * (maxAngle - minAngle + 1)) + minAngle
    let radian = Math.PI / 180,
      speed = 7
    this.velocityX = speed * Math.cos(angle * radian)
    this.velocityY = speed * Math.sin(angle * radian)

    this.velocityX = this._setBallDirection(this.velocityX)
  }

  _setBallDirection(velocity) {
    let direction = Math.random() < 0.5 ? -1 : 1;
    return velocity *= direction;
  }

}
