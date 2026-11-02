const themeButtons = document.querySelectorAll('.header__theme-menu-button');
const allowedThemes = ['light', 'dark', 'auto'];

function setTheme(theme) {
  const selectedTheme = allowedThemes.includes(theme) ? theme : 'auto';
  document.body.classList.remove('theme-light', 'theme-dark', 'theme-auto');
  document.body.classList.add(`theme-${selectedTheme}`);
  themeButtons.forEach((button) => {
    const active = button.classList.contains(`header__theme-menu-button_type_${selectedTheme}`);
    button.classList.toggle('header__theme-menu-button_active', active);
    button.disabled = active;
    button.setAttribute('aria-pressed', String(active));
  });
}

let savedTheme = 'auto';
try {
  savedTheme = localStorage.getItem('theme') || 'auto';
} catch {

}
setTheme(savedTheme);

themeButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const themeClass = [...button.classList].find((name) => name.includes('_type_'));
    const chosenTheme = themeClass.split('_type_')[1];
    setTheme(chosenTheme);
    try {
      localStorage.setItem('theme', chosenTheme);
    } catch {
      
    }
  });
});
