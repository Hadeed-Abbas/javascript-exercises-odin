const repeatString = function(string, num) {
    if(num<0) return 'ERROR';
    let resultantString = '';
    for(let i=0;i<num;i++){
        resultantString += string;
    }
    return resultantString;
};

// Do not edit below this line
module.exports = repeatString;
