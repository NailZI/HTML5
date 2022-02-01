window.onload = function() {
    let button = document.getElementById("previewButton")
    button.onclick = previewHandler
}

function previewHandler() {
    let canvas = document.getElementById("tshirtCanvas")
    let context = canvas.getContext("2d")
    fillBackgroundColor(canvas, context)
    
    let selectObj = document.getElementById("shape")
    let index = selectObj.selectedIndex
    let shape = selectObj[index].value
    if (shape == "squares") {
        for (let squares = 0; squares < 20; squares++) {
            drawSquares(canvas, context)
        }
    } else if (shape == "circles") {
        for (let circles = 0; circles < 20; circles++) {
            drawCircle(canvas, context)
        }
    }
}

function drawSquares(canvas, context) {
    let w = Math.floor(Math.random() * 40)
    let x = Math.floor(Math.random() * canvas.width)
    let y = Math.floor(Math.random() * canvas.height)
    context.fillStyle = "lightblue"
    context.fillRect(x, y, w, w)

    context.beginPath()
    context.moveTo(10, 150)
    context.lineTo(250, 75)
    context.lineTo(x, y)
    context.closePath()
    context.lineWidth = 1
    context.strokeStyle = "lavender"
    context.stroke()
    context.fillStyle = "#b4dbdb39"
    context.fill()
    // context.arc(100, 100, 75, 0, degreesToRadians(270), true)
}

function fillBackgroundColor(canvas, context) {
    let selectObj = document.getElementById("backgroundColor")
    let index = selectObj.selectedIndex
    let bgColor = selectObj.options[index].value
    context.fillStyle = bgColor
    context.fillRect(0, 0 , 600, 200)
}

function degreesToRadians(degrees) {
    return (degrees * Math.PI)/180
}

function drawCircle(canvas, context) {
    let radius = Math.floor(Math.random() * 40)
    let x = Math.floor(Math.random() * canvas.width)
    let y = Math.floor(Math.random() * canvas.height)

    context.beginPath()
    context.moveTo(10, 150)
    context.lineTo(250, 75)
    context.lineTo(x, y)
    context.closePath()
    context.lineWidth = 1
    context.strokeStyle = "lavender"
    context.stroke()
    context.fillStyle = "#b4dbdb39"
    context.fill()

    context.beginPath()
    context.arc(x, y, radius, 0, degreesToRadians(360), true)

    context.fillStyle = "lightblue"
    context.fill()
}