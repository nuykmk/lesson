let count = 0;
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;
});
decreaseBtn.addEventListener('click', () => {
  count--;
  counter.textContent = count;
});
resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
});
