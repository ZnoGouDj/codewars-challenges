/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.

well(['bad', 'bad', 'bad']), 'Fail!');
well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
*/

function well(x) {
    let counter = 0;
    for (let i = 0; i < x.length; i++) {
        x[i] === 'good' ? counter += 1 : counter += 0;
    }
    if (counter === 0) {
        return ('Fail!');
    } else if (counter <= 2) {
        return ('Publish!');
    } else {
        return ('I smell a series!');
    }
}

//another

const well = x => {
    const good_count = x.filter(x => x == 'good').length;
    return good_count < 1 ? 'Fail!' : 
           good_count < 3 ? 'Publish!' : 'I smell a series!';
  }

  //another

  function well(x) {
    const count = x.reduce((s, v) => s + (v == 'good'), 0);
    return count ? count > 2 ? 'I smell a series!' : 'Publish!' : 'Fail!';
  }