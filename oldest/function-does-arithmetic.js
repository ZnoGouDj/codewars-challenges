/*
arithmetic(5, 2, "add")      => returns 7
arithmetic(5, 2, "subtract") => returns 3
arithmetic(5, 2, "multiply") => returns 10
arithmetic(5, 2, "divide")   => returns 2.5 */

function arithmetic(a, b, operator) {
    switch (operator) {
        case "add":
            return a + b;
            break;
        case "subtract":
            return a - b;
            break;
        case "multiply":
            return a * b;
            break;
        case "divide":
            return a / b;
            break;
    }
}


// arithmetic(1, 2, "add")
// arithmetic(8, 2, "subtract")