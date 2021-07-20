// CHALLENGE 1
// Prompt the user for their first name
// Store their input to a variable
// Reverse your user’s name
// alert the reversed string

// Challenge 2
// Prompt for a number value (provide a default of 10)
// Prompt for a second number value (provide a default of 10)
// Convert the prompted values into integers using parseInt()
// Add the numbers together and alert the user with the result



// CHALLENGE-1

// use a prompt input to get the users first name
// prompt layout: variable = prompt('What the prompt is asking', 'Default text inside the text box');
let firstName = prompt('What is your first name?', 'Bob');

// create function to reverse the users first name
// FUNCTION-BREAKDOWN:
// the function takes a string as an argument
// .split("") splits the string into an array of single letters
// .reverse() reverses the array
// .join("") fuses the array into a single string
// return the reversed string
function reverseString(str) {
    return str.split("").reverse().join("");
}

// call the reverseString function on firstName variable
let reversedFirstName = reverseString(firstName);

// use alert() to tell the user what their reversed first name is
alert('Your first name reversed is: ' + reversedFirstName);

// get element with ID of "rname" from index.html
let rName = document.getElementById('rname');
// set innertext of rName to firstName reversed
rname.innerText = reverseString(firstName);



// CHALLENGE-2

// use a prompt input to get a number from the user
let numValueOne = prompt('What\'s your favorite number?', '3');
// use a second prompt to get a second number from the user
let numValueTwo = prompt('What\'s your least favorite number?', '4');

// convert the strings from the prompts into Int values
// parseInt() converts strings into numbers if the string has a number value
let numValueOneInt = parseInt(numValueOne);
let numValueTwoInt = parseInt(numValueTwo);

// add the two int values
let numValueSum = numValueOneInt + numValueTwoInt;

// alert the user of the sum of the two numbers
alert('The sum of your favorite and least favorite numbers is: ' + numValueSum); 