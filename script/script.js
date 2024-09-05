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
    let list = document.querySelector(".slider .list");
    let item = document.querySelectorAll(".slider .list .item");
    let dots = document.querySelectorAll(" .dots li")
    let active = 0;
    function autoSlide() {
        active = (active + 1) % item.length; // k vuot qua 3
        reloadSlider();
    }
    // console.log(item[0].offsetLeft); la bang 0
    let refresh = setInterval(autoSlide, 3000);
    function reloadSlider(){
      //item1 1006
        let checkLeft=item[active].offsetLeft; //khoang cach left cua list den mep left cua item
      //dich chuyen ve trai mot khoang bang checkLeft
        list.style.left = -checkLeft + 'px';
        let lastDot = document.querySelector(" .dots li.on");
        lastDot.classList.remove("on");
        dots[active].classList.add("on");
        clearInterval(refresh); //dat intervel lai tu dau
        refresh = setInterval(autoSlide, 3000);
    }
    dots.forEach((li,key) =>{
        li.addEventListener("click", function(){
            active = key;
            reloadSlider();
        })
    })
    //Back to top
    const toTop=document.getElementById('back-to-top');
    window.addEventListener("scroll", function (){
      if(window.scrollY > 100){
        toTop.classList.add("show");
      }else{
        toTop.classList.remove("show");
      }
    })
    //FAQs toggle
    const fag = document.querySelectorAll('.faq-one');
    for(let f of fag){
      f.addEventListener("click",function(){
        f.classList.toggle("active");
      });
    }
    //Booking Slider
    document.getElementById('next').onclick = function(){
      const widthItem = document.getElementById('item').offsetWidth + 10;
      document.getElementById('list-container').scrollLeft += widthItem;
    }
    document.getElementById('prev').onclick = function(){
      const widthItem = document.getElementById('item').offsetWidth + 10;
      document.getElementById('list-container').scrollLeft -= widthItem;
    }
}