function setup() {
  createCanvas(canvasX, canvasY);
  createGame();
  createKeyboard();
  pickAnswer();
}

function draw() {
  background(255);
  displayGame();
  displayKeyboard();
  if (tries==6) {
    displayAnswer();
  }
}


