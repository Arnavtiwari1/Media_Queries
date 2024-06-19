document.addEventListener('DOMContentLoaded', (event) => {
    const img = document.getElementById('responsive-img');
    img.addEventListener('click', () => {
        img.classList.toggle('zoom-out');
    });
});
