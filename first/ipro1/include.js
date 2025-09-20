[file name]: include.js
[file content begin]
document.addEventListener('DOMContentLoaded', function() {
    // Функция для загрузки и вставки HTML
    async function includeHTML() {
        try {
            // Включаем header
            const headerResponse = await fetch('header.html');
            if (!headerResponse.ok) throw new Error('Header not found');
            const headerData = await headerResponse.text();
            
            // Включаем footer
            const footerResponse = await fetch('footer.html');
            if (!footerResponse.ok) throw new Error('Footer not found');
            const footerData = await footerResponse.text();
            
            // Создаем временные контейнеры
            const headerContainer = document.createElement('div');
            headerContainer.innerHTML = headerData;
            
            const footerContainer = document.createElement('div');
            footerContainer.innerHTML = footerData;
            
            // Вставляем header в начало body (перед pagewrapper)
            const pagewrapper = document.querySelector('.pagewrapper');
            document.body.insertBefore(headerContainer.firstElementChild, pagewrapper);
            
            // Вставляем footer после pagewrapper
            document.body.insertBefore(footerContainer.firstElementChild, pagewrapper.nextSibling);
            
            // Переинициализируем скрипты после загрузки
            initScripts();
            
        } catch (error) {
            console.error('Ошибка загрузки компонентов:', error);
        }
    }
    
    // Функция для инициализации скриптов
    function initScripts() {
        // Здесь можно добавить инициализацию других скриптов
        console.log('Компоненты загружены');
        
        // Инициализируем основные скрипты
        if (typeof initMainScripts === 'function') {
            initMainScripts();
        }
    }
    
    // Запускаем загрузку
    includeHTML();
});
[file content end]
