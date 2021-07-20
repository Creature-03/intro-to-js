// create array of all html input fields
const inputs = document.querySelectorAll('input');
console.log(inputs);

// create variables and assign input fields
const streetNumberInput = inputs[0];
const streetNameInput = inputs[1];
const cityInput = inputs[2];
// create variable for html selector
const select = document.querySelector('select');

// create event listener for streetNumberInput
streetNumberInput.addEventListener('change', function(){
    console.log(this.value);
    // if streetNumberInput has a value and if that value is an integer
    if(this.value && parseInt(this.value)){
        console.log('yay you typed a number');
    }
});

// create event listener for streetNameInput
streetNameInput.addEventListener('change', function(){
    console.log(this.value);
    // if streetNameInput has a value and streetNumberInput has a value
    if (this.value && streetNumberInput.value){
        console.log('yay you typed a couple things')
    }
});

// create event listener for cityInput
cityInput.addEventListener('change', function() {
    console.log(this.value);
    // if cityInput has a value
    if (this.value) {
        console.log('yay you type anything');
    }
});

// creat event listener for select
select.addEventListener('change', function(){
    console.log(this.value)
    // create a switch statement
    switch(this.value){
        //if  select.value is equal to 'ca'
        case 'ca':
            console.log('the golden state');
            break;
        //if  select.value is equal to 'az'
        case 'az':
            console.log('the grand canyon state');
            break;
        //if  select.value is equal to 'ny'
        case 'ny':
            console.log('the big apple');
            break;
        //if  select.value is equal to 'or'
        case 'or':
            console.log('the beaver state');
            break;
    }
})