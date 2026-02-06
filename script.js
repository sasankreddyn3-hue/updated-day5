function goToPrice() {
    document.getElementById("price").scrollIntoView({
        behavior: "smooth"
    });
}

function calculatePrice() {
    const variant = parseInt(document.getElementById("variant").value);
    const fuel = parseInt(document.getElementById("fuel").value);

    if (variant === 0) {
        alert("Please select a variant");
        return;
    }

    const total = variant + fuel;

    document.getElementById("result").textContent =
        "Estimated Price: ₹" + total.toLocaleString("en-IN");
}
