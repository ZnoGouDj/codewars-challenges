function scoreboard(whoAteWhat) {
  const foodValue = {
    chickenwings: 5,
    hamburgers: 3,
    hotdogs: 2,
  };

  const result: { name: string; score: number }[] = [];

  for (let i = 0; i < whoAteWhat.length; i++) {
    let score = 0;
    let name = '';
    for (let key in whoAteWhat[i]) {
      if (key === 'name') {
        name = whoAteWhat[i][key];
      } else {
        score += whoAteWhat[i][key] * foodValue[key];
      }
    }
    result.push({
      name,
      score,
    });
  }

  return result
    .sort((a, b) => b.score - a.score)
    .sort((a, b): any => {
      if (a.score === b.score) {
        return a.name.localeCompare(b.name);
      }
    });
}

//!

function scoreboard1(whoAteWhat) {
  return whoAteWhat
    .map((obj) => ({
      name: obj.name,
      score: obj.chickenwings * 5 + obj.hamburgers * 3 + obj.hotdogs * 2,
    }))
    .sort((a, b) => b.score - a.score || a.name > b.name); // sort by this OR this
}

var whoAteWhat = [
  {
    name: 'Billy The Beast',
    chickenwings: 17,
    hamburgers: 7,
    hotdogs: 8,
  },
  {
    name: 'Habanero Hillary',
    chickenwings: 5,
    hamburgers: 17,
    hotdogs: 11,
  },
  {
    name: 'Joey Jaws',
    chickenwings: 8,
    hamburgers: 8,
    hotdogs: 15,
  },
  {
    name: 'Big Bob',
    chickenwings: 20,
    hamburgers: 4,
    hotdogs: 11,
  },
];

console.log(
  scoreboard([
    {
      name: 'Big Bob',
      chickenwings: 20,
      hamburgers: 4,
      hotdogs: 11,
    },
  ]),
);
/*
      [{
          name: 'Big Bob',
          score: 134,
      }, ],
  );*/
console.log(
  scoreboard([
    {
      name: 'Joey Jaws',
      chickenwings: 8,
      hamburgers: 8,
      hotdogs: 15,
    },
    {
      name: 'Big Bob',
      chickenwings: 20,
      hamburgers: 4,
      hotdogs: 11,
    },
  ]),
);
/*
      [{
              name: 'Big Bob',
              score: 134,
          },
          {
              name: 'Joey Jaws',
              score: 94,
          },
      ],
  ); */
console.log(
  scoreboard([
    {
      name: 'Joey Jaws',
      chickenwings: 0,
      hamburgers: 1,
      hotdogs: 1,
    },
    {
      name: 'Big Bob',
      chickenwings: 1,
      hamburgers: 0,
      hotdogs: 0,
    },
  ]),
);
/*
      [{
              name: 'Big Bob',
              score: 5,
          },
          {
              name: 'Joey Jaws',
              score: 5,
          },
      ],
  );*/
console.log(
  scoreboard([
    {
      name: 'Pippi the cat',
      chickenwings: 27,
      hotdogs: 19,
      hamburgers: 69,
    },
    {
      name: 'Marko Sustarsic',
      chickenwings: 29,
      hotdogs: 59,
      hamburgers: 90,
    },
    {
      name: 'Alex',
      chickenwings: 94,
      hotdogs: 91,
      hamburgers: 83,
    },
    {
      name: 'Rory the kickass developer',
      chickenwings: 93,
      hotdogs: 9,
      hamburgers: 74,
    },
    {
      name: 'Laura - definitely not a beginner',
      chickenwings: 3,
      hotdogs: 30,
      hamburgers: 37,
    },
    {
      name: 'Troy Maeder',
      chickenwings: 61,
      hotdogs: 9,
      hamburgers: 71,
    },
    {
      name: 'Sofia the night coder',
      chickenwings: 96,
      hotdogs: 89,
      hamburgers: 69,
    },
    {
      name: 'Giacomo Sorbet',
      chickenwings: 89,
      hotdogs: 44,
      hamburgers: 3,
    },
    {
      name: 'Daymos',
      chickenwings: 33,
      hotdogs: 75,
      hamburgers: 5,
    },
    {
      name: 'Nelson',
      chickenwings: 27,
      hotdogs: 19,
      hamburgers: 69,
    },
  ]),
);

/*
[{
      name: 'Alex',
      score: 901,
  },
  {
      name: 'Daymos',
      score: 330
  },
  {
      name: 'Giacomo Sorbet',
      score: 542
  },
  {
      name: 'Laura - definitely not a beginner',
      score: 186
  },
  {
      name: 'Marko Sustarsic',
      score: 533
  },
  {
      name: 'Nelson',
      score: 380
  },
  {
      name: 'Pippi the cat',
      score: 380
  },
  {
      name: 'Rory the kickass developer',
      score: 705
  },
  {
      name: 'Sofia the night coder',
      score: 865
  },
  {
      name: 'Troy Maeder',
      score: 536
  },
];
*/
/*
[{
  name: 'Alex',
  score: 901
}, {
  name: 'Sofia the night coder',
  score: 865
}, {
  name: 'Rory the kickass developer',
  score: 705
}, {
  name: 'Giacomo Sorbet',
  score: 542
}, {
  name: 'Troy Maeder',
  score: 536
}, {
  name: 'Marko Sustarsic',
  score: 533
}, {
  name: 'Nelson',
  score: 380
}, {
  name: 'Pippi the cat',
  score: 380
}, {
  name: 'Daymos',
  score: 330
}, {
  name: 'Laura - definitely not a beginner',
  score: 186
}]
*/
