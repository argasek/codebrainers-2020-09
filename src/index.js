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
        this.wreckerSpareWheels = [];
        this.steeringWheel = undefined;
    }

    addSpareWheel() {
        const spareWheel = this.createWheel(
            'spare wheel ' + this.spareWheels.length
        );
        this.spareWheels.push(spareWheel);
    }

    addWreckerSpareWheel() {
        const wreckerSpareWheel = this.createWheel(
            'wrecker spare wheel ' + this.wreckerSpareWheels.length
        );
        this.wreckerSpareWheels.push(wreckerSpareWheel);
    }

    createWheel(id) {
        return new CarWheel(id);
    }

    getNumberOfWheels() {
        return this.wheels.length + this.spareWheels.length;
    }

    doExchangeWheel(wheelIndex) {
        const wheel = this.spareWheels[0];
        this.wheels[wheelIndex] = wheel;
        this.spareWheels.shift();
    }

    doWreckerExchangeWheel(wheelIndex) {
        const wreckerWheel = this.wreckerSpareWheels[0];
        this.wheels[wheelIndex] = wreckerWheel;
        this.wreckerSpareWheels.shift();
    }

    exchangeWheel(wheelIndex) {
        if (this.getNumberOfWheels() <= 4) {
            console.log('You have no spare wheel left, need to call wrecker.');
            this.addWreckerSpareWheel();
            this.doWreckerExchangeWheel(wheelIndex);
        } else {
            this.doExchangeWheel(wheelIndex);
        }
    }

}


class Car extends Vehicle {
    addSpareWheel() {
        const spareWheel = this.createWheel(
            'car spare wheel ' + this.spareWheels.length
        );
        this.spareWheels.push(spareWheel);
    }

    addWreckerSpareWheel() {
        const wreckerSpareWheel = this.createWheel(
            'wrecker car spare wheel ' + this.wreckerSpareWheels.length
        );
        this.wreckerSpareWheels.push(wreckerSpareWheel);
    }
}


class SedanCar extends Car {
    addSpareWheel() {
        const spareWheel = this.createWheel(
            'sedan car spare wheel ' + this.spareWheels.length
        );
        this.spareWheels.push(spareWheel);
    }

    addWreckerSpareWheel() {
        const wreckerSpareWheel = this.createWheel(
            'wrecker sedan car spare wheel ' + this.wreckerSpareWheels.length
        );
        this.wreckerSpareWheels.push(wreckerSpareWheel);
    }
}


class EstateCar extends Car {
    addSpareWheel() {
        const spareWheel = this.createWheel(
            'estate car spare wheel ' + this.spareWheels.length
        );
        this.spareWheels.push(spareWheel);
    }

    addWreckerSpareWheel() {
        const wreckerSpareWheel = this.createWheel(
            'wrecker estate car spare wheel ' + this.wreckerSpareWheels.length
        );
        this.wreckerSpareWheels.push(wreckerSpareWheel);
    }
}

const car = new Car();
car.addSpareWheel();
car.exchangeWheel(2);
car.exchangeWheel(1);

const sedanCar = new SedanCar();
sedanCar.addSpareWheel();
sedanCar.exchangeWheel(1);

const estateCar = new EstateCar();
estateCar.addSpareWheel();
estateCar.exchangeWheel(1);

const vehicle = new Vehicle();
vehicle.exchangeWheel(1);
vehicle.exchangeWheel(2);

console.log(car);
console.log(sedanCar);
console.log(estateCar);
console.log(vehicle);

