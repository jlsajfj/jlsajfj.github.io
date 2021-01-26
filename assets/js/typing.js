function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}

var displayText = [
    "a Python nerd",
    "in UW Mechatronics",
    "dating a nerd"
]

var count = 1;
var tag;

async function typing(){
    var len = tag.innerHTML.length;
    while(tag.innerHTML.length != 0){
        tag.innerHTML = tag.innerHTML.substring(0, tag.innerHTML.length-1);
        await sleep(50);
    }
    
    len = displayText[count].length
    for (var i = 0; i < displayText[count].length; i++) {
        tag.innerHTML += displayText[count][i];
        await sleep(50);
    }
    
    count++;
    count = count % displayText.length;
    
    flashing()
}

var cursor
async function flashing(){
    for(var i = 0; i < 3; i++){
        await sleep(250);
        cursor.style.opacity = 0;
        await sleep(500);
        cursor.style.opacity = 1;
        await sleep(250);
    }
    typing()
}

document.addEventListener("DOMContentLoaded", async() => {
    tag = document.getElementsByTagName('strong')[0];
    cursor = document.getElementsByClassName('cursor')[0];
    tag.innerHTML = displayText[0];
    setTimeout(flashing, 1000)
});