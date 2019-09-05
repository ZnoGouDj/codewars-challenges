/*
For every good kata idea there seem to be quite a few bad ones!

In this kata you need to check the provided array (x) for good ideas 'good' and bad ideas 'bad'. 
If there are one or two good ideas, return 'Publish!', if there are more than 2 return 'I smell a series!'. 
If there are no good ideas, as is often the case, return 'Fail!'.

well(['bad', 'bad', 'bad']), 'Fail!');
well(['good', 'bad', 'bad', 'bad', 'bad']), 'Publish!');
well(['good', 'bad', 'bad', 'bad', 'bad', 'good', 'bad', 'bad', 'good']), 'I smell a series!');
*/

function well(x){
    let counter = 0;
    for (let i = 0; i < x.length; i++) {
       return x[i] === 'good' ? counter += 1 : false; 
    }
        return counter === 0 ? 'Fail!' : counter <= 2 ? 'Publish!' : 'I smell a series!';
}