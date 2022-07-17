interface List {
  string: number;
}

function cakes(recipe: List, available: List): number {
  let amount = Infinity;

  for (let key in recipe) {
    if (!available[key]) return 0;

    if (Math.floor(available[key] / recipe[key]) < amount) {
      amount = Math.floor(available[key] / recipe[key]);
    }
  }

  return amount;
}
