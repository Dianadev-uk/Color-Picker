import './style.css'

const COLOR_PALETTE = {
  "#EF476F": "Bright Pink",
  "#FFD166": "Sunglow",
  "#06D6A0": "Emerald",
  "#118AB2": "Blue (NCS)",
  "#073B4C": "Midnight Green",
  
};

const generateOptions = () => {
  const colorOptions = Object.keys(COLOR_PALETTE).map((color) => {
    const colorPickerSelect = document.getElementById('color-picker');
    const option = document.createElement('option');
    option.value = color;
    option.textContent = COLOR_PALETTE[color];
    colorPickerSelect.append(option);
  });
};

const addEventListenerColorPicker = () => {
  const colorPickerSelect = document.getElementById('color-picker');
  const colorName = document.getElementById('color-name');
  colorPickerSelect.addEventListener('change', (event) => {
    const newColor = event.target.value;
    document.body.style.backgroundColor = newColor;
    const colorNameText = `${newColor} | ${COLOR_PALETTE[newColor]}`; // remembering that this symbol | means 'also' (like an and)
    colorName.textContent = COLOR_PALETTE[newColor] ? colorNameText : " - ";
  });
};

generateOptions();
addEventListenerColorPicker();