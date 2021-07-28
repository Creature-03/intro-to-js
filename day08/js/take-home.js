

// define the car class
class Car {
    // define the constructor
    constructor(make, model, year, color){
        // add values from the constructor to the class
        this.make = make;
        this.model = model;
        this.year = year;
        this.color = color;
    }
}

// define variables with the Car class
const car1 = new Car('Ford', 'F-150', 2021, 'white');
const car2 = new Car('Chevrolet', 'Silverado', 2019, 'black');
const car3 = new Car('Ram', '1500', 2021, 'blue');
const car4 = new Car('Toyota', 'RAV4', 2018, 'red');

// -- get html variables --
const carOne = document.getElementById('car1');
const carOneMake = document.getElementById('car1make');
const carOneModel = document.getElementById('car1model');
const carOneYear = document.getElementById('car1year');
const carOneColor = document.getElementById('car1color');

const carTwo = document.getElementById('car2');
const carTwoMake = document.getElementById('car2make');
const carTwoModel = document.getElementById('car2model');
const carTwoYear = document.getElementById('car2year');
const carTwoColor = document.getElementById('car2color');

const carThree = document.getElementById('car3');
const carThreeMake = document.getElementById('car3make');
const carThreeModel = document.getElementById('car3model');
const carThreeYear = document.getElementById('car3year');
const carThreeColor = document.getElementById('car3color');

const carFour = document.getElementById('car4');
const carFourMake = document.getElementById('car4make');
const carFourModel = document.getElementById('car4model');
const carFourYear = document.getElementById('car4year');
const carFourColor = document.getElementById('car4color');
// -- end html variables --

// assign the values of the html elements to the values of the cars
carOne.innerText = 'Car One:'
carOneMake.innerText = car1.make;
carOneModel.innerText = car1.model;
carOneYear.innerText = car1.year;
carOneColor.innerText = car1.color;

carTwo.innerText = 'Car Two:'
carTwoMake.innerText = car2.make;
carTwoModel.innerText = car2.model;
carTwoYear.innerText = car2.year;
carTwoColor.innerText = car2.color;

carThree.innerText = 'Car Three:'
carThreeMake.innerText = car3.make;
carThreeModel.innerText = car3.model;
carThreeYear.innerText = car3.year;
carThreeColor.innerText = car3.color;

carFour.innerText = 'Car Four:'
carFourMake.innerText = car4.make;
carFourModel.innerText = car4.model;
carFourYear.innerText = car4.year;
carFourColor.innerText = car4.color;