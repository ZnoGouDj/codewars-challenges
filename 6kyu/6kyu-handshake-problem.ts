function getParticipants(handshakes) {
  let sum = 0;

  for (let i = 1; i < handshakes * 100; i++) {
    if (sum + i >= handshakes) return i + 1;
    sum += i;
  }
  return 0;
}

function getParticipants1(handshakes) {
  let x = handshakes;
  let participants = 0;
  while (x > 0) {
    x = x - participants;
    participants++;
  }
  return participants;
}

console.log(getParticipants(0)); // => 0
console.log(getParticipants(1)); // => 2
console.log(getParticipants(3)); // => 3
console.log(getParticipants(6)); // => 4
console.log(getParticipants(7)); // => 5
