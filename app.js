let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector(".reset");
let newbtn = document.querySelector(".new");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");

let turnO = true;

const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // horizontal
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // vertical
    [0, 4, 8], [2, 4, 6] // diagonal
 ];

 const resetGame = () => {
    turnO = true;
    enableBoxes();
    msgContainer.classList.add("hide");
 }
    

 boxes.forEach((box) => {
    box.addEventListener("click", () => {
        if(turnO === true) {
            box.innerHTML = "O";
            turnO = false;
        }
        else {
            box.innerHTML = "X";
            turnO = true;
        }
        box.disabled = true;

        checkWinner();
    });
});

let count = 0;

const draw = () => {
        msg.innerText = "It's a tie!";
        msgContainer.classList.remove("hide");
}


const disableBoxes = () => {
    for(let box of boxes) {
        box.disabled = true;
    }
}

const enableBoxes = () => {
    for(let box of boxes) {
        box.disabled = false;
        box.innerText = "";
    }
}

const showWinner = (winner) => {
    msg.innerText = `${winner} wins!`;
    msgContainer.classList.remove("hide");
    disableBoxes();
}
const checkWinner = () => { 
    for (let patterns of winPatterns){
        let pos1 = boxes[patterns[0]].innerText;
        let pos2 = boxes[patterns[1]].innerText;
        let pos3 = boxes[patterns[2]].innerText;
        if(pos1 !== "" && pos1 === pos2 && pos2 === pos3) {
            showWinner(pos1);
            return;
        }
        let allBoxesFilled = Array.from(boxes).every(box => box.innerText !== "");
        if(allBoxesFilled) {
            draw();
    }
    }
};

newbtn.addEventListener("click", resetGame);
resetBtn.addEventListener("click", resetGame);