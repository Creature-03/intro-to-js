// -- variables --

const array = [];
let answer = null;

// -- variables --

// --- array methods ---

// adds to back of array
array.push(1);
array.push(true);
array.push('last');
array.push('lastRM');
// adds to front of array
array.unshift('first');
array.unshift('firstRM');
// removes last item
array.pop();
// removes first item
array.shift();
// add multiple items to end of array
array.push('after-last', 'after-after', 'after-3');
// add/remove from middle of array with splice
array.splice(2, 0, 'two', 'three');
// add to the end of the array wiith splice
array.splice(array.length, 0, 'end');
array.splice(array.length, 0, 'endRM');
// remove from the end of the array wiith splice
array.splice(array.length-1, 1);
// add to front of array with splice
array.splice(0, 0, 'start');
array.splice(0, 0, 'startRM');
// remove from front of array with splice
array.splice(0, 1);

// --- end array methods --

// define dictionary object
answer = { 
    0: 1,
    1: true,
    length: 2,
    // custom dictionary functon
    push: function(item){
        answer[answer.length] = item;
        answer.length++;
    },
    // custom dictionary function
    pop: function(){
        delete answer[answer.length];
        answer.length--;
    },
};

// console log stuff
console.log(array, answer);


// ---- CLASSES ----

// define a new class
class User {
    // set which parameters new objects of the class will take
    constructor(username, score, role){
        // assign the parameters
        this.username = username;
        this.score = score;
        this.role = role;
    }
    // set parameter blueprints
    username = '';
    score = 0;
    role = '';
    skill(){
        console.log('use special skill')
    };

}

// create new objects of the class, pass in parameters as arguments
frankTheTank = new User('frank', 15, 'tank');
gardTheBard = new User('gard', 3, 'bard');
lealahTheHealah = new User('lealah', 12, 'healer');
whealerTheDmgDealer = new User('whealer', 14, 'damage dealer');

// log the objects to see the results
console.log(frankTheTank);
console.log(gardTheBard);
console.log(lealahTheHealah);
console.log(whealerTheDmgDealer);