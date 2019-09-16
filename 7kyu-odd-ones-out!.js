/*
The town sheriff dislikes odd numbers and wants all odd numbered 
families out of town! In town crowds can form and individuals are
often mixed with other people and families. However you can distinguish 
the family they belong to by the number on the shirts they wear. 
As the sheriff's assistant it's your job to find all the odd numbered 
families and remove them from the town!

Challenge: You are given a list of numbers. The numbers each repeat 
a certain number of times. Remove all numbers that repeat an odd number 
of times while keeping everything else the same.

oddOnesOut([1, 2, 3, 1, 3, 3]) = [1, 1]
In the above example:

the number 1 appears twice
the number 2 appears once
the number 3 appears three times
2 and 3 both appear an odd number of times, so they are removed from 
the list. The final result is: [1,1]

Here are more examples:

oddOnesOut([1, 1, 2, 2, 3, 3, 3]) = [1, 1, 2, 2]
oddOnesOut([26, 23, 24, 17, 23, 24, 23, 26]) = [26, 24, 24, 26]
oddOnesOut([1, 2, 3]) = []
oddOnesOut([1]) = []
Are you up to the challenge?
*/


let oddOnesOut = nums => nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
/*
1) заходит массив чисел
2) к КАЖДОМУ из этих чисел применяетя фильтр (1 массив копия)
3) фильтр вызывает снова фильтр и походу получается так, что проход по 
каждому числу из (1 массив копия) каждый раз сравнивает значение этого элемента
со всеми элементами из такого же целого массива.
    [1, 2, 3] 
    1) 1 == 1?
    2) 1 == 2?
    3) 1 == 3?
    4) 2 == 1?
    5) 2 == 2?
    6) 2 == 3?
При каждой проверке будет по одному совпадению, то есть эти элементы надо удалить (они нечетные).
4) поэтому выполняем проверку длины нового отфильтрованного массива (второго) таким образом (length%2 ===0)
5) таким образом проходят только числа, которые встречаются в массиве четное количество раз.
6) получается что это такой распространенный подход: проверять массив функцией, которая применяет к каждому
элементу такую же функцию, и ты сравниваешь элементы из одного и того же массива между собой.*/

//top

function oddOnesOut(a) {
    let d = a.reduce((x, y) => (x[y] = (x[y] || 0) + 1, x), {});
    return a.filter(x => d[x] % 2 === 0);
}

//top2

function oddOnesOut(nums) {
    return nums.filter(n => nums.filter(x => x === n).length % 2 === 0);
} //(то же самое длиннее)

//strange method
const oddOnesOut = (nums) => {
    let obj = {};
    for (let i = 0; i < nums.length; i++) {
        !obj[nums[i]] ? obj[nums[i]] = 1 : obj[nums[i]] += 1;
    }
    return nums.filter((num) => {
        return obj[num] % 2 === 0;
    })
};