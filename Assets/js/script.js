let gameIntro = document.querySelector("#gameIntro");
let player1 = document.querySelector("#player1");
let player2 = document.querySelector("#player2");
let winMsg = document.querySelector("#winnerMsg");
let closeBtn = document.querySelector("#closeBtn");
let winCont = document.querySelector("#winnerCont");
let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#reset-btn");
let gameContainer = document.querySelector("#game");
let input1 = document.querySelector("#input1");
let input2 = document.querySelector("#input2");
let Btn = document.querySelector(".Btn");
let turn = true;
let win1 = 0;
let lose1 = 0;
let win2 = 0;
let lose2 = 0;

// input Values (players name)....

Btn.addEventListener("click", () => {
  if (input1.value != "" && input2.value != "") {
    gameIntro.style.display = "none";
    player1.innerHTML =
      input1.value.toUpperCase() + `😵‍💫<p>WINS:0</p>` + `<p>LOSE:0</p>`;
    player2.innerHTML =
      input2.value.toUpperCase() +
      `🥴<p>WINS:0</p>` +
      `<p>LOSE:0</p>`.toUpperCase();
  }
});

// winning patterns...
const winPatterns = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
// boxes.forEach((box) =>{
//     box.addEventListener('click',() =>{
//         console.log('btn was clicked');
//     })
// })

//values printing on boxes....
for (let box of boxes) {
  box.addEventListener("click", () => {
    console.log("btn was clicked..");
    // console.log(boxes);
    if (turn) {
      box.innerHTML = "😵‍💫";
      turn = false;
    } else {
      box.innerHTML = "🥴";
      turn = true;
    }
    box.disabled = true;
    checkWinner();
  });
}

//game restart close Btn....
closeBtn.addEventListener("click", () => {
  turn = true;
  winMsg.classList.add("hide");
  winCont.classList.add("hide");
  for (let box of boxes) {
    box.disabled = false;
    box.innerText = "";
  }
});

// winner massage....
const winnerMsg = (x) => {
  // console.log(x)
    winMsg.innerHTML = `Congrats ${x}
    you are Brilliant!!👌🔥`;
    winMsg.classList.remove("hide");
    winCont.classList.remove("hide");
};

// check winner...
const checkWinner = () => {
  for (let pattern of winPatterns) {
    console.log(pattern[0],pattern[1],pattern[2])
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if (pos1Val != "" && pos2Val != "" && pos3Val != "") {
      if (pos1Val === pos2Val && pos2Val === pos3Val) {
        // console.log("winner", pos1Val);
        for (let box of boxes) {
          box.disabled = true;
        }
        if (pos1Val === "😵‍💫") {
          win1++;
          lose2++;
          player1.innerHTML = input1.value.toUpperCase() + `😵‍💫<p>WINS:${win1}</p>` + `<p>LOSE:${lose1}</p>`;
          player2.innerHTML = input2.value.toUpperCase() + `🥴<p>WINS:${win2}</p>` + `<p>LOSE:${lose2}</p>`;
          pos1Val = input1.value;
          winnerMsg(pos1Val);
        } else {
          win2++;
          lose1++;
          player1.innerHTML = input1.value.toUpperCase() + `😵‍💫<p>WINS:${win1}</p>` + `<p>LOSE:${lose1}</p>`;
          player2.innerHTML = input2.value.toUpperCase() + `🥴<p>WINS:${win2}</p>` + `<p>LOSE:${lose2}</p>`;
          pos1Val = input2.value;
          winnerMsg(pos1Val);
        }
      } else {
        resetBtn.addEventListener("click", () => {
          for (let box of boxes) {
            box.innerText = "";
            box.disabled = false;
            turn = true;
          }
        });
      }
    }
  }
};
