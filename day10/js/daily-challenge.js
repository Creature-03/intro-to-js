// -- get variables --
const user = document.getElementById('username');
const pw = document.getElementById('password');
const repeatPW = document.getElementById('repeatPassword');
const submitButton = document.getElementById('submit');
// -- end variables --

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
// -- end functions --

// add event listeners
user.addEventListener('input', btnCheck);
pw.addEventListener('keypress', btnCheck);
repeatPW.addEventListener('keyup', btnCheck);
submitButton.addEventListener('click', () => {
    if (pw.value == repeatPW.value){
        alert('Registration successful.')
    }
    else{
        alert('Your passwords do not match.')
    }

});