
for(var i = 0;i<document.querySelectorAll("button").length;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        var express = this.innerHTML;
        makesound(express);
        animation(express);
    });
};

document.addEventListener("keypress",function(event){
    makesound(event.key);
    animation(event.key);
});

function makesound(key){

    switch(key){
        case "w":
            var audio = new Audio('tom-1.mp3');
            audio.play();
            break;
        
        case "a":
            var audio = new Audio('tom-2.mp3');
            audio.play();
            break;
        case "s":
            var audio = new Audio('tom-3.mp3');
            audio.play();
            break;
        case "d":
            var audio = new Audio('tom-4.mp3');
            audio.play();
            break;
        case "j":
            var audio = new Audio('snare.mp3');
            audio.play();
            break;
        case "k":
            var audio = new Audio('crash.mp3');
            audio.play();
            break;
        case "l":
            var audio = new Audio('kick-bass.mp3');
            audio.play();
            break;                            
        default:console.log(this.innerHTML); 
}
};

function animation(whichkey){
    var element = document.querySelector("."+whichkey);
    element.classList.add("pressed");

    setTimeout(function(){
        element.classList.remove("pressed");
    },100);
};
