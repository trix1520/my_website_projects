[file name]: script.js
[file content begin]
function initMainScripts() {
    // Ленивая загрузка hero image
    function loadHeroImage() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        // Добавляем фолбэк фон
        hero.style.backgroundColor = '#2E2C30';
        
        const heroImage = new Image();
        heroImage.src = 'images/hero-bg.jpg';
        heroImage.onload = function() {
            console.log('Hero image loaded');
        };
        
        heroImage.onerror = function() {
            console.warn('Hero image failed to load');
        };
    }
    
    // Обработка поиска
    function initSearch() {
        const searchInput = document.querySelector('.search input');
        if (searchInput) {
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    e.preventDefault();
                    performSearch(this.value);
                }
            });
            
            searchInput.addEventListener('input', function(e) {
                console.log('Search:', e.target.value);
            });
        }
    }
    
    function performSearch(query) {
        if (query.trim() !== '') {
            console.log('Performing search for:', query);
            // Здесь будет реализация поиска
        }
    }
    
    // Проверяем, что hero-секция доступна для взаимодействия
    function checkHeroVisibility() {
        const hero = document.querySelector('.hero');
        const heroSocial = document.querySelector('.hero-social');
        
        if (hero && heroSocial) {
            console.log('Hero section is visible and interactive');
        }
    }
    
    // Инициализация
    loadHeroImage();
    initSearch();
    checkHeroVisibility();
    
    // Добавляем небольшой таймаут для гарантии загрузки всех элементов
    setTimeout(() => {
        console.log('All scripts initialized');
    }, 100);
}

// Ждем полной загрузки страницы
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initMainScripts);
} else {
    initMainScripts();
}
[file content end]
