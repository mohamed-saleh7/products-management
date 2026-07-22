// Handles Events


const productForm =
    document.getElementById("productForm");



const searchInput =
    document.getElementById("searchInput");



// Add Product Event

productForm.addEventListener("submit", function (event) {


    event.preventDefault();


    addProduct();


});



// Search Event

searchInput.addEventListener("input", function () {


    searchProducts();


});


// Initial Display

displayProducts();