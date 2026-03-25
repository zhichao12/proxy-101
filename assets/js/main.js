document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const themeIcon = themeToggle ? themeToggle.querySelector('.theme-icon') : null;
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const emojiRegex = /(?:\p{Regional_Indicator}{2}|\p{Emoji_Presentation}|\p{Extended_Pictographic})(?:\uFE0F|\u200D(?:\p{Emoji_Presentation}|\p{Extended_Pictographic}))*?/gu;

    stripEmojiFromDocument();

    const savedTheme = localStorage.getItem('theme') || 'light-mode';
    body.className = savedTheme;
    updateThemeIcon(savedTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const currentTheme = body.classList.contains('light-mode') ? 'light-mode' : 'dark-mode';
            const newTheme = currentTheme === 'light-mode' ? 'dark-mode' : 'light-mode';

            body.className = newTheme;
            localStorage.setItem('theme', newTheme);
            updateThemeIcon(newTheme);
        });
    }

    function updateThemeIcon(theme) {
        if (!themeIcon || !themeToggle) return;
        themeIcon.textContent = theme === 'light-mode' ? 'Dark' : 'Light';
        themeToggle.setAttribute(
            'aria-label',
            theme === 'light-mode' ? '切换到深色模式' : '切换到浅色模式'
        );
    }

    function stripEmoji(value) {
        return value.replace(emojiRegex, '');
    }

    function stripEmojiFromDocument() {
        document.title = stripEmoji(document.title).trim();

        const walker = document.createTreeWalker(
            document.body,
            NodeFilter.SHOW_TEXT,
            {
                acceptNode(node) {
                    const parent = node.parentElement;
                    if (!parent || ['SCRIPT', 'STYLE'].includes(parent.tagName)) {
                        return NodeFilter.FILTER_REJECT;
                    }
                    return NodeFilter.FILTER_ACCEPT;
                }
            }
        );

        const textNodes = [];
        while (walker.nextNode()) {
            textNodes.push(walker.currentNode);
        }

        textNodes.forEach((node) => {
            node.nodeValue = stripEmoji(node.nodeValue);
        });

        document.querySelectorAll('h1, h2, h3, h4, h5, a, button, th, td').forEach((element) => {
            element.childNodes.forEach((child) => {
                if (child.nodeType === Node.TEXT_NODE) {
                    child.nodeValue = stripEmoji(child.nodeValue)
                        .replace(/\s{2,}/g, ' ')
                        .replace(/^\s+/, '');
                }
            });
        });
    }

    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const currentPath = window.location.pathname;

    navLinks.forEach(link => {
        const href = link.getAttribute('href') || '';
        const baseHref = href.split('#')[0];
        if (baseHref === currentPath || currentPath.includes(baseHref)) {
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
        if (!heading.id) {
            heading.id = heading.textContent.toLowerCase()
                .replace(/\s+/g, '-')
                .replace(/[^\w\-\u4e00-\u9fa5]+/g, '');
        }

        heading.style.cursor = 'pointer';
        heading.addEventListener('click', () => {
            window.location.hash = heading.id;
        });
    });

    if (window.location.hash) {
        setTimeout(() => {
            const element = document.querySelector(window.location.hash);
            if (element) {
                element.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
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
                heading.id = heading.textContent.toLowerCase()
                    .replace(/\s+/g, '-')
                    .replace(/[^\w\-\u4e00-\u9fa5]+/g, '');
            }

            const li = document.createElement('li');
            const link = document.createElement('a');
            link.href = `#${heading.id}`;
            link.textContent = stripEmoji(heading.textContent).trim();

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
                        behavior: prefersReducedMotion ? 'auto' : 'smooth'
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
