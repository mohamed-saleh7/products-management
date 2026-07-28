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
    let name=document.getElementById("productName").value;
    let price=Number(document.getElementById("productPrice").value);
    let image= document.getElementById("productImage").value;

    let product={
        name:name,
        price:price,
        image:image,
        id:products.length+1
    }
    products.push(product);

    displayProducts();

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


function displayProducts() {
let container=document.getElementById("productsContainer");
container.innerHTML="";

for(let i=0;i<products.length;i++){
let card=document.createElement("div");
let image=document.createElement("img");
let name= document.createElement("h5");
let price =document.createElement("p");
let button= document.createElement("button");
image.src=products[i].image;
image.alt=products[i].name;
name.textContent=products[i].name
price.textContent=products[i].price
button.textContent="Delete"
button.addEventListener("click", function () {
    deleteProduct(products[i].id);
});
card.append(image, name, price, button);
container.append(card);
card.className = "col-md-4";
button.className = "btn btn-danger";
}





}








// Delete Product
//
// Steps:
// 1- Receive product id
// 2- Remove product from products array
// 3- Call displayProducts()


function deleteProduct(id) {
    products=products.filter(product =>{
        return product.id!==id;
    })
        
    
    displayProducts();

    // TODO



}








// Search Products
//
// Steps:
// 1- Get search input value
// 2- Convert value to lowercase
// 3- Filter products by name
// 4- Call displayProducts() with results


function searchProducts() {

    let searchVal = document.getElementById("searchInput").value;

    searchVal = searchVal.toLowerCase();


    let filteredProducts = products.filter(product => {

        return product.name.toLowerCase().includes(searchVal);

    });


    let oldProducts = products;

    products = filteredProducts;

    displayProducts();

    products = oldProducts;
}