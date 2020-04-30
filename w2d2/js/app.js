"use strict";

const count = (function() {
    let counter = 0; // Prob7, counter is a free variable for functions (add, reset and on what assign value to it)

    // Prob 6
    const add = function() {
        return counter += 1;
    }

    // Prob 6
    const reset = function() {
        return counter = 0;
    }

    // Prob 8 - 1 way
    const make_adder = function(inc) {
        return function() {
            return counter += inc;
        };
    }

    return {
        add: add,
        reset: reset,
        make_adder: make_adder
    }
})();

console.log(count.add());
console.log(count.reset());
const add5 = count.make_adder(5);
console.log(add5());
console.log(add5());

// Pro 8 - 2 way
count.make_adder_2 = function(inc) {
    return function() {
        let i = inc;
        let result = count.add();
        while (i > 1) {
            result = count.add();
            i--;
        }
        return result;
    }
}
count.reset();
const add3 = count.make_adder_2(3);
console.log(add3());
console.log(add3());

const employee = (function() {
    let name, age, salary;

    function setName(n) {
        name = n;
    }

    function setAge(a) {
        age = a;
    }

    function setSalary(s) {
        salary = s;
    }

    function getName() {
        return name;
    }

    function getAge() {
        return age;
    }

    function getSalary() {
        return salary;
    }

    function increasSalary(percentage) {
        let newSalary = getSalary() * (1 + (percentage / 100));
        setSalary(newSalary);
    }

    function incrementAge() {
        let newAge = getAge() + 1;
        setAge(newAge);
    }

    return {
        setAge: setAge,
        setName: setName,
        setSalary: setSalary,
        increasSalary: increasSalary,
        incrementAge: incrementAge
    }
})();

employee.address = '';
employee.setAddress = function(add) {
    employee.address = add;
}
employee.getAdress = function() {
    return employee.address;
}
employee.setAddress('ABC');
console.log(`${employee.address}`);