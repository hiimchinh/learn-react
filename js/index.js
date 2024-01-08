function makeBetweenFunc(min, max) {
    return function(number) {
        return number > min && number < max;
    }
}

const between50And100 = makeBetweenFunc(50, 100);
console.log(between50And100(70));
console.log(between50And100(110));
