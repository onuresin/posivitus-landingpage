document.addEventListener("DOMContentLoaded", function () {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const menuModal = document.querySelector('.menu-modal');

    menuBtn.addEventListener('click', function() {
        menuModal.style.display = 'flex';
    });

    closeBtn.addEventListener('click', function(){
       menuModal.style.display = 'none';
    });
    menuModal.addEventListener('click', function(event){
        if(event.target === menuModal) {
            display = 'none';
        }});
}
)