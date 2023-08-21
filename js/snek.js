const snekButtonGrid = document.getElementById('snek-button-bg');
const snake = [6, 5, 4, 3, 2, 1, 0];
const width = 20;
const height = 5;
let direction = 1;
let interval;

function moveSnake(squares) {
  console.log('movesnake');
  let tail = snake.pop();
  squares[tail].classList.remove('snake');
  snake.unshift(snake[0] + direction);
  squares[snake[0]].classList.add('snake');
  switch (snake[0]) {
    case 19:
      // top right of button
      direction = width;
      break;
    case 99:
      // bottom right
      direction = -1;
      break;
    case 80:
      // bottom left
      direction = -width;
      break;
    case 0:
      // top left
      direction = 1;
      break;
    case 4:
      direction = width;
      break;
    case 64:
      direction = 1;
      break;
    case 74:
      direction = -width;
      break;
    case 14:
      direction = 1;
      break;
    case 93:
      direction = -width;
      break;
    case 33:
      direction = -1;
      break;
    case 25:
      direction = width;
      break;
    case 85:
      direction = -1;
      break;
  }
}

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 100; i++) {
    snekButtonGrid.append(document.createElement('div'));
  }
  const squares = document.querySelectorAll('.snek-button-board div');
  snake.forEach((index) => squares[index].classList.add('snake'));

  interval = setInterval(moveSnake, 150, squares);
});
