const snekButtonGrid = document.getElementById('snek-button-bg');
const snekGameGrid = document.getElementById('snake-game-grid');
const buttonSnake = [6, 5, 4, 3, 2, 1, 0];
const buttonWidth = 20;
const buttonHeight = 5;
const width = 20;
const height = 20;

let snake = [2, 1, 0];
let appleIndex;
let direction = 1;
let interval;
let score = 0;
let bestScore = 0;

function moveSnakeButton(squares) {
  let tail = buttonSnake.pop();
  squares[tail].classList.remove('snake');
  buttonSnake.unshift(buttonSnake[0] + direction);
  squares[buttonSnake[0]].classList.add('snake');
  switch (buttonSnake[0]) {
    case 19:
      // top right of button
      direction = buttonWidth;
      break;
    case 99:
      // bottom right
      direction = -1;
      break;
    case 80:
      // bottom left
      direction = -buttonWidth;
      break;
    case 0:
      // top left
      direction = 1;
      break;
    case 4:
      direction = buttonWidth;
      break;
    case 64:
      direction = 1;
      break;
    case 74:
      direction = -buttonWidth;
      break;
    case 14:
      direction = 1;
      break;
    case 93:
      direction = -buttonWidth;
      break;
    case 33:
      direction = -1;
      break;
    case 25:
      direction = buttonWidth;
      break;
    case 85:
      direction = -1;
      break;
  }
}

const hit = (squares) => {
  if (
    (snake[0] + width >= width * width && direction === width) ||
    (snake[0] % width === width - 1 && direction === 1) ||
    (snake[0] % width === 0 && direction === -1) ||
    (snake[0] - width <= 0 && direction === -width) ||
    squares[snake[0] + direction].classList.contains('snake')
  ) {
    return true;
  }
  return false;
}

function genApple(squares) {
  do {
    appleIndex = Math.floor(Math.random() * squares.length);
  } while (squares[appleIndex].classList.contains('snake'));
  squares[appleIndex].classList.add('apple');
}

function eatApple(squares, tail) {
  if (squares[snake[0]].classList.contains('apple')) {
    squares[snake[0]].classList.remove('apple');
    squares[tail].classList.add('snake');
    snake.push(tail);
    genApple(squares);
    score++;
    document.getElementById('score').innerHTML = score;
  }
}

function moveSnake(squares) {
  if (hit(squares)) {
    // game over
    document.getElementById('game-over').style.display = 'inline';
    clearInterval(interval);
    document.addEventListener('keydown', enterToRestart);
  } else {
    let tail = snake.pop();
    squares[tail].classList.remove('snake');
    snake.unshift(snake[0] + direction);
    eatApple(squares, tail);
    squares[snake[0]].classList.add('snake');
  }
}

function control(e) {
  if (e.code === 'ArrowRight') {
    e.preventDefault();
    if (direction === -1) {
      return;
    }
    direction = 1; // right
  } else if (e.code === 'ArrowUp') {
    e.preventDefault();
    if (direction === width) {
      return;
    }
    direction = -width; //if we press the up arrow, the snake will go ten divs up
  } else if (e.code === 'ArrowLeft') {
    e.preventDefault();
    if (direction === 1) {
      return;
    }
    direction = -1; // left, the snake will go left one div
  } else if (e.code === 'ArrowDown') {
    e.preventDefault();
    if (direction === -width) {
      return;
    }
    direction = +width; // down, the snake head will appear 20 divs below from the current div
  }
}

function enterToRestart(e) {
  if (e.code === 'Enter') {
    restartGame();
  }
}

function startGame() {
  const squares = document.querySelectorAll('.snake-game-grid div');
  snake.forEach((index) => squares[index].classList.add('snake'));
  document.addEventListener('keydown', control);
  genApple(squares);
  interval = setInterval(moveSnake, 200, squares);
}

function restartGame() {
  document.removeEventListener('keydown', enterToRestart);
  document.getElementById('game-over').style.display = 'none';
  const squares = document.querySelectorAll('.snake-game-grid div');
  snake.forEach((index) => squares[index].classList.remove('snake'));
  squares[appleIndex].classList.remove('apple');
  snake = [2, 1, 0];
  direction = 1;
  startGame();
}

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 100; i++) {
    snekButtonGrid.append(document.createElement('div'));
  }
  const squares = document.querySelectorAll('.snek-button-board div');
  buttonSnake.forEach((index) => squares[index].classList.add('snake'));

  interval = setInterval(moveSnakeButton, 200, squares);
});

snekButtonGrid.onclick = () => {
  // stop button animation, show game board
  document.getElementById('pic-snake-button').style.display = 'none';
  document.getElementById('snake-game').style.display = 'inline';
  clearInterval(interval);

  for (let i = 0; i < 400; i++) {
    snekGameGrid.append(document.createElement('div'));
  }
};

document.getElementById('snake-start-btn').onclick = () => {
  document.getElementById('snake-game-instructions').style.display = 'none';
  startGame();
}

document.getElementById('snake-restart-btn').onclick = () => {
  restartGame();
}
