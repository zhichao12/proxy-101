document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle.querySelector('.theme-icon');
    
    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);
    
    themeToggle.addEventListener('click', () => {
        const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
        const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';
        
        body.className = newTheme;
        localStorage.setItem('theme', newTheme);
        updateThemeIcon(newTheme);
    });
    
    function updateThemeIcon(theme) {
        themeIcon.textContent = theme === 'light-mode' ? '🌙' : '☀️';
    }
    
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const currentPath = window.location.pathname;
    
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath || 
            currentPath.includes(link.getAttribute('href'))) {
            link.style.backgroundColor = 'var(--bg-tertiary)';
            link.style.color = 'var(--primary-color)';
            link.style.fontWeight = '600';
        }
    });
    
    const tables = document.querySelectorAll('.content-page table');
    tables.forEach(table => {
        if (!table.parentElement.classList.contains('comparison-table')) {
            const wrapper = document.createElement('div');
            wrapper.className = 'comparison-table';
            table.parentNode.insertBefore(wrapper, table);
            wrapper.appendChild(table);
        }
    });
    
    const headings = document.querySelectorAll('.content-page h2, .content-page h3');
    headings.forEach(heading => {
        const id = heading.textContent.toLowerCase()
            .replace(/\s+/g, '-')
            .replace(/[^\w\-\u4e00-\u9fa5]+/g, '');
        heading.id = id;
        
        heading.style.cursor = 'pointer';
        heading.addEventListener('click', () => {
            window.location.hash = id;
        });
    });
    
    if (window.location.hash) {
        setTimeout(() => {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }, 100);
    }
    
    let scrollTimeout;
    window.addEventListener('scroll', () => {
        clearTimeout(scrollTimeout);
        scrollTimeout = setTimeout(() => {
            const navbar = document.querySelector('.navbar');
            if (window.scrollY > 100) {
                navbar.style.boxShadow = 'var(--shadow-md)';
            } else {
                navbar.style.boxShadow = 'var(--shadow-sm)';
            }
        }, 100);
    });
});
