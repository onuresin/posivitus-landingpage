document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const item = header.parentElement;
        const isActive = item.classList.contains('active');

        document.querySelectorAll('.accordion-item').forEach(el => {
            el.classList.remove('active');
            el.querySelector('.icon').textContent = '+'; // Tüm ikonları sıfırla
        });

        if (!isActive) {
            item.classList.add('active');
            item.querySelector('.icon').textContent = '-'; // Aktif olana - ekle
        }
    });
});