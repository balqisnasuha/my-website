// Rotate messages
const messages = [
    "You make my life brighter ✨",
    "Thank you for being amazing 💕",
    "Forever grateful for you 😘",
    "Love you endlessly ❤️"
  ];
  let msgIndex = 0;
  const pEl = document.querySelector('p');
  
  setInterval(() => {
    pEl.textContent = messages[msgIndex];
    msgIndex = (msgIndex + 1) % messages.length;
  }, 2500); // every 2.5 seconds
  
  // Falling hearts animation
  const canvas = document.getElementById('hearts');
  const ctx = canvas.getContext('2d');
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  
  const hearts = [];
  const colors = ['#ff3366', '#ff6699', '#ff99cc'];
  
  // Create a single heart object
  function createHeart(x = Math.random() * canvas.width) {
    return {
      x: x,
      y: -20,
      size: Math.random() * 20 + 10,
      speed: Math.random() * 2 + 1,
      color: colors[Math.floor(Math.random() * colors.length)]
    };
  }
  
  // Initial hearts
  for (let i = 0; i < 50; i++) {
    hearts.push(createHeart());
  }
  
  // Draw hearts
  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    hearts.forEach(h => {
      ctx.fillStyle = h.color;
      ctx.font = h.size + 'px Arial';
      ctx.fillText('❤️', h.x, h.y);
      h.y += h.speed;
      if (h.y > canvas.height) {
        Object.assign(h, createHeart());
      }
    });
    requestAnimationFrame(draw);
  }
  
  draw();
  
  // Update canvas size on window resize
  window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  });
  
  // Add extra hearts on click
  window.addEventListener('click', (e) => {
    for (let i = 0; i < 10; i++) { // add 10 hearts at click position
      hearts.push(createHeart(e.clientX + (Math.random()*50-25)));
    }
  });
  