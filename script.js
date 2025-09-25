// Theme toggle
const themeToggle = document.getElementById('theme-toggle');
themeToggle.addEventListener('click', () => {
  document.documentElement.classList.toggle('light');
  themeToggle.textContent = document.documentElement.classList.contains('light') ? '☀' : '☾';
});

// Hamburger menu toggle
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobile-menu');
hamburger.addEventListener('click', () => {
  mobileMenu.classList.toggle('active');
  const expanded = hamburger.getAttribute('aria-expanded') === 'true';
  hamburger.setAttribute('aria-expanded', String(!expanded));
});

// Year update
const yearEl = document.getElementById('year');
if(yearEl) yearEl.textContent = new Date().getFullYear();

// Typewriter text
const typewriterEl = document.getElementById('typewriter');
if(typewriterEl){
  const phrases = ['Film • Theatre • TV', 'Character Actor', 'Professional Portfolio'];
  let i=0, j=0, current='';
  function typeWriter() {
    if(i>=phrases.length)i=0;
    const phrase = phrases[i];
    current = phrase.slice(0, j+1);
    typewriterEl.textContent = current;
    j++;
    if(j===phrase.length){i++;j=0;setTimeout(typeWriter,1500);} 
    else {setTimeout(typeWriter,150);}
  }
  typeWriter();
}

// Stats count animation
const stats = document.querySelectorAll('.stat .num');
stats.forEach(stat=>{
  const target = +stat.dataset.target;
  let count=0;
  const step = target/200;
  function update(){ count+=step; if(count>=target){stat.textContent=target;} else{ stat.textContent=Math.floor(count); requestAnimationFrame(update);} }
  update();
});

// Animate highlight when in viewport
const highlights = document.querySelectorAll('.highlight');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
    }
  });
}, { threshold: 0.5 });

highlights.forEach(el => observer.observe(el));

