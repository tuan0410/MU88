const themeToggle = document.querySelector('#theme-toggle');
const systemTheme = matchMedia('(prefers-color-scheme: dark)');
let hasPreference = false;
try { hasPreference = ['light', 'dark'].includes(localStorage.getItem('theme')); } catch {}
function applyTheme(theme) {
    document.documentElement.dataset.theme = theme;
    const dark = theme === 'dark';
    const label = dark ? 'Nền sáng' : 'Nền tối';
    themeToggle.setAttribute('aria-pressed', String(dark));
    themeToggle.setAttribute('aria-label', dark ? 'Chuyển sang nền sáng' : 'Chuyển sang nền tối');
    document.querySelector('#theme-label').textContent = label;
    document.querySelector('#theme-icon').textContent = dark ? '☀' : '☾';
}
applyTheme(document.documentElement.dataset.theme);
themeToggle.addEventListener('click', () => {
    const nextTheme = document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(nextTheme);
    hasPreference = true;
    try { localStorage.setItem('theme', nextTheme); } catch {}
});
systemTheme.addEventListener('change', (event) => {
    if (!hasPreference) applyTheme(event.matches ? 'dark' : 'light');
});
const menuToggle = document.querySelector('#menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
    navigation.classList.remove('is-open');
    menuToggle.setAttribute('aria-expanded', 'false');
    menuToggle.setAttribute('aria-label', 'Mở menu');
}
menuToggle.addEventListener('click', () => {
    const open = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(open));
    menuToggle.setAttribute('aria-label', open ? 'Đóng menu' : 'Mở menu');
});
navigation.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
        closeMenu();
        menuToggle.focus();
    }
});
document.addEventListener('click', (event) => { if (!event.target.closest('header')) closeMenu(); });
matchMedia('(min-width: 721px)').addEventListener('change', (event) => { if (event.matches) closeMenu(); });
document.querySelector('#year').textContent = new Date().getFullYear();
