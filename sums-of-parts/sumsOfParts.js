function partsSums(ls) {
    let total = 0;
    let newArray = [];
    for (let i = 0; i < ls.length; i++) {
        total += ls[i];
    }
    newArray.push(total);
    for (let j = 0; j < ls.length; j++){
        total -= ls[j];
        newArray.push(total);
    }
    return newArray;
}