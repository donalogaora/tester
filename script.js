// Phone Stand Image Fade
const phoneStandImageElement = document.getElementById('toggle-image');
const phoneStandImages = [
    '../assets/shop/phonestand_black.webp',
    '../assets/shop/phonestand_white.webp',
    '../assets/shop/phonestand_space_grey.webp',
    '../assets/shop/phonestand_dark_blue.webp',
    '../assets/shop/phonestand_red.webp',
    '../assets/shop/phonestand_orange.webp'
];
let phoneStandCurrentIndex = 0;
let phoneStandCarouselInterval;
let phoneStandIsCarouselActive = true;

// Soap Cradle Image Fade
const soapCradleImageElement = document.getElementById('soap-toggle-image');
const soapCradleImages = [
    '../assets/shop/black_aquadry_soap_cradle.png',
    '../assets/shop/white_aquadry_soap_cradle.png',
    '../assets/shop/space_grey_aquadry_soap_cradle.png',
    '../assets/shop/blue_aquadry_soap_cradle.png',
    '../assets/shop/red_aquadry_soap_cradle.png',
    '../assets/shop/orange_aquadry_soap_cradle.png'
];
let soapCradleCurrentIndex = 0;
let soapCradleCarouselInterval;
let soapCradleIsCarouselActive = true;

// Function to start the phone stand carousel
function startPhoneStandCarousel() {
    if (phoneStandIsCarouselActive) {
        phoneStandCarouselInterval = setInterval(() => {
            phoneStandImageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            phoneStandImageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                phoneStandCurrentIndex = (phoneStandCurrentIndex + 1) % phoneStandImages.length;
                phoneStandImageElement.src = phoneStandImages[phoneStandCurrentIndex];
                phoneStandImageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
}

// Function to start the soap cradle carousel
function startSoapCradleCarousel() {
    if (soapCradleIsCarouselActive) {
        soapCradleCarouselInterval = setInterval(() => {
            soapCradleImageElement.style.transition = "opacity 0.5s";  // Smooth fade transition
            soapCradleImageElement.style.opacity = 0;

            // After fade-out, change the image source and fade back in
            setTimeout(() => {
                soapCradleCurrentIndex = (soapCradleCurrentIndex + 1) % soapCradleImages.length;
                soapCradleImageElement.src = soapCradleImages[soapCradleCurrentIndex];
                soapCradleImageElement.style.opacity = 1;
            }, 50);  // Wait 50ms to fade out image before switching
        }, 1500); // Change image every 1.5 seconds
    }
}

// Start both carousels initially
startPhoneStandCarousel();
startSoapCradleCarousel();

// Define delivery and in-person links for each color
const paymentLinks = {
    black: {
        delivery: "https://www.paypal.com/ncp/payment/G3UNG7URVGTSY",
        inperson: "https://www.paypal.com/ncp/payment/VHL6BB6NFB5R8"
    },
    white: {
        delivery: "https://www.paypal.com/ncp/payment/YDUY83NNRPYZE",
        inperson: "https://www.paypal.com/ncp/payment/6XWV77VL9NZXC"
    },
    space_grey: {
        delivery: "https://www.paypal.com/ncp/payment/JG62G4S9BN9F6",
        inperson: "https://www.paypal.com/ncp/payment/A7J7T4JGBRKT6"
    },
    blue: {
        delivery: "https://www.paypal.com/ncp/payment/TDQ26KXWKTNU8",
        inperson: "https://www.paypal.com/ncp/payment/433RBJJS2VRQL"
    },
    red: {
        delivery: "https://www.paypal.com/ncp/payment/FX2CVP3MKK78S",
        inperson: "https://www.paypal.com/ncp/payment/NNH76WM8W9YLU"
    },
    orange: {
        delivery: "https://www.paypal.com/ncp/payment/NZ83GKRKY2XLY",
        inperson: "https://www.paypal.com/ncp/payment/QXZD8DFPEL6ME"
    },
    soap_black: {
        delivery: "https://www.paypal.com/ncp/payment/ACWBJUEK4S8SW",
        inperson: "https://www.paypal.com/ncp/payment/37WRLULFKHZWA"
    },
    soap_white: {
        delivery: "https://www.paypal.com/ncp/payment/N2NPTQVLY3HZN",
        inperson: "https://www.paypal.com/ncp/payment/JYNDV3SQPJBXQ"
    },
    soap_space_grey: {
        delivery: "https://www.paypal.com/ncp/payment/GS2L84FKRDM9G",
        inperson: "https://www.paypal.com/ncp/payment/UZMTHDNWZR2V6"
    },
    soap_blue: {
        delivery: "https://www.paypal.com/ncp/payment/TXSHBCPD65PS6",
        inperson: "https://www.paypal.com/ncp/payment/4C7T3CVJZ4PCQ"
    },
    soap_red: {
        delivery: "https://www.paypal.com/ncp/payment/TS7T8QRH67L64",
        inperson: "https://www.paypal.com/ncp/payment/DZUVZQT96FFUA"
    },
    soap_orange: {
        delivery: "https://www.paypal.com/ncp/payment/ARL7F5GXSJNDN",
        inperson: "https://www.paypal.com/ncp/payment/E5ZZCW82CLQJN"
    }
};

// Color selection logic
let selectedColor = ''; // Store the selected color

// Select the color circles for phone stand
const colorCircles = document.querySelectorAll('.circle');
const toggleImage = document.getElementById('toggle-image');

// Loop through each color circle and add a click event listener
colorCircles.forEach(circle => {
    circle.addEventListener('click', () => {
        // Get the data-color attribute value from the clicked circle
        selectedColor = circle.getAttribute('data-color');
        
        // Update the image source based on the color selected
        toggleImage.src = `/assets/shop/${selectedColor}_3d_printed_phone_stand_preview.png`;  // Static color image
        
        // Stop the image carousel once a color is selected
        clearInterval(phoneStandCarouselInterval);  // Stop the carousel for phone stand
        phoneStandIsCarouselActive = false; // Set carousel as inactive
        phoneStandImageElement.style.opacity = 1;  // Ensure the image is fully visible immediately

        // Update the selected circle styling
        colorCircles.forEach(c => c.classList.remove('selected')); // Remove "selected" class from all circles
        circle.classList.add('selected'); // Add "selected" class to the clicked circle
    });
});

// Add click event listener to all order buttons for phone stand
const orderButtons = document.querySelectorAll('.shop-order-button');
orderButtons.forEach(orderButton => {
    orderButton.addEventListener('click', function() {
        // Get the color from the button's data-color attribute or from the selected circle
        const colorFromButton = orderButton.getAttribute('data-color');
        const color = colorFromButton || selectedColor;

        if (color) {
            // Show a confirmation dialog to select delivery or in-person
            const isDelivery = confirm("Do you want posted delivery? Click 'OK' for posted delivery, 'Cancel' for in-person delivery.");

            // Determine the appropriate link based on the user's choice
            const link = isDelivery 
                ? paymentLinks[color].delivery 
                : paymentLinks[color].inperson;

            // Redirect to the chosen link
            window.location.href = link;
        } else {
            // If no color is selected, prompt the user to select one
            alert('Please select a color first!');
        }
    });
});

// Function to scroll to a specific product section after the page is loaded
window.addEventListener("load", function() {
  const hash = window.location.hash;
  if (hash) {
    const element = document.querySelector(hash);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }
});

// Redirect to the products page and scroll to the section
document.getElementById("soap-order-button").addEventListener("click", function() {
  window.location.href = "https://shop.donalogaora.com/all-products#aqua-dry-soap-cradle";
});
