let count = 0;
const text = document.getElementById('text');
const counter = document.getElementById('counter');
const increaseBtn = document.getElementById('increase');
const resetBtn = document.getElementById('reset');

increaseBtn.addEventListener('click', () => {
  count++;
  counter.textContent = count;

  if (count === 3) {
    // カウントが3になったら
    increaseBtn.disabled = true; // ＋ボタンを無効化
    text.textContent = '3回クリックしたので、リセットしてください。';
  }
});
resetBtn.addEventListener('click', () => {
  count = 0;
  counter.textContent = count;
  text.textContent = '押してください';
  increaseBtn.disabled = false; // ＋ボタンを有効化
});
