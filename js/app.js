const player = document.getElementById('character')
const block = document.getElementById('block')

const jump = () => {
    player.classList.add('animate')
}

const removeJump = () => {
    setTimeout(function() {
        player.classList.remove('animate')
    }, 500)
}

document.body.onkeyup = function (e) {
    if(e.keyCode === 32) {
        jump()
        removeJump()
    }
}
