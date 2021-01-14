
class Wheel {
    constructor(placement = undefined) {
        this.placement = placement;
    }

    setPlacement(placement) {
        this.placement = placement;
    }

    clone() {
        const wheel = new Wheel();
        Object.keys(this).forEach(key => wheel[key] = this[key]);
        return wheel;
    }

}


class Vehicle {
    constructor(numberOfWheels) {
        console.log('Vehicle constructor called')
        if (typeof numberOfWheels !== 'number' || numberOfWheels <= 0) {
            throw Error('Cannot create a new Vehicle with non-positive numberOfWheels');
        }
        this.wheels = new Array(numberOfWheels).fill(0).map(() => this.createWheel());
        this.spareWheels = [];
    }

    addSpareWheel(wheel, wheelClass) {
        // console.log(wheelClass);
        if (wheel instanceof wheelClass) {
            this.spareWheels.push(wheel);
        } else {
            throw new Error('Invalid type of wheel added as a spare wheel');
        }
    }

    createWheel(placement) {
        return new Wheel(placement);
    }
    
    getWheel(wheelIndex) {
        return this.wheels[wheelIndex];
    }

    setWheel(wheelIndex, wheel) {
        this.wheels[wheelIndex] = wheel;
    }

    exchangeWheel(wheelIndex) {
        const wheel = this.spareWheels[0];
        this.setWheel(wheelIndex, wheel);
        this.spareWheels.shift();
    }

    setWheelPlacement(wheelIndex, placement) {
        this.getWheel(wheelIndex).setPlacement(placement);
    }
}

class BicycleWheel extends Wheel {

}

class Bicycle extends Vehicle {

    constructor() {
        super(2);
        this.setWheelPlacement(0, 'front');
        this.setWheelPlacement(1, 'back');
        console.log('Bicycle constructor called');
    }

    createWheel(placement) {
        return new BicycleWheel(placement);
    }

    addSpareWheel(wheel) {
        super.addSpareWheel(wheel, BicycleWheel);
    }

}

class CarWheel extends Wheel {

    clone() {
        const wheel = new CarWheel();
        Object.keys(this).forEach(key => wheel[key] = this[key]);
        return wheel;
    }

}


class Car extends Vehicle {
    constructor() {
        super(4);

        this.setWheelPlacement(0, 'front left');
        this.setWheelPlacement(1, 'front right');
        this.setWheelPlacement(2, 'back left');
        this.setWheelPlacement(3, 'back right');

        console.log('Car constructor called');
    }

    createWheel(placement) {
        return new CarWheel(placement);
    }

    addSpareWheel(wheel) {
        super.addSpareWheel(wheel, CarWheel);
    }

}

// try {
//     const car = new Car();
//     const carWheel = new CarWheel('trunk');
//     car.addSpareWheel(carWheel);
//     car.addSpareWheel(carWheel);
//     // car.addSpareWheel(new CarWheel('trunk'));
//     // car.addSpareWheel(new CarWheel('trunk'));
//     console.log(car);
//
// } catch (exception) {
//     console.error(exception)
// }

// const carWheel1 = new CarWheel('trunk');
// const carWheel2 = new CarWheel('trunk');
//
// if ({} === { }) {
//     console.log('Equal');
// } else {
//     console.log('Not equal');
// }

// if (carWheel1 === carWheel2) {
//     console.log('Equal');
// } else {
//     console.log('Not equal');
// }


const a = new Array(3).fill(0).map((x, i) => new CarWheel('trunk'));
const b = a.map(item => item.clone());

// shallow copy

b[0].placement = 'front left';

console.log(a);
console.log(b);


