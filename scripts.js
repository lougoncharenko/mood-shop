import data from './data.js'

//define Variables
const itemsContainer = document.querySelector('#items');
const itemList = document.getElementById('item-list');
const cartQty = document.getElementById('cart-qty');
const cartTotal =document.getElementById('cart-total');
const cartButtons = Array.from(document.querySelectorAll("button"))

console.log(cartButtons);

//connecting the add to cart button to the shopping cart
// cartButtons.forEach(e => e.addEventListener('click', () => {
//     addToCart(e.getAttribute('name'), e.getAttribute('price'))
//     showCartItems()
//   }));

  cartButtons.forEach(elt => elt.addEventListener('click', () =>{
    console.log('Button clicked')
  }))

//   all_items_button.forEach( e => e.addEventListener('click', () => {
//     addToCart(e.getAttribute('ied'), e.getAttribute('data-price'))
//     showCartItems()
//   }))
 


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
    //button
    const button = document.createElement('button'); // Make a button 
    button.id = data[i].name; //add an  id name to the button
    button.dataset.price = data[i].price //creates a custom attribute called data-price.
    button.innerHTML = "Add to Cart";
    newDiv.appendChild(button) ;
    itemsContainer.appendChild(newDiv); //adds newDiv to item container in html  
}

//shopping cart
const cart = [];

//---------------------------------------------------------------------------
//add item
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

//---------------------------------------------------------------------------
//show items
function showCartItems() {
    const qty = getQty(); //calls function and returns total at the same time
    cartQty.innerHTML = `You have ${qty} items in your cart`;

    let itemStr = ' '
    for(let i =0; i < cart.length; i += 1) {
        itemStr += `<li> ${cart[i].name}
         $${cart[i].price} x ${cart[i].qty} =  
         $${cart[i].price * cart[i].qty} </li>`;
    }
    itemList.innerHTML = itemStr;
    let total = calculateTotal();
    cartTotal.innerHTML = `Your cart total is ${total}`
  
}

//---------------------------------------------------------------------------
//get quantity
function getQty(){
    //for loop calculates & displays qty
    let qty = 0;
    for(let i =0; i < cart.length; i += 1){
        qty += cart[i].qty;
       }
       return qty;
}

//---------------------------------------------------------------------------
// calculate total
function calculateTotal(){
    //for loop calculates and displays total
    let total = 0;
    for (let i = 0; i < cart.length; i += 1){
        total += cart[i].price * cart[1].qty;
    }
    return total.toFixed(2);
}
//---------------------------------------------------------------------------
//remove item
function removeItem(name, qty = 0){
    for(let i = 0; i < cart.length; i += 1){
        if(cart[i].name === name){
            if (qty > 0){
                cart[i].qty -= qty;
            }
            if (cart[i].qty < 1 || qty === 0){
                cart.splice(i,1)
            }
       
        return
        }
    }
}



showCartItems();