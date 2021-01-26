function hide_body(){
    document.getElementById('main-page').classList.add("fade-out");
}

document.getElementById("main-page").contentWindow.document.getElementsByClassName("icon")[0].addEventListener("click", hide_body);