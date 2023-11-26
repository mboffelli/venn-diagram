document.querySelectorAll('.circle').forEach(item => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'scale(1.1)';
    item.style.opacity = '1';
    item.style.zIndex = '10';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'scale(1)';
    item.style.opacity = '0.7';
    item.style.zIndex = '1';
  });
});
