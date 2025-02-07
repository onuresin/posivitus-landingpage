document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const menuModal = document.querySelector('.menu-modal');

    menuBtn.addEventListener('click', function() {
        menuBtn.classList.toggle('active');
        menuModal.style.display = menuModal.style.display === 'flex' ? 'none' : 'flex';
    });

    closeBtn.addEventListener('click', function(){
       menuModal.style.display = 'none';
       menuBtn.classList.remove('active');
    });
    menuModal.addEventListener("click", function (event) {
        if (event.target === menuModal) {
            menuModal.style.display = "none";
            menuBtn.classList.remove("active");
        }
    });
}
)