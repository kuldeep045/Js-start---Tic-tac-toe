let btns = document.querySelectorAll(".btn"); //access to all play buttons
let reset = document.querySelector("#reset"); //accessing reset button
let newGame = document.querySelector("#new-game"); //access to new game btn
let hideClass = document.querySelector(".cont"); //access to hidden class
let win = document.querySelector("#win"); // access to win message
let mainGame = document.querySelector(".game-zone");
let count = 0;
const winPatterns = [
  [0, 3, 6], //column
  [1, 4, 7], //column
  [2, 5, 8], //column
  [0, 4, 8], //diagonal
  [2, 4, 6], //diagonal
  [0, 1, 2], //row
  [3, 4, 5], //row
  [6, 7, 8], //row
];
let turnO = true; //starting turn of O

//function for checking winner
const checkwinner = () => {
  for (const pattern of winPatterns) {
    let p1 = btns[pattern[0]].innerText;
    let p2 = btns[pattern[1]].innerText;
    let p3 = btns[pattern[2]].innerText;
    if (p1 != "" && p2 != "" && p3 != "") {
      if (p1 === p2 && p2 === p3) {
        console.log(`winner is ${p1}`);
       showWinner(p1);
        
        
      }
    }
  }
}
//function to show winner
let showWinner = (winner) => {
  // win.innerText = "Congratulations winner is:", winner;
  win.innerText = `Congratulations winner is: ${winner}`
  hideClass.classList.remove("hidden");
  reset.classList.add("hidden");
  mainGame.classList.add("hidden");
  count = 0 ;
  disable();
}
//functin to disable buttons
let disable = () => {
  for (const btn of btns) {
    btn.disabled = true;
  }
};

//functin to enable buttons
let enable = () => {
  for (const btn of btns) {
    btn.disabled = false;
  }
};

// clicking play buttons
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    count++;
    if (turnO) {
      btn.innerText = "O";
      turnO = false;
    } else {
      btn.innerText = "X";
      turnO = true;
    }
    btn.disabled = true;
    console.log(count);
    let isWinner = checkwinner();
    if (count === 9 && !isWinner) {
      draw();
    }
     
  });
});

//function for game draw
let draw = () => {
  console.log("game was drawn");
  win.innerText="Your game was drawn"
  hideClass.classList.remove("hidden");
  reset.classList.add("hidden");
  mainGame.classList.add("hidden");
  count = 0 ;
  disable();
}

//Function for resetting game
const resetGame = () => {
  for (const btn of btns) {
    btn.innerText = "";
    hideClass.classList.add("hidden");
    reset.classList.remove("hidden");
    mainGame.classList.remove("hidden");
    count = 0;
  }
  enable();
  turnO = true;
};
//setting reset button
reset.addEventListener("click", resetGame);
//setting new game button
newGame.addEventListener("click", resetGame);
//Draw funt=ction


/*
let Kuldeep = "Kuldeep"
function fun (winner) {
console.log(winner)
}
fun(Kuldeep);
*/