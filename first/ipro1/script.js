// Дополнительные скрипты для сайта
document.addEventListener('DOMContentLoaded', function() {
    // Ленивая загрузка hero image
    function loadHeroImage() {
        const hero = document.querySelector('.hero');
        if (!hero) return;
        
        const heroImage = new Image();
        heroImage.src = 'images/hero-bg.jpg';
        heroImage.onload = function() {
            console.log('Hero image loaded');
        };
    }
    
    // Обработка поиска
    function initSearch() {
        const searchInput = document.querySelector('.search input');
        if (searchInput) {
            searchInput.addEventListener('input', function(e) {
                console.log('Search:', e.target.value);
            });
        }
    }
    
    // Инициализация
    loadHeroImage();
    initSearch();
});
