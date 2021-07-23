// -- get variables --
const user = document.getElementById('username');
const pw = document.getElementById('password');
const repeatPW = document.getElementById('repeatPassword');
const submitButton = document.getElementById('submit');
// -- end variables --

// regex for password strength
const pwReqs = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,20})");

// -- functions --
// create function to check if submit button should be disabled or not
function btnCheck() {
    if (user.value == '' || pw.value == '' || repeatPW.value == ''){ 
        submitButton.disabled = true; 
    }
    else{ 
        submitButton.disabled = false;
    }
}

function pwCheck(pw, repeatPw){
    if (pw == repeatPw){
        alert('Registration successful.')
    }
    else{
        alert('Your passwords do not match.')
    }

}

// -- end functions --

// add event listeners
user.addEventListener('input', btnCheck);
pw.addEventListener('keypress', btnCheck);
repeatPW.addEventListener('keyup', btnCheck);
submitButton.addEventListener('click', () => {
    if (pw.value == repeatPW.value){
        // if the password meets the requirements of the regex
        if (pwReqs.test(pw.value)){
            alert('Your account has been succeffuly registered!')
        }
        else{
            alert('Please make sure yur password includes at least one Uppercase letter, one Lowercase letter, one Number, one Special Character, and is between 6-20 characters long.')
        }
    }
    else{
        alert('Your passwords do not match.')
    }

});