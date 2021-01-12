// POJO

class CarWheel {
    constructor(id) {
        this.id = id;
    }
}



class Vehicle {
    constructor() {
        console.log('Vehicle constructor called')
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

        this.spareWheels = [];

        this.steeringWheel = undefined;
    }

    addSpareWheel() {
        const spareWheel = this.createWheel('spare wheel');
        this.spareWheels.push(spareWheel);
    }

    createWheel(id) {
        return new CarWheel(id);
    }

    getNumberOfWheels() {
        return this.wheels.length + this.spareWheels.length;
    }

}

class SedanCar extends Car {

    addSpareWheel() {
        const spareWheel = this.createWheel('sedan spare wheel');
        this.spareWheels.push(spareWheel);
    }

}


const car = new Car();

car.addSpareWheel();

const sedanCar = new SedanCar();

sedanCar.addSpareWheel();

console.log(car);
console.log(sedanCar);

