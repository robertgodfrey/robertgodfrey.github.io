const snekButtonGrid = document.getElementById('snek-button-bg');
const snekGameGrid = document.getElementById('snake-game-grid');
const buttonSnake = [6, 5, 4, 3, 2, 1, 0];
const buttonWidth = 20;
const width = 20;
const height = 20;

let snake = [2, 1, 0];
let appleIndex;
let direction = 1;
let prevDirection = 1; // to account for fast pressing
let buttonInterval;
let gameInterval;
let intervalTime = 200;
let score = 0;
let bestScore = 0;

let highScoreOne, highScoreTwo, highScoreThree;
let highScores = [];

async function getHighScores() {
  const response = await fetch('https://nw3wvp7zk7zlvqctaqes5xs7ji0enbih.lambda-url.us-east-1.on.aws');
  const scores = await response.json();
  Object.keys(scores).forEach((score) => highScores.push(score));
  highScores = highScores.reverse();
  highScoreOne = `${highScores[0]} - ${scores[highScores[0]]}`;
  highScoreTwo = `${highScores[1]} - ${scores[highScores[1]]}`;
  highScoreThree = `${highScores[2]} - ${scores[highScores[2]]}`;
}

async function postScore(e) {
  document.getElementById('high-score').style.display = 'none';
  document.getElementById('loader').classList.add('loader');
  document.getElementById('loader').classList.remove('loader-hidden');
  document.getElementById('high-score-1').innerHTML = '';
  document.getElementById('high-score-2').innerHTML = '';
  document.getElementById('high-score-3').innerHTML = '';
  const response = await fetch('https://nq3q5hwyijmmfhbjcgbt6v57hm0wbkqj.lambda-url.us-east-1.on.aws/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: `${document.getElementById('highScoreName').value}~*&*~${score}`,
  });
  const scores = await response.json();
  Object.keys(scores).forEach((score) => highScores.push(score));
  highScores = highScores.reverse();
  highScoreOne = `${highScores[0]} - ${scores[highScores[0]]}`;
  highScoreTwo = `${highScores[1]} - ${scores[highScores[1]]}`;
  highScoreThree = `${highScores[2]} - ${scores[highScores[2]]}`;
  document.getElementById('high-score-1').innerHTML = highScoreOne;
  document.getElementById('high-score-2').innerHTML = highScoreTwo;
  document.getElementById('high-score-3').innerHTML = highScoreThree;

  document.addEventListener('keydown', enterToRestart);

  document.getElementById('loader').classList.add('loader-hidden');
  document.getElementById('loader').classList.remove('loader');
}

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
    clearInterval(gameInterval);
    if (intervalTime > 72) {
      intervalTime = intervalTime * 0.95;
      document.getElementById('current-speed').innerHTML = Math.round(200 / intervalTime * 35);
    } else if (Math.round(intervalTime) === 72) {
      intervalTime = 70;
      document.getElementById('current-speed').innerHTML = 100;
    }
    gameInterval = setInterval(moveSnake, intervalTime, squares);
  }
}

function moveSnake(squares) {
  if (hit(squares)) {
    // game over
    clearInterval(gameInterval);
    if (score > highScores[2]) {
      document.getElementById('high-score').style.display = 'block';
    } else {
      document.addEventListener('keydown', enterToRestart);
    }
    document.getElementById('game-over').style.display = 'block';
    document.getElementById('high-score-1').innerHTML = highScoreOne;
    document.getElementById('high-score-2').innerHTML = highScoreTwo;
    document.getElementById('high-score-3').innerHTML = highScoreThree;
    document.getElementById('last-score').innerHTML = score;
    document.removeEventListener('keydown', control);
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
  gameInterval = setInterval(moveSnake, 200, squares);
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
  document.getElementById('current-speed').innerHTML = 35;
  startGame();
}

snekButtonGrid.onclick = () => {
  // show game board
  document.getElementById('pic-snake-button').style.display = 'none';
  document.getElementById('snake-game').style.display = 'block';
  clearInterval(buttonInterval);

  for (let i = 0; i < 400; i++) {
    snekGameGrid.append(document.createElement('div'));
  }
};

document.getElementById('snake-start-btn').onclick = () => {
  document.getElementById('snake-game-instructions').style.display = 'none';
  startGame();
  getHighScores();
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

document.getElementById('snake-bg').onclick = () => {
  // hide snake game
  document.getElementById('pic-snake-button').style.display = 'block';
  document.getElementById('snake-game').style.display = 'none';
  const squares = document.querySelectorAll('.snek-button-board div');
  snekGameGrid.innerHTML = '';
  buttonInterval = setInterval(moveSnakeButton, 200, squares);
}

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 100; i++) {
    snekButtonGrid.append(document.createElement('div'));
  }
  const squares = document.querySelectorAll('.snek-button-board div');
  buttonSnake.forEach((index) => squares[index].classList.add('snake'));

  buttonInterval = setInterval(moveSnakeButton, 200, squares);
});
