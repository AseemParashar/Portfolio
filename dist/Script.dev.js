"use strict";

// Copy email to clipboard
function copyEmail() {
  var label = document.getElementById('copyEmailLabel');
  navigator.clipboard.writeText('parasharaseem@gmail.com').then(function () {
    label.textContent = 'copied!';
    setTimeout(function () {
      label.textContent = 'copy email';
    }, 1800);
  })["catch"](function () {
    label.textContent = 'failed';
    setTimeout(function () {
      label.textContent = 'copy email';
    }, 1800);
  });
} // Mobile nav toggle


var navToggle = document.getElementById('navToggle');
var navRight = document.getElementById('navRight');
var navBackdrop = document.getElementById('navBackdrop');

function closeNav() {
  navToggle.classList.remove('active');
  navRight.classList.remove('open');
  navBackdrop.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
}

function toggleNav() {
  var isOpen = navRight.classList.toggle('open');
  navToggle.classList.toggle('active', isOpen);
  navBackdrop.classList.toggle('open', isOpen);
  navToggle.setAttribute('aria-expanded', String(isOpen));
}

navToggle.addEventListener('click', toggleNav);
navBackdrop.addEventListener('click', closeNav);
document.querySelectorAll('.nav-links a').forEach(function (a) {
  return a.addEventListener('click', closeNav);
}); // Scroll fade-in

var observer = new IntersectionObserver(function (entries) {
  entries.forEach(function (e) {
    if (e.isIntersecting) e.target.classList.add('visible');
  });
}, {
  threshold: 0.08
});
document.querySelectorAll('.fade-in').forEach(function (el) {
  return observer.observe(el);
}); // Typing effect

var line = document.getElementById('typing-line');
var phrases = ['whoami → aseem_parashar', 'cat skills.txt → [CS, Data, PM]', 'status → open_to_work', 'git log → research, internships, leadership'];
var pi = 0,
    ci = 0,
    deleting = false;

function type() {
  var cur = phrases[pi];

  if (!deleting) {
    ci++;
    line.innerHTML = cur.slice(0, ci) + '<span class="cursor"></span>';

    if (ci === cur.length) {
      setTimeout(function () {
        deleting = true;
        type();
      }, 2000);
      return;
    }
  } else {
    ci--;
    line.innerHTML = cur.slice(0, ci) + '<span class="cursor"></span>';

    if (ci === 0) {
      deleting = false;
      pi = (pi + 1) % phrases.length;
    }
  }

  setTimeout(type, deleting ? 28 : 60);
}

type();

function downloadResume() {
  var a = document.createElement('a');
  a.href = 'AseemParashar_Resume.pdf';
  a.download = 'AseemParashar_Resume.pdf';
  a.click();
}
//# sourceMappingURL=Script.dev.js.map
