const btn = document.getElementById('no_b');

function moveButton() {
  const maxX = window.innerWidth - btn.offsetWidth;
  const maxY = window.innerHeight - btn.offsetHeight;

  const x = Math.floor(Math.random() * maxX);
  const y = Math.floor(Math.random() * maxY);

  btn.style.position = 'absolute';
  btn.style.left = `${x}px`;
  btn.style.top = `${y}px`;
  btn.style.transition = 'all 0.3s ease';
}

btn.addEventListener('mouseenter', moveButton);

btn.addEventListener('click', moveButton);
