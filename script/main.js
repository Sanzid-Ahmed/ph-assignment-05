document.getElementById("history-sec-btn")
.addEventListener("click", function(){
    document.getElementById("history-sec").style.display="block";
    document.getElementById("service-sec").style.display="none";
});

document.getElementById("service-sec-btn")
.addEventListener("click", function(){
    console.log("Hello");
    document.getElementById("service-sec").style.display="grid";
    document.getElementById("history-sec").style.display="none";
});
