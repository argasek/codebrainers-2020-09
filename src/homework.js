class Engine {
    constructor() {
        this.isRunning = false;
        this.type = undefined;
    }

    turnOn() {
        this.isRunning = true;
    }

    turnOff() {
        this.isRunning = false;
    }
}


class CarEngine extends Engine {
    constructor() {
        super();
        this.type = "diesel";
    }
}


class AirplaneEngine extends Engine {
    constructor() {
        super();
        this.type = "turbojet";
    }
}


class Vehicle {
    constructor() {
        this.engines = [];
    }

    addEngine(engine) {
        this.engines.push(engine);
    }

    // Task 1 -- implement this method using .forEach().
    startAllEngines() {
    }

    // Task 1 -- implement this method using .reduce().
    areAllEnginesRunning() {
    }

}

class Car extends Vehicle {
    constructor() {
        super();
        const carEngine = new CarEngine();
        this.addEngine(carEngine);
    }
}

class Airplane extends Vehicle {
    constructor() {
        super();
        for (let i = 0; i < 4; i++) {
            const airplaneEngine = new AirplaneEngine();
            this.addEngine(airplaneEngine);
        }
    }
    startEngine(index) {
        const engine = this.engines[index];
        engine.turnOn();
    }
}

const car = new Car();

const airplane = new Airplane();
airplane.startEngine(0);
airplane.startEngine(3);

const result = airplane.areAllEnginesRunning();

console.log("Are all airplane engines running? ", result);
