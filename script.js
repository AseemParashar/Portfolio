// Copy email to clipboard
function copyEmail() {
  const label = document.getElementById('copyEmailLabel');
  navigator.clipboard.writeText('parasharaseem@gmail.com').then(() => {
    label.textContent = 'copied!';
    setTimeout(() => { label.textContent = 'copy email'; }, 1800);
  }).catch(() => {
    label.textContent = 'failed';
    setTimeout(() => { label.textContent = 'copy email'; }, 1800);
  });
}

// Mobile nav toggle
const navToggle = document.getElementById('navToggle');
const navRight = document.getElementById('navRight');
const navBackdrop = document.getElementById('navBackdrop');

function closeNav() {
  navToggle.classList.remove('active');
  navRight.classList.remove('open');
  navBackdrop.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}
function toggleNav() {
  const isOpen = navRight.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navBackdrop.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}
navToggle.addEventListener('click', toggleNav);
navBackdrop.addEventListener('click', closeNav);
document.querySelectorAll('.nav-links a').forEach(a => a.addEventListener('click', closeNav));

// Scroll fade-in
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
}, { threshold: 0.08 });
document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Typing effect
const line = document.getElementById('typing-line');
const phrases = [
  'whoami → aseem_parashar',
  'cat skills.txt → [CS, Data, PM]',
  'status → open_to_work',
  'git log → research, internships, leadership'
];
let pi = 0, ci = 0, deleting = false;
function type() {
  const cur = phrases[pi];
  if (!deleting) {
    ci++;
    line.innerHTML = cur.slice(0, ci) + '<span class="cursor"></span>';
    if (ci === cur.length) { setTimeout(() => { deleting = true; type(); }, 2000); return; }
  } else {
    ci--;
    line.innerHTML = cur.slice(0, ci) + '<span class="cursor"></span>';
    if (ci === 0) { deleting = false; pi = (pi + 1) % phrases.length; }
  }
  setTimeout(type, deleting ? 28 : 60);
}
type();

function downloadResume() {
  const a = document.createElement('a');
  a.href = 'AseemParashar_Resume.pdf';
  a.download = 'AseemParashar_Resume.pdf';
  a.click();
}
