const { odd, even } = require('./var');

function chechOddOrEven(num){
    if(num % 2){
        return odd;
    }
    return even;
}

module.exports = chechOddOrEven;