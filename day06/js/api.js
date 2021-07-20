// -- Assign elements --
const offsetInput = document.querySelectorAll('input')[0];
const listLengthInput = document.querySelectorAll('input')[1];
const button = document.querySelector('button');
const listEl = document.querySelector('.list');
const pokemonEl = document.querySelector('.pokemon');
// -- End elements

// save the base URL for the API
const baseURL = 'https://pokeapi.co/api/v2/pokemon/';

// define a function that fetches the pokemon name from the api
// it takes an argument for the name
function getPokemonByName(name){
    // call fetch() with the baseURL and the name to create the specific pokemons page
    fetch(baseURL + name).then(res => {
        // return the result converted from/to JSON
        return res.json();
        // after that succeeds call then() with one argument, the argument will be the res.json() value
    }).then((facts) => {
        // reset the pokemon html each call so they dont stack upp after subsequent uses
        pokemonEl.innerHTML = ''
        // console log because debugging is cool
        console.log(facts);
        // generate an h1 for the pokemons name
        const h1 = document.createElement('h1');
        // assign the pokemons name to the h1 using facts.name(data aquired from res.json())
        h1.innerText = facts.name;
        // append it to the poke-list
        pokemonEl.appendChild(h1);
        
        // create an img tag for the pokemons image
        const img = document.createElement('img');
        // append the image the the poke-list
        pokemonEl.appendChild(img);
        // assign the image source from facts.sprite(data aquired froom res.json())
        img.src = facts.sprites.front_default;
        // set image size
        img.width = '300';
        //after that succeeds
    }).then((test) => {
        // debugging is cool
        console.log(test);
    })
}

// create the offset default
let offset = 0;
// create the list length default
let listLength = 20;

// add an event listener to button
button.addEventListener('click', () => {
    // assign the offset to the offsetnput value
    offset = offsetInput.value;
    // assign the list to the listInput value
    listLength = listLengthInput.value;
    // re-generate the poke-list
    getPokemonList();
});

// create a function to generate the poke-list
function getPokemonList() {
    // set the base url with template literals for customizable url
    const base_url = `https://pokeapi.co/api/v2/pokemon/?offset=${offset}&limit=${listLength}`;
    
    // fetch the url
    fetch(base_url)
    // convert the results
    .then(res => res.json())
    // carry over the res.json results
    .then(data => {
        // reset the list so it doesnt stack up on subsequent uses
        listEl.innerHTML = ''
        // use the data from res.json to do the following for each pokemon on the list
        data.results.forEach(pokemon => {

            // create an li
            const li = document.createElement('li');
            // assiign the pokemons name to the li
            li.innerText = pokemon.name;
            // append the li to the poke-list
            listEl.appendChild(li);
            // add an eventlistener to the list items
            li.addEventListener('click', () => {
                // when you click the list item get that pokemon
                getPokemonByName(pokemon.name);
            })
        })
        // if it fails log the error
    }).catch(err => console.log(err))
}
// get a pokelist, honestly can delete this if you want to start with a clean slate
// getPokemonList();