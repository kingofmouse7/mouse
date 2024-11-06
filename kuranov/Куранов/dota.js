const iconContainer = document.querySelector('.icon-container');

iconContainer.addEventListener('click', () => {
  const icon = iconContainer.querySelector('.icon');
  const hiddenIcon = iconContainer.querySelector('.icon-hidden');

  icon.classList.toggle('active');
  hiddenIcon.classList.toggle('active');

  
});
const originalColors = {};
document.querySelectorAll('.half-circle-button').forEach(button => {
    originalColors[button.innerText] = button.style.backgroundColor || window.getComputedStyle(button).backgroundColor;
});

function changeColor(button) {
    const color = button.getAttribute('data-color');
    button.style.backgroundColor = color;
    setTimeout(() => {
        button.style.backgroundColor = originalColors[button.innerText];
    }, 500);
}