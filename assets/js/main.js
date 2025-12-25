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
            link.style.color = 'var(--primary-color)';
            link.style.borderLeftColor = 'var(--primary-color)';
            link.style.fontWeight = '400';
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
            updateActiveHeading();
        }, 50);
    });
    
    generateTableOfContents();
    
    function generateTableOfContents() {
        const contentPage = document.querySelector('.content-page');
        if (!contentPage) return;
        
        const headings = contentPage.querySelectorAll('h2, h3');
        if (headings.length === 0) return;
        
        contentPage.classList.add('has-toc');
        
        const toc = document.createElement('nav');
        toc.className = 'toc';
        
        const tocTitle = document.createElement('div');
        tocTitle.className = 'toc-title';
        tocTitle.textContent = '目录';
        toc.appendChild(tocTitle);
        
        const tocList = document.createElement('ul');
        
        headings.forEach(heading => {
            if (!heading.id) {
                const id = heading.textContent.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-\u4e00-\u9fa5]+/g, '');
                heading.id = id;
            }
            
            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = heading.textContent.replace(/^[🔍🔔🌐📚🎯🖥️🔐🛠️🛡️🚀⚠️]+\s*/, '');
            
            if (heading.tagName === 'H3') {
                link.classList.add('toc-h3');
            }
            
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetElement = document.getElementById(heading.id);
                if (targetElement) {
                    const offset = 80;
                    const elementPosition = targetElement.getBoundingClientRect().top;
                    const offsetPosition = elementPosition + window.pageYOffset - offset;
                    
                    window.scrollTo({
                        top: offsetPosition,
                        behavior: 'smooth'
                    });
                    
                    history.pushState(null, null, `#${heading.id}`);
                }
            });
            
            li.appendChild(link);
            tocList.appendChild(li);
        });
        
        toc.appendChild(tocList);
        document.body.appendChild(toc);
    }
    
    function updateActiveHeading() {
        const toc = document.querySelector('.toc');
        if (!toc) return;
        
        const headings = document.querySelectorAll('.content-page h2, .content-page h3');
        const tocLinks = toc.querySelectorAll('a');
        
        let activeHeading = null;
        const scrollPosition = window.scrollY + 100;
        
        headings.forEach(heading => {
            if (heading.offsetTop <= scrollPosition) {
                activeHeading = heading;
            }
        });
        
        tocLinks.forEach(link => {
            link.classList.remove('active');
        });
        
        if (activeHeading) {
            const activeLink = toc.querySelector(`a[href="#${activeHeading.id}"]`);
            if (activeLink) {
                activeLink.classList.add('active');
            }
        }
    }
});
