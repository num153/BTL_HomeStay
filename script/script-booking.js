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
//add to cart
const btn = document.querySelectorAll("button");

const rightItem = document.querySelector(".right-item");
const emptyMessage = document.getElementById("empty-message");
const form = document.querySelector("form");

rightItem.style.display = "none";

btn.forEach(function(button) {
    button.addEventListener("click", function(event) {
        const btnItem = event.target;
        const product = btnItem.parentElement.parentElement;

        const roomName = product.querySelector(".room-infor h3").innerText;
        const roomPriceText = product.querySelector(".room-price .money").innerText;
        const roomNumber = product.querySelector("select[name='numbers']").value;

        const roomPrice = parseFloat(roomPriceText.replace(/,/g, ''));

        const Cost = roomPrice * roomNumber;

        const roomInfo = document.createElement("div"); //tao div
        roomInfo.classList.add("room-info-item");
        roomInfo.innerHTML = `
            <h3>${roomName}</h3>
            <p>Số lượng: ${roomNumber}</p>
            <p>Giá tiền: ${Cost.toLocaleString()}</p>
        `;

        if (rightItem.style.display === "none") {
            rightItem.style.display = "block";
            emptyMessage.style.display = "none";
        }
        rightItem.appendChild(roomInfo);
    });
});

form.addEventListener("submit", function(event) {
    event.preventDefault();

    const roomInfoItems = document.querySelectorAll(".room-info-item");

    const name = form.querySelector("input[name='name']").value;
    const phone = form.querySelector("input[name='phone']").value;
    const email = form.querySelector("input[name='email']").value;

    if (roomInfoItems.length > 0) {
        let alertMessage = `Tên: ${name}\nSố điện thoại: ${phone}\nEmail: ${email}\n\nCác sản phẩm trong giỏ hàng:\n`;

        roomInfoItems.forEach(function(item) {
            const roomName = item.querySelector("h3").innerText;
            const roomNumber = item.querySelector("p:nth-of-type(1)").innerText;
            const roomPrice = item.querySelector("p:nth-of-type(2)").innerText;

            alertMessage += `${roomName}\n${roomNumber}\n${roomPrice}\n\n`;
        });

        alert(alertMessage);
    } else {
        alert("Giỏ hàng rỗng");
    }
});

