window.onload = function(){
  const toggleBTN = document.querySelector('.toggle_btn')
  const toggleBtnIcon = document.querySelector('.toggle_btn i')
  const dropDownMenu = document.querySelector('.dropdown_menu')
  
  toggleBTN.onclick = function (){
      dropDownMenu.classList.toggle('open')
      const isOpen = dropDownMenu.classList.contains('open')
      toggleBtnIcon.classList = isOpen
      ? 'fa-solid fa-xmark'
      : 'fa-solid fa-bars'
  };
    //Header Slider
    var slideImg = document.getElementById('bannerImg');
    var img = new Array(
      "images/banner1.jpg",
      "images/banner2.jpg",
      "images/banner3.jpg"
    );
    var i = 0; 
    function slider(){
      if(i > img.length -1){
          i=0;
      }
      slideImg.src = img[i];
      i++;
      setTimeout(slider(),3000);
    }
    // Feedback Swiper
    var swiper = new Swiper(".feedback-content", {
        slidesPerView: 3,
        spaceBetween: 20,
        freeMode: true,
        navigation: {
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        },
        breakpoints:{
          0:{
            slidesPerView: 1,
          },
          768:{
            slidesPerView: 2,
          },
          950:{
            slidesPerView: 3,
          },
        }
      });
}