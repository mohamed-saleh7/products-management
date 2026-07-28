let products = [];


// Add Product
//
// Steps:
// 1- Get product name from input
// 2- Get product price from input
// 3- Get product image from select
// 4- Create product object
// 5- Add object to products array
// 6- Call displayProducts()
// 7- Reset the form

function addProduct() {

    // 1
    const productName = document.getElementById("productName").value.trim();

    // 2
    const productPrice = document.getElementById("productPrice").value;

    // 3
    const productImage = document.getElementById("productImage").value;

        if (productName === "") {
        alert("Please enter a product name.");
        return;
    }

    if (/^\d+$/.test(productName)) {
        alert("Product name cannot be only numbers.");
        return;
    }
    
    // 4
    const product = {
        id: products.length + 1,
        name: productName,
        price: productPrice,
        image: productImage
    };

    // 5
    products.push(product);

    // 6
    displayProducts();

    // 7
    document.getElementById("productForm").reset();

}




// Display Products
//
// Steps:
// 1- Select productsContainer
// 2- Remove old products
// 3- Loop through products array
// 4- Create card elements using:
//      createElement()
//      textContent
//      appendChild()
// 5- Add:
//      image
//      product name
//      product price
//      delete button
// 6- Display cards inside container

function displayProducts(productsList = products) {

    // 1
    const productsContainer = document.getElementById("productsContainer");

    // 2
    productsContainer.innerHTML = "";

    // 3
    productsList.forEach(function (product) {

        // 4
        const col = document.createElement("div");
        col.className = "col-md-4";

        const card = document.createElement("div");
        card.className = "product-card";

        const image = document.createElement("img");
        image.src = product.image;

        const info = document.createElement("div");
        info.className = "product-info";

        const name = document.createElement("h3");
        name.className = "product-name";
        name.textContent = product.name;

        const price = document.createElement("p");
        price.className = "product-price";
        price.textContent = product.price;

        const deleteButton = document.createElement("button");
        deleteButton.className = "btn btn-danger delete-btn";
        deleteButton.textContent = "Delete";

        deleteButton.addEventListener("click", function () {
            deleteProduct(product.id);
        });

        // 5
        info.appendChild(name);
        info.appendChild(price);
        info.appendChild(deleteButton);

        card.appendChild(image);
        card.appendChild(info);

        col.appendChild(card);

        // 6
        productsContainer.appendChild(col);

    });

}




// Delete Product
//
// Steps:
// 1- Receive product id
// 2- Remove product from products array
// 3- Call displayProducts()

function deleteProduct(id) {

    // 2
    products = products.filter(function (product) {
        return product.id !== id;
    });

    // 3
    displayProducts();

}




// Search Products
//
// Steps:
// 1- Get search input value
// 2- Convert value to lowercase
// 3- Filter products by name
// 4- Call displayProducts() with results

function searchProducts() {

    // 1
    const searchValue = document.getElementById("searchInput").value;

    // 2
    const lowerCaseValue = searchValue.toLowerCase();

    // 3
    const filteredProducts = products.filter(function (product) {
        return product.name.toLowerCase().includes(lowerCaseValue);
    });

    // 4
    displayProducts(filteredProducts);

}