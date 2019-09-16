/*
Make a function called crossProduct that takes two 3 dimensional vectors 
(in the form of two arrays) and returns their cross product. 
You need to check if the passed arguments are of the expected format, 
otherwise throw the message: "Arguments are not 3D vectors!".

crossProduct([1,0,0],[0,1,0]) //should return [0,0,1]
crossProduct('gobbledigook', [1,1,1]) //should throw 
the string "Arguments are not 3D vectors!"
Your function should handle non integers.

More info on cross products: https://en.wikipedia.org/wiki/Cross_product

computing cross product of two vectors:
(u1, u2, u3) * (v1, v2, v3) =
(u2v3 - u3v2, u3v1 - u1v3, u1v2 - u2v1).

crossProduct([1,0,0], [0,1,0], 3, 3)          should return [0,0,1] 
crossProduct([1,2,3,4,5], [5,4,3,2,1], 5, 5)  should return NULL 
crossProduct([6,6,6], null, 3, 3)             should return NULL 
crossProduct(null, null, 3, 3)                should return NULL 

Test.assertSimilar(crossProduct([1,0,0], [0,1,0]), [0,0,1]);
Test.assertSimilar(crossProduct([3,2,1], [1,2,3]), [4,-8,4]);
*/

function crossProduct(vector1, vector2) {
    if (vector1 === null || vector2 === null) {
        throw "Arguments are not 3D vectors!";
    } else if (vector1 === undefined || vector2 === undefined) {
        throw "Arguments are not 3D vectors!";
    } else if (vector1.some(elem => typeof elem !== "number")) {
        throw "Arguments are not 3D vectors!";
    } else if (vector2.some(elem => typeof elem !== "number")) {
        throw "Arguments are not 3D vectors!";
    } else if (vector1.length !== 3 || vector2.length !== 3) {
        throw "Arguments are not 3D vectors!";
    }

    let u1 = vector1[0];
    let u2 = vector1[1];
    let u3 = vector1[2];
    let v1 = vector2[0];
    let v2 = vector2[1];
    let v3 = vector2[2];
    let crossProd = [];

    crossProd.push(u2 * v3 - u3 * v2);
    crossProd.push(u3 * v1 - u1 * v3);
    crossProd.push(u1 * v2 - u2 * v1);
    return crossProd;
}

//top

function crossProduct(vector1, vector2) {
    if (!(vector1 instanceof Array) || !(vector2 instanceof Array) || vector1.length !== 3 || vector2.length !== 3) {
        throw "Arguments are not 3D vectors!"
    }

    return [(vector1[1] * vector2[2] - vector2[1] * vector1[2]), (vector1[2] * vector2[0] - vector2[2] * vector1[0]), (vector1[0] * vector2[1] - vector2[0] * vector1[1])]
}