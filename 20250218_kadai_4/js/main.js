const inputBtn = document.getElementById('inputBtn');
const message = document.getElementById('message');
const ul = document.querySelector('ul');

inputBtn.addEventListener('click', function () {
  let text = document.getElementById('inputText').value;

  if (text === '') {
    message.textContent = '何も入力されてません';
  } else {
    message.textContent = `「${text}」が入力されました`;

    const li = document.createElement('li');
    li.textContent = text;
    ul.append(li);
  }
});

// ()=>{} アロー関数　同じ意味
// function () {}　　同じ意味
