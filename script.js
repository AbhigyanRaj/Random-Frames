document.addEventListener('DOMContentLoaded', () => {
    const loader = document.querySelector('.loader');
    const mainContent = document.querySelector('.main');

    // Hide the loader after 1 second
    setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.remove('hidden');
    }, 1000); // 1000 milliseconds = 1 second
});
