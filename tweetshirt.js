window.onload = function() {
    let button = document.getElementById("previewButton")
    button.onclick = previewHandler
}

function previewHandler() {
    let canvas = document.getElementById("tshirtCanvas")
    let context = canvas.getContext("2d")
    fillBackgroundColor(canvas, context)
    // drawText(canvas, context)
    
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
    drawText(canvas, context)
    drawBird(canvas, context)
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

// function updateTweets(tweets) {
//     let tweetsSelection = document.getElementById("tweets")
//     for (let i=0; i < tweets.length; i++) {
//         tweet = tweets[i]
//         let option = document.createElement("option")
//         option.text = tweet.text
//         option.value = tweet.text.replace("\"", "'")
//         tweetsSelection.options.add(option)
//     }
//     tweetsSelection.selectedIndex = 0
// }

function updateTweets(tweets) {
	var tweetsSelection = document.getElementById("tweets");

	// add all tweets to the tweets menu
	for (var i = 0; i < tweets.length; i++) {
		tweet = tweets[i];

		// create option
		var option = document.createElement("option");
		option.text = tweet.text;

		// strip any quotes out of the tweet so they don't mess up our option
		option.value = tweet.text.replace("\"", "'");

		// add option to select
		tweetsSelection.options.add(option);
    }
	// make sure the top tweet is selected
	tweetsSelection.selectedIndex = 0;
}

function drawText(canvas, context) {
	var selectObj = document.getElementById("foregroundColor");
	var index = selectObj.selectedIndex;
	var fgColor = selectObj[index].value;

	context.fillStyle = fgColor;
	context.font = "bold 1em sans-serif";
	context.textAlign = "left";
	context.fillText("Я повелся на этот твит", 20, 40);


	// draw the tweet!
	// selectObj = document.getElementById("tweets");
	// index = selectObj.selectedIndex;
	var tweet = "selectObj[index].value";
	context.font = "italic 1.2em serif";
	context.fillText(tweet, 150, 100);

    context.font = "bold 1em sans-serif"
    context.textAlign = "right"
    context.fillText("... а в результате получил эту паршивую майку!", 580, 180)
}

function drawBird(canvas, context) {
	var twitterBird = new Image();
	twitterBird.src = "twitterBird.png";
	twitterBird.onload = function() {
		context.drawImage(twitterBird, 20, 120, 70, 70);
	};

}