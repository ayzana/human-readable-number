module.exports = function toReadable (number) {
  const numbers = {
    0 : 'zero',
    1 : 'one',
    2 : 'two',
    3 : 'three',
    4 : 'four',
    5 : 'five',
    6 : 'six',
    7 : 'seven',
    8 : 'eight',
    9 : 'nine' ,
    10 : 'ten',
    11 : 'eleven',
    12 : 'twelve',
    13 : 'thirteen',
    14 : 'fourteen',
    15: 'fifteen',
    16: 'sixteen',
    17: 'seventeen',
    18: 'eighteen',
    19: 'nineteen'
  };
  const dozens = {
    20 : 'twenty',
    30: 'thirty',
    40: 'forty',
    50: 'fifty',
    60: 'sixty',
    70: 'seventy',
    80: 'eighty',
    90: 'ninety'
  };
let num = String(number);
if (number < 20)
return numbers[number];
if (num.length === 2 && num[1] == 0) {
  return dozens[num[0] + '0'];
  }
if (num.length === 2 && num[1] != 0) {
return dozens[num[0] + '0'] + ' ' + numbers[num[1]];
}
if (num.length ===3 && num.slice(1, 3) == '00'){
  return numbers[num[0]] + ' ' + 'hundred';
}
if (num.length ===3 && num.slice(1, 3) <20 && num.slice(1, 3) > 9){
  return numbers[num[0]] + ' ' + 'hundred' + ' ' + numbers[num.slice(1, 3)];
}
if (num.length === 3 && num[1] != 0 && num[2] != 0) {
 return numbers[num[0]] + ' ' + 'hundred' + ' ' + dozens[num[1] + '0'] + ' ' + numbers[num[2]];}
 if (num.length === 3 && num[1] != 0 && num[2] == 0) {
  return numbers[num[0]] + ' ' + 'hundred' + ' ' + dozens[num[1] + '0'];}
if (num.length === 3 && num[1] == 0 && num[2] !== 0) {
    return numbers[num[0]] + ' ' + 'hundred' + ' ' + numbers[num[2]];}
};
