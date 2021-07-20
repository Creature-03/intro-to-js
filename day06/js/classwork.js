// Data Types

// loose variables
// string
const appName = 'cool app';
// number
const version = 1.1;
// boolean
const production = false;

// list/array
const appInfo = [appName, version, production];

// dictionary/object
const appInfo2 = {
    name: appName,
    ver: version,
    ready: production,
};

// functons
// define function
function myFunction(argument1, argument2){
    console.log('do stuff');
    const name = 'bob';
    console.log(name);
    console.log(appInfo2.name);
    console.log(argument1, argument2)
}

// call function
myFunction('argumentOne', 'argumentTwo');


// dictionaries list
const users = [];

// dictioonaries
const user1 = {
    username: 'Creature',
    hairColor: 'red',
    favoriteCOlor: 'red',
    level: 'over 9000',
    class: 'black mage',
    users: users,
}

const user2 = {
    username: 'Oni',
    hairColor: 'green',
    favoriteCOlor: 'green',
    level: 'over 9000',
    class: 'warrior',
    users: users,
}

const user3 = {
    username: 'Accel',
    hairColor: 'blue',
    favoriteCOlor: 'blue',
    level: 'over 9000',
    class: 'healer',
    users: users,
}

// push dictionaries into array
users.push(user1, user2, user3);

// log the usernames
console.log(users[0].username, users[1].username, users[2].username);


// promises
const myPromise = new Promise(function(resolve, reject){
    // reject(new Error('The internet is out of juice'))
    setTimeout(() => resolve('internet juice') , 5000);
});
const myPromise2 = new Promise(function(resolve, reject){
    // reject(new Error('The internet is out of juice'))
    setTimeout(() => resolve('more internet juice') , 10000);
});

Promise.all([myPromise, myPromise2]).then( data => {
    console.log('data', data);
}).catch(err => {
    console.log(err);
}).finally(() => console.log('finally'))
