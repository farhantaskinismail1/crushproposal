const btn = document.getElementById('no_b');

btn.addEventListener('mouseenter', () => {
  const x = Math.floor(Math.random() * 300);

  const y = -Math.floor(Math.random() * 200);
  btn.style.position = 'relative';
  btn.style.transition = 'transform 0.3s ease';
  btn.style.transform = `translate(${x}px, ${y}px)`;
});
/////////////////////////////////////////
btn.addEventListener('click', () => {
  const x = Math.floor(Math.random() * 400);
  const y = -Math.floor(Math.random() * 300);

  btn.style.position = 'relative';
  btn.style.transition = 'transform 0.3s ease';
  btn.style.transform = `translate(${x}px, ${y}px)`;
});
