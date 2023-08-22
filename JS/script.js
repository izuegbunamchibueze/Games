let lastValue ="o";
let display = document.getElementById("display");
display.textContent ="player 1's turn to play";

let buttons = document.querySelectorAll(".box");
for (let button of buttons) {
     button.addEventListener("click", () => {
        if(button.textContent !== "") {
            return;
        }
        if(lastValue === "o"){
            button.textContent= "x"
            lastValue = "x";
            display.textContent
        }
     });
}



