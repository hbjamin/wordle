function createGame() {
  // Create game
  for (var i = 0; i < 6; i++) {
    let level = new Level(i);
    game.push(level);
    for (var j = 0; j < 5; j++) {
      let square = new Square(j, i, 60);
      level.addSquare(square);
    }
  }
}

function displayGame() {
  for (let i = 0; i < game.length; i++) {
    game[i].display();
  }
}

function createKeyboard() {
  for (var i = 0; i < 10; i++) {
    if (i<10) {
      keyboard.push(new Button(29*i+20,382,29,45,row1[i]));
    }
    if (i<9) {
      keyboard.push(new Button(27*i+42,428,27,45,row2[i]));
    }
    if (i<7) {
      keyboard.push(new Button(27*i+69,474,27,45,row3[i]));
    }
  }
  keyboard.push(new Button(31,474,50,45,'ENTER'));
  keyboard.push(new Button(269,474,50,45,'DELETE'));
}

function displayKeyboard() {
  for (var i = 0; i < keyboard.length; i++) {
    keyboard[i].display();
  }
}

function displayAnswer() {
  for (var i = 0; i < 5; i++) {
    index = 5;
    tries = 5;
    game[index].squares[i].updateLetter(answer[i].getLetter());
    evaluateGuess();
  }
}

function addLetter(letter) {
  if (index<5) {
    game[tries].squares[index].updateLetter(letter);
    game[tries].squares[index].updateStrokeColor(color(0));
    index++;
  }
}

function removeLetter() {
  if (index>0) {
    game[tries].squares[index-1].updateLetter('');
    game[tries].squares[index-1].updateStrokeColor(color(220));
    index--;
  }
}

function evaluateGuess() {
  if (index==5) {
    var score = 0;
    // Check for greens
    for (var i = 0; i < 5; i++) {
      if (game[tries].squares[i].getLetter()==answer[i].getLetter()) {
        game[tries].squares[i].makeGreen();
        answer[i].isFound();
        score++;
      }
    }
    // Check for yellows
    for (i = 0; i < 5; i++) {
      for (var j = 0; j < 5; j++) {
        // Check different indicies for yellows
        if (i!=j) {
          if (game[tries].squares[i].getLetter()==answer[j].getLetter() && answer[j].getStatus()==false && game[tries].squares[i].isEvaluated()==false) {
              game[tries].squares[i].makeYellow();
              answer[j].isFound();
          }
        }
      }
    }
    // Make leftovers gray
    for (i = 0; i < 5; i++) {
      if (game[tries].squares[i].isEvaluated()==false) {
        game[tries].squares[i].makeGray();
      }
    }
    // Check for game over
    if (score==5) {
      over = true;
    }
    // Update keyboard
    updateKeyboard();
    // Update cursor location
    index = 0;
    tries++;
    
  }
  // Reset answer status
  for (var i = 0; i < 5; i++) {
    answer[i].resetStatus();
  }
}

function updateKeyboard() {
  let updated = []
  for (var i = 0; i < 5; i++) {
    for (var j = 0; j < keyboard.length; j++) {
      if (game[tries].squares[i].getLetter()==keyboard[j].getLetter()) {
        var temp = [keyboard[j].getColor()['levels'][0],
                    keyboard[j].getColor()['levels'][1],
                    keyboard[j].getColor()['levels'][2]]
        var temp2 = [game[tries].squares[i].getColor()['levels'][0],
                     game[tries].squares[i].getColor()['levels'][1],
                     game[tries].squares[i].getColor()['levels'][2]]
        if (temp[0]==myLGray[0] && temp[1]==myLGray[1] && temp[2]==myLGray[2]) {
          keyboard[j].changeColor(game[tries].squares[i].getColor());
        } else if (temp[0]!=myGreen[0] && temp[1]!=myGreen[1] && temp[2]!=myGreen[2] && temp2[0]!=myGray[0] && temp2[1]!=myGray[1] && temp[2]!=myGray[2]) {
          print(i,temp,temp2)
          keyboard[j].changeColor(game[tries].squares[i].getColor());  
        }
        
        
        // if (temp[0]==myYellow[0] && temp[1]==myYellow[1] && temp[2]==myYellow[2] && temp2[0]!=myGray[0] && temp2[1]!=myGray[1] && temp[2]!=myGray[2]) {
        //     keyboard[j].changeColor(game[tries].squares[i].getColor());
        // } else if (temp[0]==myYellow[0] && temp[1]==myYellow[1] && temp[2]==myYellow[2] && temp2[0]==myGray[0] && temp2[1]==myGray[1] && temp[2]==myGray[2]) {
        // } else if (temp[0]!=myGreen[0] && temp[1]!=myGreen[1] && temp[2]!=myGreen[2]) {
        //     keyboard[j].changeColor(game[tries].squares[i].getColor());  
        // }
      }
    }
  }
}


function pickAnswer() {
  i = randomInt(0,list.length-1);
  for (var j = 0; j < 5; j++) {
    if (list[i][j] == 'a') {
      answer.push(new Letter('A'));
    } else if (list[i][j] == 'b') {
      answer.push(new Letter('B'));
    } else if (list[i][j] == 'c') {
      answer.push(new Letter('C'));
    } else if (list[i][j] == 'd') {
      answer.push(new Letter('D'));
    } else if (list[i][j] == 'e') {
      answer.push(new Letter('E'));
    } else if (list[i][j] == 'f') {
      answer.push(new Letter('F'));
    } else if (list[i][j] == 'g') {
      answer.push(new Letter('G'));
    } else if (list[i][j] == 'h') {
      answer.push(new Letter('H'));
    } else if (list[i][j] == 'i') {
      answer.push(new Letter('I'));
    } else if (list[i][j] == 'j') {
      answer.push(new Letter('J'));
    } else if (list[i][j] == 'k') {
      answer.push(new Letter('K'));
    } else if (list[i][j] == 'l') {
      answer.push(new Letter('L'));
    } else if (list[i][j] == 'm') {
      answer.push(new Letter('M'));
    } else if (list[i][j] == 'n') {
      answer.push(new Letter('N'));
    } else if (list[i][j] == 'o') {
      answer.push(new Letter('O'));
    } else if (list[i][j] == 'p') {
      answer.push(new Letter('P'));
    } else if (list[i][j] == 'q') {
      answer.push(new Letter('Q'));
    } else if (list[i][j] == 'r') {
      answer.push(new Letter('R'));
    } else if (list[i][j] == 's') {
      answer.push(new Letter('S'));
    } else if (list[i][j] == 't') {
      answer.push(new Letter('T'));
    } else if (list[i][j] == 'u') {
      answer.push(new Letter('U'));
    } else if (list[i][j] == 'v') {
      answer.push(new Letter('V'));
    } else if (list[i][j] == 'w') {
      answer.push(new Letter('W'));
    } else if (list[i][j] == 'x') {
      answer.push(new Letter('X'));
    } else if (list[i][j] == 'y') {
      answer.push(new Letter('Y'));
    } else if (list[i][j] == 'z') {
      answer.push(new Letter('Z'));
    }  
  }
}


function keyPressed() {
  if (tries<6 && over==false) {
    if (key == 'Enter') {
      evaluateGuess();
    } else if (key == 'Backspace') {
      removeLetter();
    } else if (key == 'a') {
      addLetter('A');
    } else if (key == 'b') {
      addLetter('B');
    } else if (key == 'c') {
      addLetter('C');
    } else if (key == 'd') {
      addLetter('D');
    } else if (key == 'e') {
      addLetter('E');
    } else if (key == 'f') {
      addLetter('F');
    } else if (key == 'g') {
      addLetter('G');
    } else if (key == 'h') {
      addLetter('H');
    } else if (key == 'i') {
      addLetter('I');
    } else if (key == 'j') {
      addLetter('J');
    } else if (key == 'k') {
      addLetter('K');
    } else if (key == 'l') {
      addLetter('L');
    } else if (key == 'm') {
      addLetter('M');
    } else if (key == 'n') {
      addLetter('N');
    } else if (key == 'o') {
      addLetter('O');
    } else if (key == 'p') {
      addLetter('P');
    } else if (key == 'q') {
      addLetter('Q');
    } else if (key == 'r') {
      addLetter('R');
    } else if (key == 's') {
      addLetter('S');
    } else if (key == 't') {
      addLetter('T');
    } else if (key == 'u') {
      addLetter('U');
    } else if (key == 'v') {
      addLetter('V');
    } else if (key == 'w') {
      addLetter('W');
    } else if (key == 'x') {
      addLetter('X');
    } else if (key == 'y') {
      addLetter('Y');
    } else if (key == 'z') {
      addLetter('Z');
    } 
  }
}

function touchStarted() {
  
  for (var i = 0; i < keyboard.length; i++) {
    if (mouseX>keyboard[i].getX()-(keyboard[i].getW()/2) &&
        mouseX<keyboard[i].getX()+(keyboard[i].getW()/2) &&
        mouseY>keyboard[i].getY()-(keyboard[i].getH()/2) &&
        mouseY<keyboard[i].getY()+(keyboard[i].getH()/2)) {
      if (keyboard[i].getLetter()!='ENTER' && 
         keyboard[i].getLetter()!='DELETE') {
        addLetter(keyboard[i].getLetter());
      } else if (keyboard[i].getLetter()=='ENTER') {
        evaluateGuess();
      } else if (keyboard[i].getLetter()=='DELETE') {
        removeLetter();
      }
    }
  }
}

function randomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
