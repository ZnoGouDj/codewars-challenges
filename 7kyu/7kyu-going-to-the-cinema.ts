function factorial(n: N): N {
  return n ? n * factorial(n - 1) : 1;
}

function movie(card: N, ticket: N, perc: N): N {
  let priceA = 0;
  let priceB = card;
  let ticketDiscountedPrice = ticket;

  for (let i = 1; i < 999999; i++) {
    priceA += ticket;
    ticketDiscountedPrice *= perc;
    priceB += ticketDiscountedPrice;

    if (Math.ceil(priceB) < priceA) {
      return i;
    }
  }
}

function movie1(card: N, ticket: N, perc: N): N {
  let priceA = 0;
  let priceB = card;
  let ticketDiscountedPrice = ticket;
  let counter = 0;

  while (!(Math.ceil(priceB) < priceA)) {
    priceA += ticket;
    ticketDiscountedPrice *= perc;
    priceB += ticketDiscountedPrice;
    counter++;
  }

  return counter;
}

// System B : 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90 ( = 536.5849999999999, no rounding for each ticket)
// ceil(price of System B) < price of System A.
console.log(movie(100, 10, 0.95), 24);
