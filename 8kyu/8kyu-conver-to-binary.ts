/*

Given a non-negative integer n, write a function toBinary/ToBinary which returns that number in a binary format.

to_binary(1)  should return 1 
to_binary(5)  should return 101 
to_binary(11) should return 1011 
*/

function to_binary(n: N): N {
  return +n.toString(2);
}

//another

let toBinary = (n: N): N => +n.toString(2);

//another

toBinary = (n: N): N => parseInt(n.toString(2));
