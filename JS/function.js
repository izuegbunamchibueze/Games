 // This function is to check when the game is won
function checkIfGameIsWon(buttons, first, second, third) {
    if (display.textContent.includes("won the game")) {
        return;
    }

    if (
        buttons[first].textContent === "X" &&
        buttons[second].textContent === "X" &&
        buttons[third].textContent === "X"
    ) {
        disableButtonsWhenGameIsWon("player 1", buttons);
        return;
    } else if (
        buttons[first].textContent === "O" &&
        buttons[second].textContent === "O" &&
        buttons[third].textContent === "O"
    ) {
        disableButtonsWhenGameIsWon("player 2", buttons);
        return;
    } else {
        // checkDraw();
    }
}

function checkStatus(buttons) {
    checkIfGameIsWon(buttons, 0, 1, 2);
    checkIfGameIsWon(buttons, 3, 4, 5);
    checkIfGameIsWon(buttons, 6, 7, 8);
}

// check if the game has been won vertically
checkIfGameIsWon(buttons, 0, 3, 6);
checkIfGameIsWon(buttons, 1, 4, 7);
checkIfGameIsWon(buttons, 2, 5, 8);

// check if the game has been won diagonally
checkIfGameIsWon(buttons, 0, 4, 8);
checkIfGameIsWon(buttons, 2, 4, 6);

function disableButtonsWhenGameIsWon(player, buttons) {
    for (let button of buttons) {
        if (button.textContent === "") {
            button.toggleAttribute("disabled");
        }
    }
    display.textContent = player + " won the game";
}

function checkDraw() {
    for (let button of buttons) {
        if (button.textContent === "") {
            return;
        }
    }
    display.textContent = "It is a Draw Game";
}
