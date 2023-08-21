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
let prevDirection = 1; // to account for fast pressing
let interval;
let intervalTime = 200;
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
  if (snake[0] + direction === snake[1]) {
    direction = prevDirection;
  }
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
    if (score > bestScore) {
      bestScore = score;
      document.getElementById('best-score').innerHTML = score;
    }
    document.getElementById('score').innerHTML = score;
    clearInterval(interval);
    intervalTime = intervalTime * 0.95;
    interval = setInterval(moveSnake, intervalTime, squares);
    document.getElementById('current-speed').innerHTML = Math.round(200 / intervalTime * 100);
  }
}

function moveSnake(squares) {
  if (hit(squares)) {
    // game over
    document.getElementById('game-over').style.display = 'inline';
    document.getElementById('last-score').innerHTML = score;
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
  if (e.code === 'ArrowRight' || e.code === 'KeyD') {
    e.preventDefault();
    if (direction === -1) {
      return;
    }
    prevDirection = direction;
    direction = 1; // right one div
  } else if (e.code === 'ArrowUp' || e.code === 'KeyW') {
    e.preventDefault();
    if (direction === width) {
      return;
    }
    prevDirection = direction;
    direction = -width; // snake goes 20 divs up
  } else if (e.code === 'ArrowLeft' || e.code === 'KeyA') {
    e.preventDefault();
    if (direction === 1) {
      return;
    }
    prevDirection = direction;
    direction = -1; // left one div
  } else if (e.code === 'ArrowDown' || e.code === 'KeyS') {
    e.preventDefault();
    if (direction === -width) {
      return;
    }
    prevDirection = direction;
    direction = +width; // down 20 divs
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
  intervalTime = 200;
  direction = 1;
  interval = setInterval(moveSnake, 200, squares);
}

function restartGame() {
  document.removeEventListener('keydown', enterToRestart);
  document.getElementById('game-over').style.display = 'none';
  const squares = document.querySelectorAll('.snake-game-grid div');
  snake.forEach((index) => squares[index].classList.remove('snake'));
  squares[appleIndex].classList.remove('apple');
  snake = [2, 1, 0];
  score = 0;
  document.getElementById('score').innerHTML = 0;
  document.getElementById('current-speed').innerHTML = 100;
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

document.getElementById('left-arrow').onclick = () => {
  if (direction === 1) {
    return;
  }
  prevDirection = direction;
  direction = -1;
}

document.getElementById('up-arrow').onclick = () => {
  console.log('up?');
  if (direction === width) {
    return;
  }
  prevDirection = direction;
  direction = -width; // snake goes 20 divs up
}

document.getElementById('right-arrow').onclick = () => {
  if (direction === -1) {
    return;
  }
  prevDirection = direction;
  direction = 1; // right one div
}

document.getElementById('down-arrow').onclick = () => {
  if (direction === -width) {
    return;
  }
  prevDirection = direction;
  direction = +width; // down 20 divs
}
