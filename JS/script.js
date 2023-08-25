  let lastValue = "o";
  let display = document.querySelector(".turn");
  display.textContent = "player 1's turn to play";

  let buttons = document.querySelectorAll(".box");
  for (let button of buttons) {
      button.addEventListener("click", () => {
          if (button.textContent !== "") {
              return;
          }
          if (lastValue === "o") {
              button.textContent = "x";
              lastValue = "x";
              display.textContent = "player 2's turn to play";
          } else {
              button.textContent = "o";
              lastValue = "o";
              display.textContent = "player 1's turn to play";
              checkStatus(buttons); // Pass the buttons array to checkStatus
          }
      });
  }

  let controlbtn = document.getElementById("restart");

  controlbtn.addEventListener("click", () => {
      window.location.href = "index.html";
  });
  


