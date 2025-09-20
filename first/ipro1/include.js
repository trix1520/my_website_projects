document.addEventListener('DOMContentLoaded', function() {
    // Включаем header
    fetch('header.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body > .pagewrapper').insertAdjacentHTML('afterbegin', data);
        });

    // Включаем footer
    fetch('footer.html')
        .then(response => response.text())
        .then(data => {
            document.querySelector('body > .pagewrapper').insertAdjacentHTML('beforeend', data);
        });
});
