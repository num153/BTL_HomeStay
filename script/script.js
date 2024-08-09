window.onload = function(){
    let toggleBtn = document.querySelector('.togglebar');
    let toggleIcon = document.querySelector('.togglebar i');
    let drdw = document.querySelector('.toggle-dropdown');
    toggleBtn.onclick = function(){
        const isOpen = drdw.classList.toggle('open');
        toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
    }
}