// tady je místo pro náš program



function hod() {
    let diceRoll = Math.floor( Math.random() * 6 ) +1;
    let text = document.querySelector("#zprava");
    let kostka = document.querySelector("#kostka");

    if (diceRoll === 6) {
        text.innerHTML = "Hodil jsi 6. Vyhrál jsi!";
        console.log("Hodil jsi 6. Vyhrál jsi!");
        
    } else {
        text.innerHTML = "Hodil jsi " + diceRoll + "." + " Zkus to znova.";
        console.log("Hodil jsi " + diceRoll + "." + " Zkus to znova.");
    }

    kostka.src = "obrazky/" + diceRoll + ".png";
}
