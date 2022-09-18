import data from './data.js'

//define Variables
const itemsContainer = document.querySelector('#items');



//produces images on the page
for(let i = 0; i <data.length; i += 1){
    const newDiv = document.createElement('div'); // <div></div>
    newDiv.className = 'item'; //  <div class = 'item' ></div>
    const img = document.createElement('img'); //<img>
    img.src = data[i].image; //links image source to image in data.js
    img.width = 300;
    img.height = 300;
    newDiv.appendChild(img); // adds img to new Div
    //create P element for Description
    const description = document.createElement ('P');
    description.innerText= data[i].desc; 
    newDiv.append(description);
    //Create P element for Price
    const price = document.createElement('P');
    price.innerText = data[i].price;
    newDiv.appendChild(price);
    const button = document.createElement('button'); // Make a button 
    button.id = data[i].name; //add an  id name to the button
    button.dataset.price = data[i].price //creates a custom attribute called data-price.
    button.innerHTML = "Add to Cart";
    newDiv.appendChild(button) ;
    itemsContainer.appendChild(newDiv); //adds newDiv to item container in html  
}

//shopping cart
const cart = [];


function addToCart(name, price) {
    for (let i = 0; i < cart.length; i += 1){
        if(cart[i].name === name){
            cart[i].qty += 1
            return 
        }
    }

    //create an object to store name, price and qty
    const item = {
        name: name,
        price: price,
        qty: 1
    }
    cart.push(item); //pushes item object in the cart
    console.log(cart);
}


function showCartItems() {
    //for loop calculates & displays qty
    let qty = 0;
    for(let i =0; i < cart.length; i += 1){
        qty += cart[i].qty;

    }
    console.log(`You have ${qty} in your cart`); 

    for(let i =0; i < cart.length; i += 1) {
        console.log(`-${cart[i].name}, $${cart[i].price} x ${cart[i].qty}`);
    }
    //for loop calculates and displays total
    let total = 0;
    for (let i = 0; i < cart.length; i += 1){
        total += cart[i].price * cart[1].qty;
    }
    console.log(`the total is ${total}`);
}

addToCart ('apple', 7.00);
addToCart ('oranges', 6.55);
showCartItems();
