import data from './data.js'

const itemsContainer = document.querySelector('#items');

//for-loop to cycle through the data
for (let i = 0; i < data.length; i += 1){
    //create a new  div element
    const newDiv = document.createElement('div');
    newDiv.className = 'item';
    //create an image element
    const img = document.createElement('img');
}   img.src = data[i].image;
    img.width = 300;
    img.height = 300;
    // add image to the Div
    newDiv.appendChild(img);
    itemsContainer.appendChild(newDiv);