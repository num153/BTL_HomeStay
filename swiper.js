let list = document.querySelector(".slider .list");
let item = document.querySelectorAll(".slider .list .item");
let dots = document.querySelectorAll(" .dots li")
let active = 0;
function autoSlide() {
    active = (active + 1) % item.length; // k vuot qua 3
    reloadSlider();
}

let refresh = setInterval(autoSlide, 3000);
function reloadSlider(){
    let checkLeft=item[active].offsetLeft;
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