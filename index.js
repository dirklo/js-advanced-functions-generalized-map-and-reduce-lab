const map = function(array, fn) {
    const final = [];
    for (let item of array) {
        final.push(fn(item))
    };
    return final;
}

const reduce = function(array, fn, start) {
    let final = (!!start) ? start : array[0];
    let i = (!!start) ? 0 : 1
    for (; i < array.length; i++) {
        final = fn(array[i], final)
    };
    return final
}