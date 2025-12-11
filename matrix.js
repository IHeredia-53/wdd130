const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

canvas.width = canvas.offsetWidth || window.innerWidth;
canvas.height = canvas.offsetHeight || 400; // Height of hero section

const alphabet = 'アァカサタナハマヤャラワABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
const fontSize = 20;
const columns = Math.floor(canvas.width / fontSize);
const drops = Array(columns).fill(1);

function drawMatrix() {
  ctx.fillStyle = 'rgba(13,17,23,0.8)';
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = '#39d353'; // Matrix green
  ctx.font = fontSize + 'px monospace';

  for (let i = 0; i < drops.length; i++) {
    const text = alphabet[Math.floor(Math.random() * alphabet.length)];
    ctx.fillText(text, i * fontSize, drops[i] * fontSize);

    if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) drops[i] = 0;
    drops[i]++;
  }
}

setInterval(drawMatrix, 40);

window.addEventListener('resize', () => {
  canvas.width = canvas.offsetWidth || window.innerWidth;
  canvas.height = canvas.offsetHeight || 400;
});
