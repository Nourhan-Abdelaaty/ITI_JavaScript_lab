var maxSize = 270,
    minSize = 135,
    imgs  = document.getElementsByTagName('img'),
    strt  = document.getElementById("start"),
    stop  = document.getElementById("stop"),
    reset = document.getElementById("reset"),
    imgLift = imgs[0],
    imgTop = imgs[1],
    imgRight = imgs[2];


function startMove() {
    var imgLiftLastMove = parseInt(getComputedStyle(imgLift).left);
    var imgTopLastMove = parseInt(getComputedStyle(imgTop).top);
    var imgRightLastMove = parseInt(getComputedStyle(imgRight).right);
    moveImgs = setInterval(function(){
        
        imgLiftLastMove +=30;
        imgTopLastMove +=30;
        imgRightLastMove +=30;

        imgLiftLastMove = imgLiftLastMove == 270? 0: imgLiftLastMove;
        imgTopLastMove = imgTopLastMove == 270? 0: imgTopLastMove;
        imgRightLastMove = imgRightLastMove == 270? 0: imgRightLastMove;
        
        imgLift.style.left = imgLiftLastMove;
        imgTop.style.top = imgTopLastMove;
        imgRight.style.right = imgRightLastMove;
    }, 500)
}

reset.onclick = function reset (){
    clearInterval(moveImgs)
    imgLift.style.left = imgTop.style.top = imgRight.style.right = 0;
    
}

start.onclick = function (){
    startMove()   
}

stop.onclick = function (){
    clearInterval(moveImgs)
}