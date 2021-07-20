// variables
const myButton = document.querySelector('button');
const badButton = document.getElementById('badButton');
const fontSize = '50px'
const borderRad = '20px'
const padding = 10;
let badClick = 0;

// button 1 styling
myButton.style.color = 'Green';
myButton.style.fontSize = fontSize;
myButton.style.borderRadius = borderRad;
myButton.style.padding = padding + 'px';

// button 2 styling
badButton.style.color = 'red';
badButton.style.fontSize = fontSize;
badButton.style.borderRadius = borderRad;
badButton.style.padding = padding + 'px';
badButton.innerText = 'Don\'t click';

// button 1 onclick function
myButton.addEventListener('click', function(){
    alert('Nice click!');
});

// button 2 mouseover function
badButton.addEventListener('mouseover', function(){
    if (badClick == 0){
        badButton.innerText = 'Don\'t do it...';
    }
    else {
        badButton.innerText = 'I said stop...';
    }
});
// button 2 mouseout function
badButton.addEventListener('mouseout', function(){
    if (badClick == 0){
        badButton.innerText = 'Thanks for listening.';
    }
});

// button 2 onclick function
badButton.addEventListener('click', function(){
    if (badClick == 0){
        alert('I told you not to do it.. Why..?');
    }
    else {
        alert('That\'s enough of your shenanagins.');
    }
    badClick = badClick + 1;
    if (badClick > 0){
        badButton.innerText = 'Don\'t do it again.';
    }
});