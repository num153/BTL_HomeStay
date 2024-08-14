window.onload = function(){
    let toggleBtn = document.querySelector('.togglebar');
    let toggleIcon = document.querySelector('.togglebar i');
    let drdw = document.querySelector('.toggle-dropdown');
    toggleBtn.onclick = function(){
        const isOpen = drdw.classList.toggle('open');
        toggleIcon.classList = isOpen ? 'fa-solid fa-xmark' : 'fa-solid fa-bars';
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