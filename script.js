let cart = [];

function addToCart(product, price) {
    cart.push({ product, price });
    const toast = document.getElementById("toast");
toast.innerHTML = `
<div style="display:flex;align-items:center;gap:12px;">
    <span style="font-size:26px;">✅</span>
    <div>
        <strong>Added to Cart</strong><br>
        <small>${product} has been added successfully.</small>
    </div>
</div>`;
toast.classList.add("show");

setTimeout(() => {
    toast.classList.remove("show");
}, 2500);
}

function viewCart(){

    if(cart.length===0){
        const popup=document.createElement("div");

        popup.innerHTML=`
        <div class="warning-popup">
            <div class="warning-box">
                <h2>🛒 Cart is Empty</h2>
                <p>You haven't added any products yet.</p>
                <button onclick="this.parentElement.parentElement.remove()">Continue Shopping</button>
            </div>
        </div>`;

        document.body.appendChild(popup);
        return;
    }

    let items="";
    let total=0;

    cart.forEach(item=>{
        items+=`<p>• ${item.product} - Rs. ${item.price}</p>`;
        total+=item.price;
    });

    const popup=document.createElement("div");

    popup.innerHTML=`
    <div class="warning-popup">
        <div class="warning-box">
            <h2>🛒 Your Cart</h2>

            ${items}

            <hr>

            <h3>Total : Rs. ${total}</h3>

            <button onclick="this.parentElement.parentElement.remove()">Close</button>
        </div>
    </div>`;

    document.body.appendChild(popup);
}

function sendOrder() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

 if(name==="" || phone==="" || address===""){
    showPopup();
    return;
}

    let message =
    "🛍️ SALVO COLLECTION ORDER%0A%0A" +
    "👤 Name: " + name + "%0A" +
    "📞 Phone: " + phone + "%0A" +
    "📍 Address: " + address + "%0A%0A";

    let total = 0;

    cart.forEach(function(item){
        message += "• " + item.product + " - Rs. " + item.price + "%0A";
        total += item.price;
    });

    message += "%0A💰 Total: Rs. " + total;

    window.location.href =
    "https://wa.me/94783456345?text=" + message;
}

function openPopup(src){
    document.getElementById("popup").style.display="flex";
    document.getElementById("popupImg").src=src;
}

function closePopup(){
    document.getElementById("popup").style.display="none";
}

setTimeout(function () {
    const loader = document.getElementById("loader");
    if (loader) {
        loader.style.display = "none";
    }
}, 2000);
function searchProduct(){

    let input = document.getElementById("search").value.toLowerCase();

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        let name = product.querySelector("h2").innerText.toLowerCase();

        if(name.includes(input)){
            product.style.display="block";
        }else{
            product.style.display="none";
        }

    });

}
function filterProducts(category){

    let products = document.querySelectorAll(".product");

    products.forEach(product => {

        if(category=="all"){
            product.style.display="block";
        }
        else if(product.classList.contains(category)){
            product.style.display="block";
        }
        else{
            product.style.display="none";
        }

    });

}
function closeDiscount(){
    document.getElementById("discountPopup").style.display="none";
}
window.addEventListener("load", function () {

    setTimeout(function () {
        document.getElementById("loader").style.display = "none";
    }, 2000);

});

function createSnow(){

    const flake = document.createElement("span");

    flake.innerHTML = "❄";

    flake.style.left = Math.random() * 100 + "%";
    flake.style.fontSize = "10px";
    flake.style.animationDuration = "6s";

    snowBox.appendChild(flake);

    setTimeout(()=>{
        flake.remove();
    },6000);
}

setInterval(createSnow,800);
const themeBtn = document.getElementById("themeBtn");

if(document.body.classList.contains("light")){
    themeBtn.innerHTML = "☀️";
}else{
    themeBtn.innerHTML = "🌙";
}
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove",(e)=>{
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});
const delivery = document.getElementById("delivery");
const deliveryPrice = document.getElementById("deliveryPrice");

delivery.addEventListener("change", () => {
    deliveryPrice.innerHTML = "Delivery: Rs." + delivery.value;
});
const popup = document.getElementById("deliveryPopup");
const town = document.getElementById("town");
const charge = document.getElementById("charge");

function openDelivery(){
    popup.style.display="flex";
}

town.onchange=()=>{
    charge.innerHTML="Rs."+town.value;
}

function continueOrder(){
    popup.style.display="none";
    sendOrder(); // ඔයාගේ WhatsApp order function එක
}
const counters = document.querySelectorAll(".count");

let started = false;

window.addEventListener("scroll",()=>{

    const section = document.querySelector(".counter");

    if(!started && section.getBoundingClientRect().top < window.innerHeight){

        started = true;

        counters.forEach(counter=>{

            let target = Number(counter.dataset.target);
            let number = 0;

            let speed = target / 50;

            let timer = setInterval(()=>{

                number += speed;

                if(number >= target){
                    counter.innerHTML = target + "+";
                    clearInterval(timer);
                }else{
                    counter.innerHTML = Math.floor(number);
                }

            },30);

        });

    }

});

function showPopup(){
    const popup = document.createElement("div");

    popup.innerHTML = `
    <div class="warning-popup">
        <div class="warning-box">
            <h2>⚠️ Complete Your Details</h2>
            <p>Please fill in your Name, Phone Number and Delivery Address before placing your order.</p>
            <button onclick="this.parentElement.parentElement.remove()">OK</button>
        </div>
    </div>`;

    document.body.appendChild(popup);
}