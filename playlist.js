window.onload = init;

function init() {
    let button = document.getElementById("addButton")
    button.onclick = handleButtonClick
    loadPlayList()
}

function handleButtonClick() {
    //alert("Button was clicked!")
    let textInput = document.getElementById("songTextInput")
    let songName = textInput.value
    // if (songName =='') {
    //     alert('Please enter a song')
    // } else {
    //     alert('Adding ' + songName)
    // }
    let li = document.createElement("li")
    li.innerHTML = songName
    let ul = document.getElementById("playlist")
    ul.appendChild(li)
    save(songName)
}   
