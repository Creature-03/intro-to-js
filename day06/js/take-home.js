// get rid of the html stuff used for api.js
document.body.innerHTML = '';

// -- Elements section --
// create and append an h1 title
const h1 = document.createElement('h1');
document.body.appendChild(h1);
h1.innerText = 'Cat Facts Generator';

// create and append an input that only takes numbers
const numberOfFacts = document.createElement('input');
document.body.appendChild(numberOfFacts);
numberOfFacts.type = 'number';
numberOfFacts.placeholder = '1';

// create and append a button to generate the facts
const generateFacts = document.createElement('button');
document.body.appendChild(generateFacts);
generateFacts.innerText = 'Generate Facts';

// create a list to append the facts to and append that to the body
const factsList = document.createElement('ol');
document.body.appendChild(factsList);
// -- End elements secton --


// -- Global Variables section --
// on more complex programs i like to assign my variables here at the top so theyre nce and organized and easy to find and use
let numFacts = null;
let fact = null;
// -- End Global Variables Secton

// -- Global Functions secton --
// same as the variables section, i know where the functions are so i can reuse them in an orderly fashion
// create a function to fetch cat fact
function fetchFacts() {
    // call fetch on the cat facts api getting one random fact
    fetch(`https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=1`)
    // when you get a response, save the text
    .then(response => response.text())
    // get the data from response.text
    .then(data => {
        // convert the data to JSON(like res.json() from api.js, just a different way to do it) and save it as a variable
        fact = JSON.parse(data).text;
        // create a p tag element and assign it to a variable
        let paragraph = document.createElement('p');
        // create a text node element and assign the value to fact from the json data
        let node = document.createTextNode(fact);
        // append the text node to the p tag
        paragraph.appendChild(node);
        // append the p tag to the facts list
        factsList.appendChild(paragraph);
    })
    // if it fails log the error
    .catch(err => console.log(err));
}
// -- End Global Functions section --


// -- Generate Facts --
// add an event listener to the generate facts button
generateFacts.addEventListener('click', function() {
    // debugging is cool
    console.log('Generate Facts Button was clicked');
    // assignthe value of the numberoffacts input to a variable
    numFacts = numberOfFacts.value;
    // debuggng is cool
    console.log(numFacts)
    // use an if statement to limit the number of facts that can be generated at once
    if (parseInt(numFacts) > 500) {
        // if the user exceeds the limit tell them to lower the requested amount
        alert('Yo, chill a little, lets limit the list to 500 facts at a time.');
        // debugging is cool
        console.log('User needs to chill.')
    }
    // if the user doesnt exceed the limit
    else {
        // temp variable i has a value of 0, as long as i is < the requested amount of facts generate a fact, for each generated fact increase the value of i by one
        for (i = 0; i < numFacts; i++){
            // get a cat fact
            fetchFacts();
        }
    }
})