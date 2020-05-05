"use strict";
const count = (function() {
    let counter = 0; // Prob7, counter is a free variable for functions (add, reset and on what assign value to it)

    // Prob 6
    const add = function() {
        return counter += 1;
    };

    // Prob 6
    const reset = function() {
        counter = 0;
        return counter;
    };

    // Prob 8 - 1 way
    const make_adder = function(inc) {
        return function() {
            return counter += inc;
        };
    };

    return {
        add: add,
        reset: reset,
        make_adder: make_adder
    };
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
    };
};
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
};
employee.getAdress = function() {
    return employee.address;
};
employee.setAddress('ABC');
console.log(`${employee.address}`);


// Prob 6
const myCalculator = (function() {
    const doAddition = (num1, num2) => num1 + num2;
    const doMultiplication = (num1, num2) => num1 * num2;

    return {
        doAddition: doAddition,
        doMultiplication: doMultiplication
    };
})();
console.log(myCalculator.doAddition(1, 2)); // 3
console.log(myCalculator.doMultiplication(3, 4)); //12

// Prob1
// variable hoisting
console.log(x); //undefined
var x = 10;
console.log(x) // 10

// function hoisting
var name = "Baggins";

(function() {
    // Outputs: "Original name was undefined"
    console.log("Original name was " + name);

    var name = "Underhill";

    // Outputs: "New name is Underhill"
    console.log("New name is " + name);
})();

//Prob 2 - Global, local
//Global
var course = "WAP";
// code here can use course
function myFunction() {
    // code here can also use course
}
//Local
// code here can NOT use carName
function myFunction() {
    var carName = "Volvo";
    // code here CAN use carName
}
// code here can NOT use carName

//Prob 2 - Block
{
    let x = 2;
}
// x can NOT be used here


// Prob 3
function init() {
    const name = "Mozilla";

    function displayName() {
        console.log(name);
    }
    displayName();
}
init();

// Prob 4
function Student(newStudentId, newFirstName, newLastName, newCgpa) {
    this.studentId = newStudentId;
    this.firstName = newFirstName;
    this.lastName = newLastName;
    this.cgpa = newCgpa;
}
const s1 = new Student("000-61-0001", " Bob", " Jones", "3.51");

// Prob 5
var students = new Array();
students[0] = new Student("000-61-0001", "Anabelle", "Smith", "3.05");
students[1] = new Student("000-61-0002", "Bob", "Jones", "2.96");

Student.prototype.toCSVString = function() {
    return this.studentId + ",'" + this.firstName + "','" + this.lastName + "'," + this.cgpa;
};
const student1 = new Student("000-61-0001", "Anabelle", "Smith", "3.05");
student1.toCSVString();

const Add = (a, b) => a + b;
console.log(Add(5));
console.log(Add(5, 2));