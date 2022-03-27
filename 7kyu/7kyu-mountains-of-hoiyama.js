function mountainsOfHoiyama(width) {
  let bottom = (width + 1) / 2;
  let sum = 0;
  let iteration = 1;

  for (let i = bottom; i < width; i++) {
    sum += sumBranches(iteration, i);
    sum += i;
    iteration += 2;
  }

  sum += width;

  return sum;
}

function sumBranches(iteration, number) {
  let sum = 0;

  for (let i = iteration; i < number; i++) {
    sum += i * 2;
  }

  return sum;
}

/*

width = 17

                   17                  ->  17
                15,16,15               ->  46
             13,14,15,14,13            ->  69
          11,12,13,14,13,12,11         ->  86
        9,10,11,12,13,12,11,10,9       ->  97
       7,8,9,10,11,12,11,10,9,8,7      -> 102
      5,6,7,8,9,10,11,10,9,8,7,6,5     -> 101
     3,4,5,6,7,8,9,10,9,8,7,6,5,4,3    ->  94
    1,2,3,4,5,6,7,8,9,8,7,6,5,4,3,2,1  ->  81
                                        +____
                                  weight: 693

*/

/*

1. sum + height[i]
2. if [i] > 0 ===> for (let i = 1; i <= i; i++) { sum += (height[i] - i) * 2 }

*/
