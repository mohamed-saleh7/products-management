# Product Management System

## JavaScript Task


## Project Overview

In this task, you will build the functionality of a simple Product Management System.

You are provided with:

- A complete HTML interface
- Complete CSS styling
- Product images

Your responsibility is to complete the JavaScript code that controls the application behavior.

The project allows users to add products, display products, delete products, and search for products.


---

# Project Features


## Add Product

The user can add a new product using the form.

Each product contains:

- Product ID
- Product Name
- Product Price
- Product Image


Example:

```javascript
{
    id: 1,
    name: "Phone",
    price: 500,
    image: "assets/images/phone.jpg"
}
```


When the user submits the form:

1. Read the values from the inputs.
2. Create a product object.
3. Store the product inside the products array.
4. Display the updated product list.
5. Clear the form inputs.



---

## Display Products

All products should be displayed inside the products container.

Each product should appear as a card containing:

- Product image
- Product name
- Product price
- Delete button


The product cards must be created dynamically using JavaScript.


Example structure:

```
-------------------
|                 |
|     Image       |
|                 |
-------------------
| Product Name    |
| Price           |
| Delete Button   |
-------------------
```



You must create elements using DOM methods.

Do not write HTML strings.



---

## Delete Product

Each product has a delete button.

When the user clicks delete:

1. Find the selected product.
2. Remove it from the products array.
3. Refresh the displayed products.


The product should disappear immediately from the page.



---

## Search Products

The application contains a search input.

The user can search products by name.

Example:


Products:

```
Laptop
Phone
Watch
Camera
```


Search:

```
pho
```


Result:

```
Phone
```


The search should update the displayed products while typing.



---

# JavaScript Requirements


Your solution must include:


## Variables

Store application data using variables.


Example:

```javascript
let products = [];
```



---

## Objects

Each product should be represented as an object.


Example:

```javascript
{
    id: 1,
    name: "Laptop",
    price: 1000,
    image: "assets/images/laptop.jpg"
}
```



---

## Functions

Complete these functions:


```javascript
addProduct()

displayProducts()

deleteProduct(id)

searchProducts()
```



Each function should have a clear responsibility.



---

## DOM Manipulation

Use JavaScript to control the page.

Required methods:

```javascript
document.getElementById()

document.createElement()

element.textContent

element.appendChild()
```



---

## Arrays

Use array methods to manage products.


Required:

```javascript
push()

filter()
```



---

# Restrictions


Do not:

- Modify HTML files
- Modify CSS files
- Rename IDs
- Rename classes
- Use external libraries




---

# Folder Structure


```
product-management/

│
├── index.html
│
├── css/
│   └── style.css
│
├── assets/
│   └── images/
│
└── js/
    ├── app.js
    └── main.js

```



---


Before submitting, check that:


## Add Product

- [ ] A new product can be added
- [ ] Product information is correct
- [ ] The image appears


## Display Products

- [ ] All products appear correctly
- [ ] Each product has a delete button


## Delete Product

- [ ] Clicking delete removes the correct product


## Search

- [ ] Searching shows matching products only
- [ ] Search works while typing


---

# Submission

Submit:

```
js/app.js
```


The final application should work without changing any HTML or CSS files.