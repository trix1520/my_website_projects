// Дополнительные скрипты для сайта
document.addEventListener('DOMContentLoaded', function() {
    // Ленивая загрузка hero image
    function loadHeroImage() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const heroImage = new Image();
        heroImage.src = 'images/hero-bg.jpg';
        heroImage.onload = function() {
            console.log('Hero image loaded successfully');
        };
        
        heroImage.onerror = function() {
            console.error('Failed to load hero image');
        };
    }
    
    // Обработка поиска
    function initSearch() {
        const searchInput = document.querySelector('.search input');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                if (e.target.value.length > 2) {
                    console.log('Search query:', e.target.value);
                    // Здесь можно добавить логику поиска
                }
            });
            
            searchInput.addEventListener('keypress', function(e) {
                if (e.key === 'Enter') {
                    console.log('Search submitted:', e.target.value);
                    // Здесь можно добавить логику отправки поиска
                }
            });
        }
    }
    
    // Инициализация
    try {
        loadHeroImage();
        initSearch();
        console.log('All scripts initialized successfully');
    } catch (error) {
        console.error('Error initializing scripts:', error);
    }
});
