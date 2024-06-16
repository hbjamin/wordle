class Level {
  constructor(index) {
    this.index = index;
    this.squares = [];
  }

  addSquare(square) {
    this.squares.push(square);
  }

  display() {
    for (let i = 0; i < this.squares.length; i++) {
      this.squares[i].display();
    }
  }
}

class Square {
  constructor(column, row, size) {
    this.letter = '';
    this.letterColor = color(0);
    this.backgroundColor = color(255);
    this.strokeColor = color(220);
    this.column = column;
    this.row = row;
    this.size = size;
    this.evaluated = false;
  }
  
  updateLetter(letter) {
    this.letter = letter;
  }
  
  updateStrokeColor(color) {
    this.strokeColor = color;
  }
  
  getLetter() {
    return this.letter;
  }
  
  getColor() {
    return this.backgroundColor;
  }
  
  isEvaluated() {
    return this.evaluated;
  }
  
  makeGreen() {
    this.letterColor = color(255);
    this.backgroundColor = color(myGreen);
    this.strokeColor = color(myGreen);
    this.evaluated = true;
  }
  
  makeYellow() {
    this.letterColor = color(255);
    this.backgroundColor = color(myYellow);
    this.strokeColor = color(myYellow);
    this.evaluated = true;
  }
  
  makeGray() {
    this.letterColor = color(255);
    this.backgroundColor = color(myGray);
    this.strokeColor = color(myGray);
  }
  

  display() {
    // Display square
    fill(this.backgroundColor);
    stroke(this.strokeColor);
    strokeWeight(2);
    rectMode(CENTER);
    rect(this.column*this.size+this.size/2,this.row*this.size+this.size/2,this.size-8,this.size-8);
    // Display letter
    fill(this.letterColor);
    stroke(this.letterColor);
    strokeWeight(1);
    textSize(30);
    textAlign(CENTER,CENTER);
    text(this.letter,this.column*this.size+this.size/2,this.row*this.size+this.size/2)
  }
}

class Letter {
  constructor(letter) {
    this.letter = letter;
    this.found = false;
  }
  
  getLetter() {
    return this.letter;
  }
  
  getStatus() {
    return this.found
  }
  
  isFound() {
    this.found = true;
  }
  
  resetStatus() {
    this.found = false;
  }
}

class Button {
  constructor(x,y,w,h,letter) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.letter = letter;
    this.color = color(220);
    this.letterColor = color(0);
  }
  
  display() {
    // Display background
    fill(this.color);
    stroke(color(255));
    strokeWeight(4);
    rectMode(CENTER);
    rect(this.x,this.y,this.w,this.h,5,5,5,5);
    // Display letter
    fill(this.letterColor);
    stroke(color(0));
    strokeWeight(0);
    textSize(10);
    text(this.letter,this.x,this.y);
  }
  
  getLetter() {
    return this.letter;
  }
  
  getColor() {
    return this.color
  }
  
  getX() {
    return this.x;
  }
  
  getY() {
    return this.y;
  }
  
  getW() {
    return this.w;
  }
  
  getH() {
    return this.h;
  }
  
  changeColor(c) {
    this.color = color(c);
    this.letterColor = color(255);
  }
}


