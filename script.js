// Only hide sections for the fade-in once this script is running,
// so content never stays invisible if the script fails to load.
document.documentElement.classList.add('js');

// ---------- Theme switch ----------
// The inline script in <head> already set data-theme (saved choice, else system preference).
const root = document.documentElement;
const themeButtons = document.querySelectorAll('.theme-toggle [data-theme]');

function applyTheme(theme) {
  root.setAttribute('data-theme', theme);
  themeButtons.forEach((b) => b.setAttribute('aria-pressed', String(b.dataset.theme === theme)));
}

applyTheme(root.getAttribute('data-theme') || 'dark');
themeButtons.forEach((b) => b.addEventListener('click', () => {
  applyTheme(b.dataset.theme);
  try { localStorage.setItem('theme', b.dataset.theme); } catch (e) { /* storage unavailable */ }
}));

// ---------- Mobile menu ----------
const header = document.querySelector('.site-header');
const toggle = document.querySelector('.nav-toggle');
const menu = document.getElementById('nav-menu');

function setMenu(open) {
  menu.classList.toggle('open', open);
  toggle.setAttribute('aria-expanded', String(open));
}

toggle.addEventListener('click', () => setMenu(!menu.classList.contains('open')));
menu.addEventListener('click', (e) => { if (e.target.closest('a')) setMenu(false); });
document.addEventListener('click', (e) => { if (!header.contains(e.target)) setMenu(false); });
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu.classList.contains('open')) {
    setMenu(false);
    toggle.focus();
  }
});
// Reset if the window is resized to the desktop layout while the menu is open
window.matchMedia('(min-width: 900px)').addEventListener('change', (e) => { if (e.matches) setMenu(false); });

// ---------- Scroll effects ----------
const sections = document.querySelectorAll('.reveal');
const navLinks = document.querySelectorAll('.nav-links a');

if ('IntersectionObserver' in window) {
  // Fade sections in as they scroll into view
  const reveal = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        reveal.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });
  sections.forEach((s) => reveal.observe(s));
} else {
  sections.forEach((s) => s.classList.add('visible'));
}

// Highlight the nav link for the section currently near the top of the screen
const spySections = [...document.querySelectorAll('main section[id]')];

function updateActiveLink() {
  const atBottom = window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 2;
  let current = atBottom ? spySections[spySections.length - 1] : null;
  if (!current) {
    spySections.forEach((s) => { if (s.getBoundingClientRect().top <= window.innerHeight * 0.4) current = s; });
  }
  navLinks.forEach((link) => {
    const active = !!current && link.getAttribute('href') === '#' + current.id;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'true');
    else link.removeAttribute('aria-current');
  });
}
window.addEventListener('scroll', updateActiveLink, { passive: true });
updateActiveLink();

document.getElementById('year').textContent = new Date().getFullYear();
