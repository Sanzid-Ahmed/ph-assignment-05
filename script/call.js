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
    
    history(name, number);
};

const history = function(name, number){
    const now = new Date();
    const time = now.toLocaleTimeString(); 


    const historyContainer = document.getElementById("history-container");

    const historyDiv = document.createElement("Div");
    historyDiv.className = " bg-gray-200 rounded-[8px] flex justify-between items-center gap-[16px] p-[16px] mb-[8px]";
    historyDiv.innerHTML = `
        <div>
            <h1 class="font-bold">${name}</h1>
            <p>${number}</p>
        </div>
        <p>${time}</p>
    `;

    historyContainer.appendChild(historyDiv);
}

document.querySelectorAll(".call-btn")
.forEach((button) => {
    button.addEventListener("click",call);
});