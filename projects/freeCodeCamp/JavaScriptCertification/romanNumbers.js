function convertToRoman(num) {

    const romanNumbers = [
        ['I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
        ['X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
        ['C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
        ['M', 'MM', 'MMM', 'MV!', 'V!', 'V!M', 'V!MM', 'V!MMM', 'MX!']
    ];

    const romanNumber = [];

    const numToString = num.toString();
    const numLength = numToString.length;

    for (let i = 0; i < numLength; i++) {
        const currentIndex = numLength - 1 - i;
        const currentNum = numToString[currentIndex];
        romanNumber.unshift(romanNumbers[i][parseInt(currentNum) - 1]);
    }

    const romanNumberResult = romanNumber.join('');
    return romanNumberResult;

}

convertToRoman(2);
convertToRoman(8);
convertToRoman(9);
convertToRoman(12);
convertToRoman(16);
convertToRoman(29);
convertToRoman(44);
convertToRoman(68);
convertToRoman(97);
convertToRoman(400);

[[500],
]],
