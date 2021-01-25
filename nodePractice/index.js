// exporting functions in node
module.exports.add = (num1, num2) => {
    return num1 + num2;
}

module.exports.multiply = (num1, num2) => {
    return num1 * num2;
}

// instead of module.exports you can use exports

exports.square = num => {
    return num * num;
}

exports.divide = (numerator, demoninator) => {
    return numerator / demoninator;
}
