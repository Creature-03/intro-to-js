// data types

// variables
const appName = 'App';
let score = 0;
var test = false;

// arrays
const falseyGroup = [false, '', 0, undefined, null, NaN];
const truthyGroup = ['everything else'];

// dictionary/object
const user = {
    username: 'joe',
    score: 3,
    falseyGroup: falseyGroup,
    truthyGroup: truthyGroup
}

const user2 = {
    username: 'jane',
    score: 3,
    falseyGroup: falseyGroup,
    truthyGroup: truthyGroup
}


displayUser(user, 'username');
displayUser(user2, 'score');

function displayUser(user, property){
    const li1 = document.createElement('li');
    document.body.appendChild(li1);
    li1.innerText = user.property;
}