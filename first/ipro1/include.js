document.addEventListener('DOMContentLoaded', function() {
    // Функция для загрузки и вставки HTML
    async function includeHTML() {
        const components = [
            { name: 'header', file: 'header.html' },
            { name: 'footer', file: 'footer.html' }
        ];
        
        for (const component of components) {
            try {
                const response = await fetch(component.file);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                const html = await response.text();
                
                if (component.name === 'header') {
                    const pagewrapper = document.querySelector('.pagewrapper');
                    if (pagewrapper) {
                        pagewrapper.insertAdjacentHTML('afterbegin', html);
                    }
                } else if (component.name === 'footer') {
                    const pagewrapper = document.querySelector('.pagewrapper');
                    if (pagewrapper) {
                        pagewrapper.insertAdjacentHTML('beforeend', html);
                    }
                }
                
                console.log(`${component.name} loaded successfully`);
                
            } catch (error) {
                console.error(`Error loading ${component.name}:`, error);
            }
        }
        
        // Переинициализируем скрипты после загрузки
        initScripts();
    }
    
    // Функция для инициализации скриптов
    function initScripts() {
        // Инициализация специфичных для header/footer скриптов
        console.log('Header and footer components initialized');
    }
    
    // Запускаем загрузку
    includeHTML();
});
