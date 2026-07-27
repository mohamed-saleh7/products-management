let products = [
    {
        id: 1,
        name: "Phone",
        price: 500,
        image: "assets/images/phone.jpg"
    },

    {
        id: 2,
        name: "Laptop",
        price: 1200,
        image: "assets/images/laptop.jpg"
    },

    {
        id: 3,
        name: "Watch",
        price: 500,
        image: "assets/images/watch.jpg"
    }
];







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

const name = document.getElementById("productName").value;
const price = document.getElementById("productPrice").value;
const image = document.getElementById("productImage").value;
const product = {
    id: Date.now(),
    name: name,
    price: price,
    image: image
};

products.push(product);
displayProducts(products);
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


function displayProducts(productsToDisplay = products) {

const container = document.getElementById("productsContainer");
container.innerHTML = "";  
for (let product of productsToDisplay) {

const card = document.createElement("div");
card.className = "col-md-4";

const productCard = document.createElement("div");
productCard.className = "product-card";

const productInfo = document.createElement("div");
productInfo.className = "product-info";

const img = document.createElement("img");
img.src = product.image;
productCard.appendChild(img);

const name = document.createElement("h3");
name.className = "product-name";
name.textContent = product.name;
productInfo.appendChild(name);

const price = document.createElement("p");
price.className = "product-price";
price.textContent = "$" + product.price;
productInfo.appendChild(price)

const deleteBtn = document.createElement("button");
deleteBtn.className = "btn btn-danger delete-btn";
deleteBtn.textContent = "Delete";
productInfo.appendChild(deleteBtn);
deleteBtn.onclick = function () {
deleteProduct(product.id);
};

productCard.appendChild(productInfo);
card.appendChild(productCard);
container.appendChild(card);
}


}








// Delete Product
//
// Steps:
// 1- Receive product id
// 2- Remove product from products array
// 3- Call displayProducts()


function deleteProduct(id) {

products = products.filter(function (product) {
    return product.id !== id;
});

displayProducts(products);

}








// Search Products
//
// Steps:
// 1- Get search input value
// 2- Convert value to lowercase
// 3- Filter products by name
// 4- Call displayProducts() with results


function searchProducts() {

const searchValue = document.getElementById("searchInput").value;

const filteredProducts = products.filter(function (product) {
    return product.name.toLowerCase().includes(searchValue.toLowerCase());
});
displayProducts(filteredProducts);

}