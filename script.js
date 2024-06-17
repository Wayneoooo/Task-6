document.addEventListener("DOMContentLoaded", function() {
    const submitButton = document.querySelector("button[type='submit']");
    const requiredFields = [
        document.getElementById("Order Description"),
        document.getElementById("Order Quantity"),
        document.getElementById("Device Specifications"),
        document.getElementById("Delivery Date"),
        document.getElementById("Delivery Address"),
        document.getElementById("Full Name"),
        document.getElementById("E-mail Address"),
        document.getElementById("Phone Number")
    ];

    submitButton.addEventListener("click", function(event) {
        event.preventDefault();
        
        let allFieldsFilled = true;

        requiredFields.forEach(function(field) {
            if (field.value.trim() === "") {
                allFieldsFilled = false;
                field.style.border = "2px solid red";
            } else {
                field.style.border = "1px solid #ccc";
            }
        });

        if (allFieldsFilled) {
            alert("Your order has been submitted successfully");
        } else {
            alert("Please fill in all the required fields");
        }
    });
});

