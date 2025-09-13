const btn = document.getElementById('no_b');

btn.addEventListener('mouseenter', () => {
  // x যেকোনো random (0 - 300px)
  const x = Math.floor(Math.random() * 300);

  // y সবসময় উপরের দিকে (negative value)
  const y = -Math.floor(Math.random() * 200); // উপরের দিকে max 200px যাবে

  btn.style.position = 'relative';
  btn.style.transition = 'transform 0.3s ease';
  btn.style.transform = `translate(${x}px, ${y}px)`;
});
