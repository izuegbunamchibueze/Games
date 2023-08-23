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
            display.textContent = "player 2's turn to play";
        } else {
          button.textContent = "o";
          lastValue = "o";
          display.textContent = "player 1's turn to play";
          checkStatus();
        }
     });
}

let restartButton = document.getElementById("controllBtn");

restartButton.addEventListener("click", () => {
  window.Location.href = "index.html";
});

