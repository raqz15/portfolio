document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;

    // Load the user's theme preference from localStorage
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme) {
        body.classList.toggle('dark-mode', currentTheme === 'dark');
        themeToggle.checked = currentTheme === 'dark';
    }

    // Add event listener to toggle theme
    themeToggle.addEventListener('change', () => {
        const isDarkMode = themeToggle.checked;
        body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    });
});
