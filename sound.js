let sounds = {
    "gameOver": "sound/gameOver.wav",       
    "click" : "sound/click.wav",            
    "blockCrush" : "sound/blockCrush.wav",
    "levelUp": "sound/levelUp.ogg",          
    "negative" : "sound/negative.wav",       

}


function playSound(name) {
    new Audio(sounds[name]).play();
}