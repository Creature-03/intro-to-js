// ------------ TAKE HOME CHALLENGE ------------
// Add an edge case to your daily challenge code
// Check if the user input anything other than a number
// If so, prompt the user again to input a number




// create a function that checks if an argument is a number and prompts the user to try again until the user gives a number
function checkNum(num){
    // create a while loop, while the prompt input is not a number, continue to prompt the user for a number
    while (!Number.isInteger(parseInt(num))){
        num = prompt('That wasn\'t a number, please pick a number.');
    }
    // once the user inputs a number, return that number
    return num;
}



// prompt the user for a numbers
let numOne = checkNum(prompt('Enter a random number.'));
console.log(numOne)

//prompt the user for another number
let numTwo = checkNum(prompt('Enter a second random number.'));
console.log(numTwo)


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