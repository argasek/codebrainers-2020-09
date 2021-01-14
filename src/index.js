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
        console.log(this.spareWheels);

    }

    createWheel(id) {
        return new CarWheel(id);
    }

    // exchangeFromAny(instanceWithExtra) {
    //
    //         const name = instanceWithExtra.spareWheels.shift();
    //         this.spareWheels.push(instanceWithExtra.spareWheels[0]);
    //
    //
    // }

    lendAwheel(wheelIndex, theInstanceWithNoSpareWheel) {
        if (this.spareWheels.length > 0) {
            const wheel = this.spareWheels[0];
            theInstanceWithNoSpareWheel.wheels[wheelIndex] = wheel;
            this.spareWheels.shift();
        }
        else {
           console.log("no wheels to lend left");

        }

        // theInstanceWithNoSpareWheel.spareWheels.push(this.spareWheels[0]);

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
            this.createWheel('car front left'),
            this.createWheel('car front right'),
            this.createWheel('car back left'),
            this.createWheel('car back right'),
        ];


    }

    addSpareWheel() {
        const spareWheel = this.createWheel('car spare wheel ' + this.spareWheels.length);
        this.spareWheels.push(spareWheel);
    }

}

class SedanCar extends Car {
    constructor() {
        super();
        this.wheels = [
            this.createWheel('sedan front left'),
            this.createWheel('sedan front right'),
            this.createWheel('sedan back left'),
            this.createWheel('sedan back right'),
        ];

    }

    addSpareWheel() {
        const spareWheel = this.createWheel('sedan spare wheel ' + this.spareWheels.length);
        this.spareWheels.push(spareWheel);
    }

}

const anyVehicle = new Vehicle();
const car = new Car();
const sedanCar = new SedanCar();

anyVehicle.addSpareWheel();
anyVehicle.addSpareWheel();
anyVehicle.lendAwheel(3, sedanCar);
// anyVehicle.lendAwheel(car);


car.addSpareWheel();
car.addSpareWheel();
car.exchangeWheel(3);
car.exchangeWheel(2);





sedanCar.addSpareWheel();
sedanCar.addSpareWheel();
// sedanCar.lendAwheel(0, car);
// sedanCar.lendAwheel(0, anyVehicle);
// sedanCar.lendAwheel(1,anyVehicle);

console.log(anyVehicle);
console.log(car);
console.log(sedanCar);


