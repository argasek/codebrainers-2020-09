// POJO.

class CarWheel {
    constructor(id) {
        this.id = id;
    }
}


class Vehicle {
    constructor() {
        console.log('Vehicle constructor called')
        this.wheels = [
            this.createWheel('default wheel 1'),
            this.createWheel('default wheel 2'),
            this.createWheel('default wheel 3'),
            this.createWheel('default wheel 4'),
        ];

        this.spareWheels = [];

    }
    createWheel(id) {
        return new CarWheel(id);
    }

    exchangeWheel(wheelIndex) {
        const wheel = this.spareWheels[0];
        this.wheels[wheelIndex] = wheel;
        this.spareWheels.shift();
    }
     addSpareWheel() {
         const spareWheel = this.createWheel('default spare wheel ' + this.spareWheels.length);
         this.spareWheels.push(spareWheel);
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


        this.steeringWheel = undefined;
    }

    addSpareWheel() {
        const spareWheel = this.createWheel('car spare wheel ' + this.spareWheels.length);
        this.spareWheels.push(spareWheel);
    }


    getNumberOfWheels() {
        return this.wheels.length + this.spareWheels.length;
    }


}

class SedanCar extends Car {

    addSpareWheel() {
        const spareWheel = this.createWheel('sedan spare wheel ' + this.spareWheels.length);
        this.spareWheels.push(spareWheel);
    }

}

const anyVehicle = new Vehicle();
anyVehicle.addSpareWheel();
anyVehicle.addSpareWheel();
anyVehicle.exchangeWheel(2);


const car = new Car();
car.addSpareWheel();
car.addSpareWheel();
car.exchangeWheel(1);


const sedanCar = new SedanCar();
sedanCar.addSpareWheel();
sedanCar.addSpareWheel();
sedanCar.exchangeWheel(2);

console.log(anyVehicle);
console.log(car);
console.log(sedanCar);


