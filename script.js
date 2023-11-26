document.querySelectorAll('.circle').forEach(item => {
  item.addEventListener('mouseover', () => {
    // Increase the size of the circle
    item.style.transform = 'scale(1.2)';
    item.style.zIndex = '10';
  });

  item.addEventListener('mouseout', () => {
    // Reset the size of the circle
    item.style.transform = 'scale(1)';
    item.style.zIndex = '1';
  });
});
