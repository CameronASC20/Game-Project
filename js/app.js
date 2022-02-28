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
        // this.jump
		// this.direction = {
        //     up: false
        // }
    }
    render = function () {
        // ctx.fillStyle will determine the color(or style) of your element
        ctx.fillStyle = this.color
        // ctx.fillRect will draw a rectangle on the canvas
        ctx.fillRect(this.x, this.y, this.width, this.height)
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
        ctx.fillRect(this.x, this.y, this.width, this.height)
        // ctx.translate(1500, 0)
        this.x -= this.speed;
        if (this.x < 0) {
            console.log('x position is', this.x)
            this.x = canvas.width - this.width
        }
        // requestAnimationFrame(block)
    }
}

let player = new Player(0, 430, 'blue', 70, 50)
let block = new Block(1550, 450, 'lightgreen', 50, 50)







const jump = (e) => {
    console.log('jump event', e)
    if (e.keyCode == 32) {
        let start = Date.now()
        player.y -= 100
        const timer = setInterval(function() {
            // how much time passed from the start?
            console.log('timer')
            let timePassed = Date.now() - start
            
            if (timePassed >= 1000) {
                player.y += 100
                console.log('2 seconds')
                // finish animation after 2 sec
                clearInterval(timer)
            }
        }, 100)
    }
}


// const removeJump = () => {
//     if (player.y === 360) {
//             player.y += 70 
//     }
//     console.log('player y', player.y)
// }

document.addEventListener('keydown', jump)


const gameLoop = () => {
    ctx.clearRect(0, 0, game.width, game.height)
    player.render()
    block.render()
    detectHit()
    // removeJump()
    // get timer at time of jump button pressed
    // move player to jumping position
    // check timer position against first
    // if more than 10 has past reset player position
    // reset jump timer
}

const detectHit = () => {
    if (player.x + player.width > block.x &&
        player.y >= block.y + block.height) {
        console.log('hit')
        document.getElementById('status').textContent = 'YOU LOSE'
    }
}

let gameInterval = setInterval(gameLoop, 60)

const stopGameLoop = () => {clearInterval(gameInterval)}


