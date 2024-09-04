const toggleBTN = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const dropDownMenu = document.querySelector('.dropdown_menu')

toggleBTN.onclick = function (){
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen
    ? 'fa-solid fa-xmark'
    : 'fa-solid fa-bars'
}

const iconContents = document.querySelectorAll('.icon-content');

iconContents.forEach((iconContent) => {
    iconContent.addEventListener('mouseenter', () => {
    
        iconContent.style.backgroundColor = '#c7b39a';
        iconContent.querySelector('.icon-show i').style.color = '#fff';
        iconContent.querySelector('.icon-number').style.color = '#fff'; 
        iconContent.querySelector('.icon-text').style.color = '#fff'; 
    });

    iconContent.addEventListener('mouseleave', () => {
        
        iconContent.style.backgroundColor = ''; 
        iconContent.querySelector('.icon-show i').style.color = '';
        iconContent.querySelector('.icon-number').style.color = ''; 
        iconContent.querySelector('.icon-text').style.color = ''; 
    });
});
    //Back to top
    const toTop=document.getElementById('back-to-top');
    window.addEventListener("scroll", function (){
      if(window.pageYOffset > 100){
        toTop.classList.add("show");
      }else{
        toTop.classList.remove("show");
      }
    })