const inputBtn = document.getElementById('inputBtn');
const inputText = document.getElementById('inputText');
const message = document.getElementById('message');
const ul = document.querySelector('ul');

function addItem() {
  const text = inputText.value.trim();

  if (text === '') {
    message.textContent = '何も入力されてません';
    inputText.value = '';
  } else {
    message.textContent = `「${text}」が入力されました`;

    const li = document.createElement('li');
    li.textContent = text;

    const deleteBtn = document.createElement('button');
    deleteBtn.textContent = '削除';

    deleteBtn.addEventListener('click', function () {
      ul.removeChild(li);
    });

    li.appendChild(deleteBtn);
    ul.appendChild(li);
    inputText.value = '';
  }
}

inputBtn.addEventListener('click', addItem);

inputText.addEventListener('keypress', function (e) {
  if (e.key === 'Enter') {
    addItem();
  }
});
