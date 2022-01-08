module.exports = function toReadable (number) {
  module.exports = function toReadable (num) {
  
    let oneToTen = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine', 'ten'];
    let elevenToNineteen = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen', 'twenty'];
    let twentyToNinety = ['zero', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy','eighty', 'ninety'];

    if (num >= 0 && num <=10) return oneToTen[num];
    if (num >= 11 && num <=20) return elevenToNineteen[num - 11];
    let numbersEndingInZero = twentyToNinety[num/10];
    let twoDigitNumbers = twentyToNinety[Number(num.toString()[0])] + ' ' + oneToTen[Number(num.toString()[1])];
    if(num.toString().length === 2 && num.toString()[1] === '0') return numbersEndingInZero;
    if(num.toString().length === 2 && num.toString()[1] !== 0) return twoDigitNumbers;

    if(num.toString().length === 3) {
        console.log(num.toString()[1] + num.toString()[2]);
        console.log(Number(num.toString()[1] + num.toString()[2]));
        let twoLastDigits = num.toString()[1] + num.toString()[2];
        if(Number(twoLastDigits) >=11 && Number(twoLastDigits) <= 19) return oneToTen[num.toString()[0]] + ' hundred ' + elevenToNineteen[Number(twoLastDigits) - 11];

        if(twoLastDigits === "00") return oneToTen[num.toString()[0]] + ' hundred';
        if(num.toString()[2] === '0') return oneToTen[num.toString()[0]] + ' hundred ' + twentyToNinety[twoLastDigits/10];
        if(num.toString()[2] !== '0' && twoLastDigits[0] === '0') return oneToTen[num.toString()[0]] + ' hundred ' + oneToTen[Number(num.toString()[2])];;
        if(num.toString()[2] !== '0') return oneToTen[num.toString()[0]] + ' hundred ' + twentyToNinety[Number(num.toString()[1])] + ' ' + oneToTen[Number(num.toString()[2])];;
    }

}

// console.log(toReadable(802));

}
