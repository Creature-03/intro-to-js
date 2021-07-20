// Ask for the user's first name
// Ask for the user's last name
// Log the user's first name to the console
// Alert the user's last name

// *BONUS* 
// Ask for the user's birthday
// Ask the user to confirm their birthday input
// Alert the user's birthday




// prompt the user for their first name
// prompt layout: variable = prompt('What the prompt is asking', 'Default text inside the text box');
let fName = prompt('What\'s your first name?', 'Joe');
// prompt the user for their last name
let lName = prompt('What\'s your last name?', 'Blow');

// console log the first name and last name
console.log(fName + ' ' + lName);

// alert the user of their name
alert('Your full name is: ' + fName + ' ' + lName);

// prompt the user for their birthday
let bDay = prompt('What is your birthday?', '12/31/1900');

// if statement confirming their birthday
// if statement layout: if (something is true) {do stuff} else {do other stuff}
if (confirm("Is your birthday correct? " + bDay)) {
    // if their birthday is correct alert the user of their full name and birthday
    alert("Awesome! Your name is: " + fName + ' ' + lName + ' and your birthday is: ' + bDay);
    } else {
    // if their birthday was incorrect prompt the user to re-enter their birthday
    bDay = prompt('Uh oh, lets fix that!', '12/31/1900');
    // alert the user of their full name and updated birthday
    alert("Awesome! Your name is: " + fName + ' ' + lName + ' and your birthday is: ' + bDay);
}