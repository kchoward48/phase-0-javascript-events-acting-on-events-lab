// Your code here

    const dodger = document.getElementById("dodger");

    dodger.style.backgroundColor = "#FF69B4";

    dodger.style.bottom = "0px";

    dodger.style.left = "0px";

document.addEventListener("keydown", function(event) {
    if(event.key === "ArrowLeft") { moveDodgerLeft(); }
    else if(event.key === "ArrowRight") { moveDodgerRight(); }});

function moveDodgerLeft() {
    const dodger_left = document.getElementById("dodger");
    const leftNumbers = dodger_left.style.left.replace("px", "");
    const left = parseInt(leftNumbers, 10);
  
    // if (left > 0) {
      dodger_left.style.left = `${left - 1}px`;
    // }
  }

function moveDodgerRight() { const dodger_right = document.getElementById("dodger"); const rightNumber = dodger_right.style.left.replace('px', ''); const right = parseInt(rightNumber,10); if(right + 40 < 400) { dodger_right.style.left = `${right + 1}px`; } }