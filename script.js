
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;


const savedTheme = localStorage.getItem('portfolio-theme') || 'light';
htmlElement.setAttribute('data-theme', savedTheme);
updateToggleButton(savedTheme);


themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    
    htmlElement.setAttribute('data-theme', newTheme);
    
  
    localStorage.setItem('portfolio-theme', newTheme);
    
    
    updateToggleButton(newTheme);
});


function updateToggleButton(theme) {
    themeToggle.innerHTML = theme === 'dark' ? '☀️ Light Mode' : '🌙 Dark Mode';
}


window.addEventListener('scroll', () => {
    const cards = document.querySelectorAll('.product-card');
    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;
        if(cardTop < window.innerHeight - 100) {
            card.style.opacity = '1';
        }
    });
});
