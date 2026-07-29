let products = [];





// Add Product

function addProduct() {



    const name =
        document.getElementById("productName").value;



    const price =
        document.getElementById("productPrice").value;



    const image =
        document.getElementById("productImage").value;





    const product = {


        id: Date.now(),

        name: name,

        price: Number(price),

        image: image


    };





    products.push(product);



    displayProducts();



    document.getElementById("productForm").reset();



}








// Display Products

function displayProducts(list = products) {



    const container =
        document.getElementById("productsContainer");



    // remove old cards

    container.replaceChildren();





    if (list.length === 0) {


        const message =
            document.createElement("div");


        message.className =
            "empty-message";


        message.textContent =
            "No Products Found";



        container.appendChild(message);



        return;


    }








    list.forEach(product => {



        // column

        const col =
            document.createElement("div");


        col.className =
            "col-md-4";







        // card

        const card =
            document.createElement("div");


        card.className =
            "product-card";








        // image

        const img =
            document.createElement("img");


        img.src =
            product.image;


        img.alt =
            product.name;








        // info container

        const info =
            document.createElement("div");


        info.className =
            "product-info";








        // name

        const title =
            document.createElement("h3");


        title.className =
            "product-name";


        title.textContent =
            product.name;








        // price

        const price =
            document.createElement("p");


        price.className =
            "product-price";


        price.textContent =
            product.price + " $";








        // delete button

        const deleteBtn =
            document.createElement("button");


        deleteBtn.className =
            "btn btn-danger delete-btn";


        deleteBtn.textContent =
            "Delete";



        deleteBtn.addEventListener("click", function () {


            deleteProduct(product.id);


        });








        // Build card


        info.appendChild(title);

        info.appendChild(price);

        info.appendChild(deleteBtn);



        card.appendChild(img);

        card.appendChild(info);



        col.appendChild(card);



        container.appendChild(col);



    });



}








// Delete Product

function deleteProduct(id) {



    products =
        products.filter(product => {


            return product.id !== id;


        });



    displayProducts();



}








// Search Products

function searchProducts() {



    const value =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase();





    const filteredProducts =
        products.filter(product => {



            return product.name
                .toLowerCase()
                .includes(value);



        });





    displayProducts(filteredProducts);



}