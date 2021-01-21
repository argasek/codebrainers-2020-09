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
        const engines = this.engines;
        engines.forEach(engine => engine.turnOn());
    }

    // Task 4 -- modify this method so it does not use .reduce() and also don't use any loops.
    areAllEnginesRunning() {
        const allRunning = this.engines.filter(engine => engine.isRunning === true);
        return allRunning.length === this.engines.length;
    }

    // Task 1
    areAllEnginesStopped() {
        const initialValue = false;

        return (!this.engines.map(engine => engine.isRunning)
            .reduce((enginesRunningReducer, isRunning) =>
                (enginesRunningReducer || isRunning), initialValue));
    }

    // Task 2
    isAnyEngineRunning() {
        const initialValue = false;

        return this.engines.map(engine => engine.isRunning)
            .reduce((enginesRunningReducer, isRunning) =>
                enginesRunningReducer || isRunning, initialValue);
    }

    // Task 3
    areAtLeastThisMuchEnginesRunning(count) {
        let countOfRunningEngines = this.engines.filter(engine => engine.isRunning === true);
        return  count <= countOfRunningEngines.length;
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

    stopEngine(index) {
        const engine = this.engines[index];
        engine.turnOff();
    }
}

const car = new Car();

const airplane = new Airplane();

// airplane.startEngine(0);
// airplane.startEngine(3);
airplane.startAllEngines();

// airplane.stopEngine(0);
// airplane.stopEngine(1);
// airplane.stopEngine(2);
// airplane.stopEngine(3);

const result1 = airplane.areAllEnginesRunning();
const result2 = airplane.areAllEnginesStopped();
const result3 = airplane.isAnyEngineRunning();
const result4 = airplane.areAtLeastThisMuchEnginesRunning(2);

console.log(airplane);
console.log("Are all airplane engines running? ", result1);
console.log("Are all airplane engines stopped? ", result2);
console.log("Is any airplane engine running? ", result3);
console.log("Are at least this much airplane's engines running? ", result4);
