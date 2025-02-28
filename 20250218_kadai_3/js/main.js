const inputBtn = document.getElementById('inputBtn');
const message = document.getElementById('message');

inputBtn.addEventListener('click', function () {
  let text = document.getElementById('inputText').value;

  if (text === '') {
    message.textContent = '何も入力されてません';
  } else {
    message.textContent = `「${text}」が入力されました`;
  }
});
