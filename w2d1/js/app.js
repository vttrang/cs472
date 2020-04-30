// jshint esversion: 6
/*jslint node: true*/
"use strict";
const myTest = function () {

};

const x = 1;
function f() {
    let y = 3;
    const sum = function() {
        const z = 3;
        console.log(x + y + z);
    };
    y = 10;
    return sum; } //end of f
const g = f();
g();