
class Wheel {
    constructor(placement = undefined) {
        this.placement = placement;
    }

    setPlacement(placement) {
        this.placement = placement;
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

try {
    const car = new Car();
    const carWheel = new CarWheel();
    car.addSpareWheel(new CarWheel());
    car.addSpareWheel(new CarWheel());
    console.log(car);

    const bicycle = new Bicycle();
    const bicycleWheel = new BicycleWheel();
    bicycle.addSpareWheel(bicycleWheel);

    // Uncomment to see wheel instance checking mechanism in action
    // bicycle.addSpareWheel(new CarWheel());
    console.log(bicycle);

} catch (exception) {
    console.error(exception)
}

