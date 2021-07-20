// create and define your dog
const dog = {
    name: 'Odin',
    legs: 3,
    fur: 'black',
    speak: function(){alert('woof!')},
    shootLaser: function(){alert('...pew pew...?')}
}

// -- variables --
const dogName = document.getElementById('odin');
const dogLegs = document.getElementById('legs');
const dogFur = document.getElementById('fur');
const dogSpeak = document.getElementById('speak');
const dogLaser = document.getElementById('shootLaser');
// -- end variables --

// assign text values of dog to the variables
dogName.innerText = dog.name;
dogLegs.innerText = dog.name + ' has ' + dog.legs + ' legs.';
dogFur.innerText = dog.name + ' has ' + dog.fur + ' fur.';
dogSpeak.innerText = 'Speak';
dogLaser.innerText = 'Shoot Laser';

// button event listeners
dogSpeak.addEventListener('click', dog.speak);
dogLaser.addEventListener('click', dog.shootLaser);