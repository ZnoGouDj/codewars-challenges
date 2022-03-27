// Color Ghost
// Create a class Ghost

// Ghost objects are instantiated without any arguments.

// Ghost objects are given a random color attribute of 
// "white" or "yellow" or "purple" or "red" when instantiated

// ghost = new Ghost();
// ghost.color //=> "white" or "yellow" or "purple" or "red"

var colors = ['white', 'yellow', 'purple', 'red'];

class Ghost {
    get color() {
        return colors[Math.floor(colors.length * Math.random())]
    }
}

ghost = new Ghost();
ghost.color

//top

var Ghost = function () {
    this.color = ["white", "yellow", "purple", "red"][Math.floor(Math.random() * 4)];
};

//top2

var Ghost = function () {
    var colors = ["white", "yellow", "purple", "red"];
    var colorIndex = Math.floor(Math.random() * (colors.length));
    this.color = colors[colorIndex];
};