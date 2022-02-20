exports.f1 = function(a, b) {
    return a + b;
}

function f2() {
    console.log("in f2");
}

exports.factorial = function(n) {
    var fact = 1;
    for (var i = 2; i <= n; i++) {
        fact = fact * i;
    }
    return fact;
}

//calling and printing values
//console.log(exports.f1(10, 20));
//f2();