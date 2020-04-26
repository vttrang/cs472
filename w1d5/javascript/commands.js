"use strict";
function max(a, b) {
    return a > b ? a : b;
}

function maxOfThree(a, b, c) {
    let max = a;
    if (b > max) {
        max = b;
    }
    if (c > max) {
        max = c;
    }
    return max;
}

function isVowel(c) {
    return c === 'a' || c === 'e' || c === 'i' || c === 'o' || c === 'u';
}

function sum(arr) {
    return arr.reduce(mySum);
}

function mySum(total, num) {
    return parseInt(total) + parseInt(num);

}

function multiply(arr) {
    return arr.reduce(myMultiply);
}

function myMultiply(total, num) {
    return parseInt(total) * parseInt(num);
}

function reserve(arr) {
    let result = "";
    for (let i = arr.length - 1 ; i >= 0; i--) {
        result += arr[i];
    }
    return result;
}

function findLongestWord(arr) {
    let longestWord = 0;
    for (let i = 0; i < arr.length; i++) {
        let wordLength = arr[i].length;
        if (wordLength > longestWord) {
            longestWord = wordLength;
        }
    }
    return 'Length of longest word: ' + longestWord;
}

function filterLongWords(arr, n) {
    if (arr.length > 1) {
        return arr.filter(currentValue => currentValue.length > n)
    }
    return [];
}

function computeSumOfSquares(arr) {
    return arr.reduce(myComputeSumOfSquares);
}

function myComputeSumOfSquares(total, num) {
    let a = parseInt(total);
    let i = parseInt(num);
    return a + (i * i);
}

function filterOddNumbers(arr) {
    return arr.filter(currentValue => currentValue % 2 === 0);
}

function filterEvenNumbers(arr) {
    return arr.filter(currentValue => currentValue % 2 !== 0);
}

function computeSumOfSquaresOfEvens(arr) {
    let evenNumbers = filterEvenNumbers(arr);
    return computeSumOfSquares(evenNumbers);
}

function finSecondBiggest(arr) {
    if (arr.length === 0)
        return null;

    let secondMax = 0, max = arr[0];

    for (let i = 0; i <arr.length; i++) {
        if (arr[i] > max) {
            secondMax = max;
            max = arr[i];
        }
        else if(arr[i]>max && arr[i] !== secondMax)
            max = arr[i];
    }
    return secondMax;
}

function printFibonacci(n, a, b) {
    let arr = [];
    arr[0] = a;
    arr[1] = b;

    let i = 2;
    while (i < n) {
        arr[i] = arr[i-1] + arr[i-2];
        i++;
    }
    return arr;
}

function showTime() {
    let today = new Date();
    let date = today.getFullYear()+'-'+today.getDate()+'-'+(today.getMonth()+1);
    let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    document.getElementById("clock").innerText = date+' '+time;
    setTimeout(showTime, 1000);
}