// get html elements
const fName = document.getElementById('firstName');
const lName = document.getElementById('lastName');
const fColor = document.getElementById('favColor');
const submitButton = document.getElementById('submit');

// create an event lister for the submit button
submitButton.addEventListener('click', () => {
    // save the input field values
    let fNameValue = fName.value;
    let lNameValue = lName.value;
    let fColorValue = fColor.value;

    // erase the form
    document.body.innerHTML = '';
    
    // create variables to display form info
    const fNamePrint = document.createElement('h1');
    fNamePrint.innerText = 'Your first name is: ' + fNameValue;
    document.body.appendChild(fNamePrint);

    const lNamePrint = document.createElement('h1');
    lNamePrint.innerText = 'Your last name is: ' + lNameValue;
    document.body.appendChild(lNamePrint);

    const fColorPrint = document.createElement('h1');
    fColorPrint.innerText = 'Your Favorite color is: ' + fColorValue;
    fColorPrint.style.color = fColorValue;
    document.body.appendChild(fColorPrint);
})