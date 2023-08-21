const snekButtonGrid = document.getElementById('snek-button-bg');

document.addEventListener('DOMContentLoaded', () => {
  for (let i = 0; i < 100; i++) {
    snekButtonGrid.append(document.createElement('div'));
  }
});
