function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const button1 = document.getElementById('button1');
const button2 = document.getElementById('button2');

function updateData() {
  document.getElementById('temperature').textContent = getRandomNumber(20, 30) + ' °C';
  document.getElementById('humidity').textContent = getRandomNumber(50, 80) + ' %';
  document.getElementById('light').textContent = getRandomNumber(200, 1000) + ' lux';
}

updateData();
setInterval(updateData, 1000);  // Cập nhật dữ liệu mỗi 3 giây

button1.addEventListener('click', toggleButtonState);
button2.addEventListener('click', toggleButtonState);

function toggleButtonState(event) {
  const button = event.target;
  button.classList.toggle('off');
  button.textContent = button.classList.contains('off') ? 'Off' : 'On';

  // Thay đổi màu nền của nút khi trạng thái chuyển đổi
  if (button.classList.contains('off')) {
    button.style.backgroundColor = '#e74c3c'; // Màu nền khi trạng thái là Off
  } else {
    button.style.backgroundColor = '#3498db'; // Màu nền khi trạng thái là On
  }
}