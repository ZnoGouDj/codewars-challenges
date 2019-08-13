function countByX(n, x) {
    let array = [];
    for (let i = 1; i <= x; i++) {
        const nextResult = n * i; 
        if (nextResult % 3 === 0) {
            array.push(nextResult);
        }
    }
    return array;
}