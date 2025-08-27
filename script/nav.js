const heart = function(){
    document.getElementById("heart-block").style.display="block";
    document.getElementById("coin-block").style.display="none";
    document.getElementById("copy-block").style.display="none";
}

const coin = function(){
    document.getElementById("heart-block").style.display="none";
    document.getElementById("coin-block").style.display="block";
    document.getElementById("copy-block").style.display="none";
}

const copy = function(){
    document.getElementById("heart-block").style.display="none";
    document.getElementById("coin-block").style.display="none";
    document.getElementById("copy-block").style.display="block";
}

document.getElementById("heart-sec")
.addEventListener("Click", heart);

document.getElementById("coin-sec")
.addEventListener("click", coin);

document.getElementById("copy-sec")
.addEventListener("click", copy);