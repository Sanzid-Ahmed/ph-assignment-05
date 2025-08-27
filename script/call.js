const call = function(){
    const cardName = this.closest(".card-description");
    const name = cardName.querySelector(".name").innerText;
    const number = cardName.querySelector(".number").innerText;
    coins(name, number);
};

const coins = function(name, number){
    const coinTake = document.getElementById("coins");
    const totalCoin = parseInt(coinTake.innerText);
    if(totalCoin > 20){
        alert(`📞 Calling ${name} ${number} ...`);
        const presentCoin = totalCoin - 20;
        coinTake.innerText = presentCoin;
    }
    else{
        alert(`❌ You do not have enough coin. You need 20 coins for call`);
    }       
};

document.querySelectorAll(".call-btn")
.forEach((button) => {
    button.addEventListener("click",call);
});