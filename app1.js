'use strict';
function getDigitsOfNumber (number) {
    if (!Number.isInteger(number) || number > 999 || number < 0) {
        console.log('Должно быть целое число из диапазона [0..999]');
        return {};
    }
    return {
        units: number % 10,
        tens: Math.floor (number / 10) % 10,
        hundereds:  Math.floor (number / 100),
    }
}
let num = Number(prompt("Введите число из диапазона [0...999]"));
console.log(getDigitsOfNumber(num));