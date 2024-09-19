window.onload = setInterval(GameLoop, 3400 / 10); //10fps

let myAudio = new Audio();

myAudio.src = './music/music.mp3';

function GameLoop() {
    myAudio.play();
    if (myAudio.paused == true) {
        myAudio.play();
    }
}

console.log("tes")