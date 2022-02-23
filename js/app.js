const player = document.getElementById('character')
const block = document.getElementById('block')

const jump = () => {
    player.classList.add('animate')
}

document.addEventListener('DOMContentLoaded', () => {
    player.addEventListener('onclick', jump)
    jump()
})
