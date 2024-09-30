const plus = document.getElementById("plus");
const minus = document.getElementById("minus");
const text = document.getElementById("count-text");
const people = document.getElementById("total_participant");
const totalPriceElement = document.getElementById("total-price");
const realTicketPrice = document.getElementById("realTicketPrice");

const subTotal = document.getElementById("sub_total");
const inputTotalPpn = document.getElementById("total_ppn");
const totalAmount = document.getElementById("total_amount");

const pricePerItem = realTicketPrice.value; // default price per item in Rupiah

function formatRupiah(number) {
    return "Rp " + number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

function updateTotalPrice() {
    let currentValue = parseInt(people.value);
    let totalPrice = currentValue * pricePerItem;

    // if added pajak 
    const ppn = 0.11;
    const totalPpn = totalPrice * ppn;
    const grandTotalPrice = totalPrice + totalPpn;

    totalPriceElement.textContent = formatRupiah(grandTotalPrice);
    subTotal.value = totalPrice;
    inputTotalPpn.value = totalPpn;
    totalAmount.value = grandTotalPrice;
}

plus.addEventListener("click", () => {
    let currentValue = parseInt(people.value);
    currentValue++;
    people.value = currentValue;
    text.textContent = currentValue;
    updateTotalPrice();
});

minus.addEventListener("click", () => {
    let currentValue = parseInt(people.value);
    if (currentValue > 1) {
        currentValue--;
        people.value = currentValue;
        text.textContent = currentValue;
        updateTotalPrice();
    }
});

// Initialize total price
updateTotalPrice();