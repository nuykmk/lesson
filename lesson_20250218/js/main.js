let age = 10;

if (age >= 18) {
  console.log('大人です');
} else {
  console.log('子供です');
}

// 18歳以上で大人
// 未満で子供
// 1-10まで繰り返し

for (let i = 1; i <= 10; i++) {
  console.log(i);
}

let num = 1;
while (num <= 10) {
  console.log(num);
  num++;
}
// クリックしたら侍をレッスン

const btn = document.getElementById('btn');
const text = document.getElementById('text');

btn.addEventListener('click', () => {
  text.textContent = 'レッスン';
});
