document.addEventListener('DOMContentLoaded', function() {
    // Функция для загрузки и вставки HTML
    async function includeHTML() {
        try {
            // Включаем header
            const headerResponse = await fetch('header.html');
            const headerData = await headerResponse.text();
            
            // Включаем footer
            const footerResponse = await fetch('footer.html');
            const footerData = await footerResponse.text();
            
            // Вставляем header в начало pagewrapper
            const pagewrapper = document.querySelector('.pagewrapper');
            pagewrapper.insertAdjacentHTML('afterbegin', headerData);
            
            // Вставляем footer в конец pagewrapper
            pagewrapper.insertAdjacentHTML('beforeend', footerData);
            
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
    }
    
    // Запускаем загрузку
    includeHTML();
});
