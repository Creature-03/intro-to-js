// Logic

// variables
let trueOrFalse = true;
let a = false;
let b = false;
let c = false;
let course = 'JS'
let course2 = null;

// if 
if (trueOrFalse){
    console.log('this code runs if true');
}

// if else
if (trueOrFalse){
    console.log('this code runs if true');
}
else{
    console.log('this code runs if false');
}

// if else if
if(a){
    console.log('a');
}
else if (b){
    console.log('b');
}
else if (c){
    console.log('c');
}
else{
    console.log('d');
}

// logical operators
// || = or // && = and // ! = not
if (course == 'MFW' || course == 'WFB'){
    console.log('you\'re in a front-end course.');
}
else if (course == 'JS' || course == 'react'){
    console.log('you\'re in a back-end course.');
}
else if (course == 'WFB' && course2 == 'JS' || course == 'MFW' && course2 == 'react'){
    console.log('youre in two courses at once!');
}
else if (!course){
    console.log('you\'re not in a course.');
}
else{
    console.log('that\'s not even a course, where are you??')
}

// if else shorthand // ternary operator
trueOrFalse ? console.log('runs if true') : console.log('runs if false');

// switch statement
document.addEventListener('click', function(){
    let favFood = prompt('what\'s your favorite food?');

    switch(favFood.toLowerCase()){
        case 'pizza':
            console.log('pizza is pretty good');
            break;
    
        case 'burgers':
            console.log('burgers are pretty good');
            break;
    
        case 'potato':
            console.log('potato is life');
            break;
        
        default:
            console.log('your opinion is wrong');
    }
})

// scope
let health = 100;

function takeDamage(){
    health = health - 10;
    console.log('health: ' + health);
}

