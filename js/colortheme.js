// Handle the theme box toggle
const themeSwitcher = document.getElementById('themeSwitcher');
const themeBox = document.getElementById('themeBox');
const backdrop = document.getElementById('backdrop');

// Check localStorage for previously set theme
const storedThemeColor = localStorage.getItem('themeColor');
const storedHoverColor = localStorage.getItem('hoverColor');

if (storedThemeColor && storedHoverColor) {
  changeColor(storedThemeColor, storedHoverColor);
}

themeSwitcher.addEventListener('click', () => {
  themeBox.classList.toggle('active');
  backdrop.classList.toggle('active');
});

// Handle backdrop click to close the modal
backdrop.addEventListener('click', () => {
  themeBox.classList.remove('active');
  backdrop.classList.remove('active');
});

// Handle theme changes
themeBox.addEventListener('click', (e) => {
  if (e.target.tagName === 'BUTTON') {
    const themeColor = e.target.getAttribute('data-color');
    const hoverColor = e.target.getAttribute('data-hover');
    changeColor(themeColor, hoverColor);
    // Save theme to localStorage
    localStorage.setItem('themeColor', themeColor);
    localStorage.setItem('hoverColor', hoverColor);
  }
});

// Function to change the theme colors
function changeColor(themeColor, hoverColor) {
  const root = document.documentElement;
  root.style.setProperty('--theme-color', themeColor);
  root.style.setProperty('--hover-color', hoverColor);
  root.style.setProperty('--border-color', themeColor);
}