// ------------ DAILY CHALLENGE ------------
// Prompt the user for two different numbers
// Convert the values to integers
// Store the two integers as variables
// Compare the two numbers
// Alert the larger number


// prompt the user for two numbers
let numOne = prompt('Enter a random number.');
let numTwo = prompt('Enter a second random number.');

// create an if statement that gives different alerts based on the users numbers
if (numOne > numTwo){
    alert(numOne + ' is greater than ' + numTwo + '.');
} 
else if (numOne < numTwo){
    alert(numTwo + ' is greater than ' + numOne + '.');
}
else if (numOne == numTwo){
    alert('Both numbers are equal in value.');
}