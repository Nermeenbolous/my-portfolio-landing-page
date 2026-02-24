const toggleBtn = document.getElementById('theme-toggle');
const currentTheme = localStorage.getItem('theme');

// Check for saved theme on load
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
}

toggleBtn.addEventListener('click', () => {
    let theme = document.documentElement.getAttribute('data-theme');
    
    if (theme === 'dark') {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    }
});
