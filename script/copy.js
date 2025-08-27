document.querySelectorAll(".copy-btn")
    .forEach((element) => {
        element.addEventListener("click", async function () {
            const cardName = this.closest(".card-description");
            const number = cardName.querySelector(".number").innerText;

            try {
                await navigator.clipboard.writeText(number);
                alert(`The number ${number} has been copied.`);
            } catch (err) {
                alert("Could not copy to clipboard.");
                console.error(err);
            }

            const c = document.getElementById("copy");
            let count = parseInt(c.innerText);
            c.innerText = ++count;
        });
    });