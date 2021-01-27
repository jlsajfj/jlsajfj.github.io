function sleep(ms) {
  return new Promise(r => setTimeout(r, ms));
}
var tag;

var displayText;
var count = 1;
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
    cursor.style.opacity = 1;
    for(var i = 0; i < 3; i++){
        await sleep(250);
        cursor.style.opacity = 0;
        await sleep(500);
        cursor.style.opacity = 1;
        await sleep(250);
    }
    cursor.style.opacity = 0.75;
    typing()
}

async function startup(){
    tag = document.getElementsByClassName('carousel')[0];
    displayText = JSON.parse(tag.getAttribute('display-text'));
    cursor = document.getElementsByClassName('cursor')[0];
    tag.innerHTML = displayText[0];
    setTimeout(flashing, 2000)
}

document.addEventListener("DOMContentLoaded", startup);