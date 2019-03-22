window.onload = init;

function init() {
    var images = document.getElementsByTagName("img");    
    for (var i = 0; i < images.length; i++) {        
        images[i].onclick = showAnswer;    
    } 
}

function showAnswer() {
    var image = document.getElementById("zero");
    image.src = "zero.jpg";
}