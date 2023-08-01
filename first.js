<!DOCTYPE html>
<html>
<head>
  <title>Interactive Element Example</title>
</head>
<body>
  <h1 id="changeText" style="color: black;">Click the button to change my color!</h1>
  <button id="colorButton">Change Color</button>

  <script src="script.js"></script>
</body>
</html>

SCRIPT.JS


const colorButton = document.getElementById('colorButton');
const changeText = document.getElementById('changeText');


function getRandomColor() {
  const letters = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function changeTextColor() {
  const newColor = getRandomColor();
  changeText.style.color = newColor;
}

colorButton.addEventListener('click', changeTextColor);
