// Create a class Ball.

// Ball objects should accept one argument for "ball type" when instantiated.

// If no arguments are given, ball objects should instantiate with a "ball type" of "regular."

// ball1 = new Ball();
// ball2 = new Ball("super");

// ball1.ballType     //=> "regular"
// ball2.ballType     //=> "super"

// Test.assertEquals(new Ball().ballType, "regular");
// Test.assertEquals(new Ball("super").ballType, "super");

var Ball = function (ballType: string = 'regular'): string {
  this.ballType = ballType;
  if (ballType === 'super') {
    return 'super';
  } else {
    return 'regular';
  }
};

//top
var Ball1 = function (ballType: string) {
  this.ballType = ballType || 'regular';
};

//top2
// class Ball2 {
//     constructor(ballType = "regular") {
//         this.ballType = ballType;
//     }
// }
