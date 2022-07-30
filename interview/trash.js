class Vehicle {
    engines = 1;

    ignition() {
        output('Turning on my engine.');
    }

    drive() {
        ignition();
        output('Steering and moving forward!');
    }
}

class Car extends Vehicle {
    wheels = 4;

    drive() {
        inherited: drive();
        output('Rolling on all ', wheels, ' wheels!');
    }
}

class SpeedBoat extends Vehicle {
    engines = 2;

    ignition() {
        output('Turning on my ', engines, ' engines.');
    }

    pilot() {
        inherited: drive();
        output('Speeding through the water with ease!');
    }
}