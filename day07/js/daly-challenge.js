// create an h1 html element
const h1 = document.createElement('h1');
// append h1 to the body of the html
document.body.appendChild(h1);
// fill in the h1 text
h1.innerHTML = 'FizzBuzz';

// create and append unordered list
const list = document.createElement('ul');
document.body.appendChild(list)

// define fizzBuzz function
function fizzBuzz(){
    // for loop 1-100
    for (let i = 1; i <= 100; i++){
        //create a li
        let li = document.createElement('li');
        // if divisible by 3 and 5 append FizzBuzz
        if (i % 15 == 0){
            li.innerHTML = 'FizzBuzz';
            list.appendChild(li);
        }
        // if divisible by 3 append Fizz
        else if (i % 3 == 0){
            li.innerHTML = 'Fizz';
            list.appendChild(li);
        }
        // if divisible by 5 append Buzz
        else if (i % 5 == 0){
            li.innerHTML = 'Buzz';
            list.appendChild(li);
        }
        // otherwise append the number
        else{
            li.innerHTML = i;
            list.appendChild(li);
        }
    }
}
// call fizzBuzz function
fizzBuzz();