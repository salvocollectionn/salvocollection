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

function viewCart() {
    if (cart.length === 0) {
        alert("Cart is empty!");
        return;
    }

    let message = "🛒 CART\n\n";
    let total = 0;

    cart.forEach(function(item){
        message += item.product + " - Rs. " + item.price + "\n";
        total += item.price;
    });

    message += "\nTotal : Rs. " + total;

    alert(message);
}

function sendOrder() {

    let name = document.getElementById("name").value;
    let phone = document.getElementById("phone").value;
    let address = document.getElementById("address").value;

    if(name==="" || phone==="" || address===""){
        alert("Please fill all customer details.");
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
