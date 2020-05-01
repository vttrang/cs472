$(document).ready(function() {
    "use strict";
    // Prob 1
    let person = {
        name: '',
        dateOfBirth: '',
        getName: function() {
            return this.name;
        },
        setName: function(name) {
            this.name = name;
        }
    };

    function formatDate(date) {
        let d = new Date(date),
            month = '' + (d.getMonth() + 1),
            day = '' + d.getDate(),
            year = d.getFullYear();

        if (month.length < 2)
            month = '0' + month;
        if (day.length < 2)
            day = '0' + day;

        return [year, month, day].join('-');
    }

    const john = Object.create(person);
    john.setName('John');
    john.dateOfBirth = new Date('1998/12/10');
    const  message1 = `The person's name is ${john.getName()}`;
    const  message2 = `${john.getName()} was born on ${formatDate(john.dateOfBirth)}`;
    console.log(message1);
    console.log(message2);
    $('#prob1Content').html(`${message1} <br> ${message2}`);

    // Prob2
    let employee = {
        salary: '$0',
        hireDate: new Date(),
        doJob: function(jobTitle) {
            return `${this.name} is a ${jobTitle} who earns ${this.salary}`;
        },
        __proto__: person
    };

    const emp1 = Object.create(employee);
    // emp1.prototype = person;
    emp1.salary = '$249.995.50';
    emp1.setName('Anna');
    const message3 = emp1.doJob('Programmer');
    $('#prob2Content').html(`${message3}`);
    emp1.doJob(message3);

    // Prob 3
    function Person(name, dateOfBirth) {
        this.name = name;
        this.dateOfBirth = dateOfBirth;
        this.setName = function(name) {
            this.name = name;
        };
        this.getName = function() {
            return this.name;
        };
        this.toString = function() {
            return `Name: ${this.name}, DateofBirth: ${formatDate(this.dateOfBirth)}`;
        };
    }
    let peter = new Person('Peter', new Date('1985/11/10'));
    const message4 = peter.toString();
    console.log(message4);
    $('#prob3Content').html(`${message4}`);
});