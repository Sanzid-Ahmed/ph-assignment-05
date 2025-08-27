const heartCount = function(){
    const c = document.getElementById("heart-count");
    let count = parseInt(c.innerText);
    c.innerText = ++count; 
}


// for first one check.
// document.querySelector(".N-heart")
// .addEventListener("click", heartCount);

document.querySelectorAll(".N-heart")
.forEach((el) => {
    el.addEventListener("click",heartCount);
});