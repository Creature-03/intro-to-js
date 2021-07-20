// global scope; can be used throughout the rest of the document
// create menu list
const menu = [];

// define a function that creates a header and appends it to the body
function createHeader(){
    //functional scope; can only be used within the function
    const header = document.createElement('h1');
    document.body.appendChild(header);
    header.innerText = 'Menu';
}
// call the function to create the header
createHeader();

// define a function to get some bread
function getBread(){
    return getPantryItem('bread');
}
// define a function to get some PB
function getPeanutButter(){
    return getPantryItem('peanut butter');
}
// define a function that takes in an item argument and gets that item
function getPantryItem(item){
    console.log('go to pantry and get ' + item);
    return item;
}
// define a function that takes an item argument and returns that function
function getFridgeItem(item){
    console.log('go to the fridge and get ' + item);
    return item;
}

// menu.push pushes objects onto the menu list
menu.push(
    // creat an object that is to be pushed
    {
    name: 'pbj sandwich',
    price: 20.99,
    description: 'creamy peanut butter and sweet jam',
    // define a function within the object
    steps: function(){
        // call the unique getBread function that is defined within this object instead of the global getBread function
        this.getBread();
        getPeanutButter();
        getFridgeItem('jam');
    },
    // create a unique getBread function within the object
    getBread: function(){
        console.log('get the good bread')
        return 'the good bread'
    }
},
{
    name: 'turkey sandwich',
    price: 30.99,
    description: 'pretty bird',
    steps: function(){
        getBread();
        getFridgeItem('turkey');
    }
}
);

// define a function to create the menu
function createMenu(){
    // create an ol element and assign it to a variable
    const listElement = document.createElement('ol');
    // append the ol element
    document.body.appendChild(listElement);
    // use a forEach loop on menu; will run for each item in the menu list
    // for each menu item run a function that takes in a foodItem argument and runs the following
    menu.forEach( (foodItem) => {
        // creates a li element for each foodItem on the menu list
        const li = document.createElement('li');
        // appends the li elements to the ol
        listElement.appendChild(li);
        //assigns the innerText of each item using template literals to pull name/price/description from each
        li.innerText = `${foodItem.name} - ${foodItem.price}
        descripton: ${foodItem.description}
        
        `;

        // create event listener that runs the steps() function when you click a menu item
        li.addEventListener('click', () => {
            foodItem.steps();
        })
    });
}

// call the createMenu functon
createMenu();