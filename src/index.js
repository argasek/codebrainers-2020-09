// POJO

class CarWheel {
    constructor(id) {
        this.id = id;
    }
}

class Vehicle {
    constructor() {
        console.log('Vehicle constructor called')

        this.wheels = [
            this.createWheel('front left'),
            this.createWheel('front right'),
            this.createWheel('back left'),
            this.createWheel('back right'),
        ];

        this.spareWheels = [];
        this.steeringWheel = undefined;
    }

    addSpareWheel() {
        const spareWheel = this.createWheel('spare wheel ' + this.spareWheels.length);
        this.spareWheels.push(spareWheel);
    }

    createWheel(id) {
        return new CarWheel(id);
    }

    getNumberOfWheels() {
        return this.wheels.length + this.spareWheels.length;
    }

    exchangeWheel(wheelIndex) {
        if (this.spareWheels.length > 0) {
            const wheel = this.spareWheels[0];
            this.wheels[wheelIndex] = wheel;
            this.spareWheels.shift();
        } else {
            console.log('Sorry, this car has no spare wheel(s). Add a spare wheel.');
        }
    }

    addSpareWheelFromAnotherCar(anotherCar, spareWheel) {
        if (anotherCar instanceof Vehicle && anotherCar.spareWheels.length > 0) {
            this.spareWheels.push(spareWheel);
            anotherCar.spareWheels.shift();
        } else {
            console.log('Select another car to borrow a wheel from');
        }
    }
}

class Car extends Vehicle {
    constructor() {
        super();
        console.log('Car constructor called');

        this.wheels = [
            this.createWheel('front left'),
            this.createWheel('front right'),
            this.createWheel('back left'),
            this.createWheel('back right'),
        ];

        this.spareWheels = ['spare wheel no 1', 'spare wheel no 2'];
        this.steeringWheel = undefined;
    }
}

class SedanCar extends Car {

    addSpareWheel() {
        const spareWheel = this.createWheel('sedan spare wheel');
        this.spareWheels.push(spareWheel);
    }

}



const car1 = new Car();
const sedanCar1 = new SedanCar();

const car2 = car1.addSpareWheelFromAnotherCar(sedanCar1, 'sedan spare wheel')

console.log(car1);
console.log(car2);
console.log(sedanCar1);


