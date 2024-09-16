let boxes = document.querySelectorAll(".b");
let resetbtn = document.querySelector("#reset-btn");
let newgamebtn = document.querySelector("#new");
let msgContainer = document.querySelector(".msg-container");
let message = document.querySelector("#msg");

let turn0 = true;

const win = [[0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]];

boxes.forEach((b) => {
    b.addEventListener("click", () => {
        console.log("box was click")
        if(turn0)
        {
            b.innerText = "0";
            turn0 = false;
        }
        else {
            b.innerText = "X";
            turn0 = true;
        }
        b.disabled = "true";

        checkWinner();
    });
});

const resetGame = () => {
    turn0 = true;
    enableableBtn();
    msgContainer.classList.add("hide");
}

const disableBtn = () => {
    for(let bx of boxes) {
        bx.disabled = true;
    }
}

const enableableBtn = () => {
    for(let bx of boxes) {
        bx.disabled = false;
        bx.innerText = "";
    }
}

const showWinner = (winner) => {
    message.innerText = `Congratulations, Winner is ${winner}:)`;
    msgContainer.classList.remove("hide");
    disableBtn();
}

const checkWinner = () => {
    for(let pattern of win) {
        
        let pos1 = boxes[pattern[0]].innerText;
        let pos2 = boxes[pattern[1]].innerText;
        let pos3 = boxes[pattern[2]].innerText;

        if(pos1 != "" && pos2 != "" && pos3 != "")
        {
            if(pos1 == pos2 && pos2 == pos3)
            {
                console.log("Winner" , pos1);
                showWinner(pos1);
            }
        }
    }
}

newgamebtn.addEventListener("click",resetGame);
resetbtn.addEventListener("click",resetGame);
