// Write a function that accepts a number as an argument
// Alert the user whether the given number is even or odd
// Call your function



// create a function that finds out if a number is even or odd
function oddOrEven(num){
    // if the input isnt a number prompt the user for a number
    while (!Number.isInteger(parseInt(num))){
        num = prompt('That wasn\'t a number, please pick a number.');
    }
    // check is the number divided by 2 leaves a 0 remainder, if so it's even
    if(num % 2 == 0) {
        alert('That number is even!');
    }
    // if the number divided by 2 does not leave a 0 remainder it's odd
    else{
        alert('That number is odd!')
    }
}

// call the function and pass in a prompt as the argument
oddOrEven(prompt('Enter a number to find out if it\'s odd or even!'))