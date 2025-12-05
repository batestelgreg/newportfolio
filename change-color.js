function changeColor() {
    const box = document.querySelector('.box');
    const colorText = document.querySelector('.current-color-text');
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0');


    box.style.backgroundColor = randomColor;
    if (colorText) colorText.textContent = 'Current Color';
}

function resetColor() {
    const box = document.querySelector('.box');
    const colorText = document.querySelector('.current-color-text');
  
    box.style.backgroundColor = 'blue';
    if (colorText) colorText.textContent = 'Default Color';
}