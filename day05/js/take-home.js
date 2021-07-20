// Write a function that accepts a password (string)
// Validate the password using the following rules:
// Must be 6-20 characters long
// Must start with a letter
// Alert the user if their password has been accepted or why their password was rejected



// create a function that checks if the argument meets the requirements
function passwordCheck(pw){
    // check is the pw length is 6 or greater and also 20 or less
    if (pw.length >= 6 && pw.length <= 20){
        // check if the first digit of the pw is a not a number
        if (!parseInt(pw[0])){
            // if the first digit is not a number accept the password
            alert('Your password has been accepted')
        }
        // if first digit is a number alert the user and start over
        else{
            alert('Your password must begin with a letter.')
            passwordCheck(prompt('Please create a password.'))
        }
    }
    //if the pw length isnt between 6-20 digits long, alert the user and start over
    else{
        alert('Your password must be 6-20 characters long.')
        passwordCheck(prompt('Please create a password.'))
    }
}

// call the passwordCheck function and give it a prompt for an argument
passwordCheck(prompt('Please create a password.'))