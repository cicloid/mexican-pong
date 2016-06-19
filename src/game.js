export default class Game {

  constructor(canvas) {
    this.context = canvas.getContext("2d")
    this.width = canvas.width
    this.height = canvas.height

    this.keys = {
      32: 'space',
      37: 'left',
      38: 'up',
      39: 'right',
      40: 'down',
      87: 'w',
      65: 'a',
      83: 's',
      68: 'd'
    }

    this.keyPressed = {}

    this._addListenerMulti(document, 'keydown keyup', (event) => {
      const keyName = this.keys[event.keyCode]

      if (keyName) {
        this.keyPressed[keyName] = event.type === 'keydown';
        event.preventDefault();
      }
    })
  }

  update() {
    this.entities.forEach((entity) => {
      if (entity.update) entity.update()
    })
  }

  draw() {
    this.entities.forEach(  (entity) => {
      if (entity.draw) entity.draw(this.context)
    })
  }

  start() {
    const fps = 60,
      interval = 1000 / fps;

    setInterval(() => {
      this.update();
      this.draw();
    }, interval)
  }

  _addListenerMulti(el, s, fn) {
    s.split(" ").forEach(e => el.addEventListener(e, fn, false));
  }



}
