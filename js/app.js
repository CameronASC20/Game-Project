const game = document.getElementById('canvas')

const ctx = game.getContext('2d')

game.setAttribute('width', getComputedStyle(game)['width'])
game.setAttribute('height', getComputedStyle(game)['height'])


class Player {
    constructor(x, y, color, height, width) {
        this.x = x,
        this.y = y,
        this.color = color,
        this.height = height,
        this.width = width
		this.direction = {
            up: false
        }
    }
    render = function () {
        // ctx.fillStyle will determine the color(or style) of your element
        ctx.fillStyle = this.color
        // ctx.fillRect will draw a rectangle on the canvas
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }
}

class Block {
    constructor(x, y, color, height, width) {
        this.x = x,
        this.y = y,
        this.color = color
        this.height = height,
        this.width = width
        this.speed = 15
    }
    render = function () {
        // ctx.fillStyle will determine the color(or style) of your element
        ctx.fillStyle = this.color
        // ctx.fillRect will draw a rectangle on the canvas
        ctx.fillRect(this.x, this.y, this.height, this.width)
    }
}

let player = new Player(0, 430, 'blue', 50, 70)
let block = new Block(1550, 450, 'lightgreen', 50, 50)

player.render()
block.render()

// const stopGameLoop = () => {clearInterval(gameInterval)}

// document.addEventListener('DOMContentLoaded', function () {
//     gameInterval
// })

// const gameLoop = () => {
//     ctx.clearRect(0, 0, game.width, game.height)
//     if () {
//         stopGameLoop()
//         document.querySelector('#status').textContent = 'You Win!'
//     }
// }

// const jump = () => {
//     if (player.classList != 'animate') {
//         player.classList.add('animate')
//     }
// }

// const removeJump = () => {
//     setTimeout(function() {
//         player.classList.remove('animate')
//     }, 500)
// }


// const detectHit = () => {
//     if (player.x < block.x + block.width) {
//         alert('You Lose')
//     }
// }

// document.body.onkeyup = function (e) {
//     if (e.keyCode === 32) {
//         jump()
//         removeJump()
//     }
// }
