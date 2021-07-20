// create an empty list
const list = [];
// create an h1 html element
const h1 = document.createElement('h1');
// append h1 to the body of the html
document.body.appendChild(h1);
// fill in the h1 text
h1.innerHTML = 'List';


// create an input field html element
const itemInput = document.createElement('input');
// append the input field to the html body
document.body.appendChild(itemInput);
// fill in the placeholder text for the input field
itemInput.placeholder = 'Enter an Item Name';


// create a button html element
const addItemButton = document.createElement('button');
// append the button to the body of the html
document.body.appendChild(addItemButton);
// fill in the button text
addItemButton.innerHTML = 'Add Item';
// create an event listener for the buttons onclick
addItemButton.addEventListener('click', function() {
    // call addToList and drawList functions
    addToList();
    drawList();
});

// define addToList function
function addToList() {
    // store the value from itemInput input field into a variable
    const value = itemInput.value;
    // .push() to add the value to the list created earlier
    list.push(value);
    // .sort() to sort the list in alphabetical order(or in ascending order in the case of numbers)
    list.sort();
    // reset the itemInput input field to an empty string so it's blank each time
    itemInput.value = '';
}

// define the drawList function
function drawList() {
    // empty out ol variable by setting it to an empty string to prevent posting duplicate items
    ol.innerHTML = '';
    // loop through the list containing the input values and for each item in the list do the following then repeat for each item
    list.forEach(function(value) {
        // create a li element
        const li = document.createElement('li');
        // assign the value of the current item in the list to the li element
        li.innerHTML = value;
        // append the li element to the ol variable
        ol.appendChild(li);
    });
}

// create an ol html element(create it at the end so that its placed below the button on the html page)
const ol = document.createElement('ol');
// append the ol item to the body
document.body.appendChild(ol);