const fibonacci = function(string) {
    let number = parseInt(string);
    if(number < 0){
        return "OOPS";
    }
    if(number === 0) {return 0;}
    if(number === 1 || number === 2) {return 1;}

    let sum = 0;
    let prev = 1;
    let next = 2;

    for (let curr = 3;curr<number;curr++){
        sum = prev + next;
        prev = next;
        next = sum;

    }

    return sum;
};

// Do not edit below this line
module.exports = fibonacci;
