// jshint esversion: 6
/*jslint node: true*/

"use strict";

function showResult() {
    alert(calculate());
}

function getSelectedMethod() {
    let value = 0;
    const methodElement = document.getElementById("selectMethod");
    value = methodElement.options[methodElement.selectedIndex].value;
    return value;
}

function getInPut() {
    let input = "";
    input = document.getElementById("inputData");
    return input.value;
}

function calculate() {
    const value = getSelectedMethod();
    let result;
    switch (value) {
        case '1': result = getMax(); break;
        case '2': result = getMaxOfThree(); break;
        case '3': result = getIsVowel(); break;
        case '4': result = getSum(); break;
        case '5': result = getMultiply(); break;
        case '6': result = getReserve(); break;
        case '7': result = getLongestWord(); break;
        case '8': result = getFilterLongWords(); break;
        case '9': result = getSumOfSquares(); break;
        case '10': result = getOddNumber(); break;
        case '11': result = getSumOfSquaresOfEvens(); break;
        case '12': result = getSecondBiggest(); break;
        case '13': result = getFibonacci(); break;
        default: result = "You haven't chosen the method";
    }
    return result;
}

function getMax() {
    const input = getInPut();
    const values = input.split(",");
    return max(values[0], values[1]);
}

function getMaxOfThree() {
    const input = getInPut();
    const values = input.split(",");
    return maxOfThree(values[0], values[1], values[2]);
}

function getIsVowel() {
    const input = getInPut();
    let result = false;
    if (input.length === 1) {
        result = isVowel(input);
    }
    return result ? 'Is Vowel' : 'Not Vowel';
}

function getSum() {
    const input = getInPut();
    const values = input.split(',');
    return sum(values);
}

function getMultiply() {
    const input = getInPut();
    const values = input.split(',');
    return multiply(values);
}

function getReserve() {
    const input = getInPut();
    const values = input.split('');
    return reserve(values);
}

function getLongestWord() {
    const input = getInPut();
    const values = input.split(',');
    return findLongestWord(values);
}

function getFilterLongWords() {
    const input = getInPut();
    const values = input.split(',');
    let words = [];
    for (let i = 0; i < values.length - 1; i++) {
        words.push(values[i]);
    }
    return filterLongWords(words, values[values.length - 1]);
}

function getSumOfSquares() {
    const input = getInPut();
    const values = input.split(',');
    return computeSumOfSquares(values);
}

function getOddNumber() {
    const input = getInPut();
    const values = input.split(',');
    return filterOddNumbers(values);
}

function getSumOfSquaresOfEvens() {
    const input = getInPut();
    const values = input.split(',');
    return computeSumOfSquaresOfEvens(values);
}

function getSecondBiggest() {
    const input = getInPut();
    const values = input.split(',');
    return finSecondBiggest(values);
}

function getFibonacci() {
    const input = getInPut();
    const values = input.split(',');
    return printFibonacci(values);
}