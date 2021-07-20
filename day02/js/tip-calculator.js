// change ducument title
document.tile - 'Tip Calculator';

// get calc element from index.html and assign Tip Calculator text
const h1 = document.getElementById('calc');
h1.innerText = 'Tip Calculator';

// get tip element from index.html and assign some text
const tip = document.getElementById('tip');
tip.innerText = 'Tip amount'

// get totalPlusTip element from index.html and assign some text
const totalPlusTip = document.getElementById('totalPlusTip');
totalPlusTip.innerText = 'Total plus Tip';

// creat 'total' input field
const totalInput = document.createElement('input');
// restrict totalInput to numbers only
totalInput.type = 'number';
// assign placeholder text
totalInput.placeholder = 'Enter Total';
// instantiate totalInput into the body of the document
document.body.appendChild(totalInput);

// create 'percentage' input field
const percentageInput = document.createElement('input');
percentageInput.type = 'number';
percentageInput.placeholder = 'What percent?';
document.body.appendChild(percentageInput);

// create tip button
const tipButton = document.createElement('button');
tipButton.innerText = 'Calculate Tip';
document.body.appendChild(tipButton);

// event listener onclick for tip button
tipButton.addEventListener('click', function(){
    // get total from totalInput input field
    const total = Number(totalInput.value);
    // verify total for debug
    console.log('total: ' + total);
    // get percent from percentageInput input field
    const percent = Number(percentageInput.value);
    // verify percent for debug
    console.log('percent: ' + percent);
    
    // calculate tip and assign it to Tip text
    tip.innerText = 'tip: ' + (percent / 100 * total);

    // calulate total plus tip and assign it to totalPlusTip text
    totalPlusTip.innerText = 'Total plus Tip: ' + (total + (percent / 100 * total));
});
