const N_FLAKES = 40

let flakes_x = []
let flakes_y = []

let onclickStatus = false
let width = innerWidth
let height = innerHeight





function generateCoords() {
    for(let i = 0; i < N_FLAKES; i++) {
        flakes_x[i] = parseInt(Math.random() * width)
        flakes_y[i] = -parseInt(Math.random() * height)
    }
}

function drawFlake(i) {
    snowContainer.innerHTML += `
        <div 
            class="flake"
            style="
            left: ${flakes_x[i]}px;
            top: ${flakes_y[i]}px;
            "
        >
        </div>
    `
}

function drawAllFlakes() {
    snowContainer.innerHTML = ``
    for(let i = 0; i < N_FLAKES; i++) {
        drawFlake(i)
    }
}

function fall() {
    for (let i = 0; i < N_FLAKES; i++) {
        flakes_y[i] +=5
        if (flakes_y[i] > height) {
            flakes_y[i] = -parseInt(Math.random() * width)
        }
    }
    drawAllFlakes()
}

generateCoords()
drawAllFlakes()

function clickStop() {
    if (onclickStatus) {
        fallTimer = setInterval(fall, 40)
        onclickStatus = false
    } else {
        clearInterval(fallTimer)
        onclickStatus = true
    }
}


let fallTimer = setInterval(fall, 30)
