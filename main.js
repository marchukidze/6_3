
var x;
var znak;
var y;

function doMath(x, znak, y) {
    if (znak == '+') {
        return x + y;
    } else if (znak == '-') {
        return x - y;
    } else if (znak == '*') {
        return x * y;
    } else if (znak == '/') {
        return x / y;
    } else if (znak == '%') {
        return x % y;
    } else if (znak == '^') {
        return x ^ y;
    } else {
        return false
    }
}

console.log(doMath(x, znak, y));