// The Story:
// Bob is working as a bus driver. However, he has become extremely
// popular amongst the city's residents. With so many passengers wanting
// to get aboard his bus, he sometimes has to face the problem of not
// enough space left on the bus! He wants you to write a simple program
// telling him if he will be able to fit all the passengers.
// Task Overview:
// You have to write a function that accepts three parameters:

// cap is the amount of people the bus can hold excluding the driver.
// on is the number of people on the bus.
// wait is the number of people waiting to get on to the bus.
// If there is enough space, return 0, and if there isn't, return the
// number of passengers he can't take.

// Usage Examples:
// enough(10, 5, 5);
// 0, He can fit all 5 passengers
// enough(100, 60, 50);
// 10, He can't fit 10 out of 50 waiting

// Test.assertEquals(enough(10, 5, 5), 0);
// Test.assertEquals(enough(100, 60, 50), 10);
// Test.assertEquals(enough(20, 5, 5), 0);

function enough<T extends number>(cap: T, on: T, wait: T): number {
  return on + wait < cap ? 0 : wait + on - cap;
}

const enough1 = <T extends number>(cap: T, on: T, wait: T): number => (on + wait < cap ? 0 : wait + on - cap);

//top
function enough2<T extends number>(cap: T, on: T, wait: T): number {
  return Math.max(wait + on - cap, 0);
}
