"use strict";
// class Person {
// name: string;
// age: number;
// jobTitle: string;
// constructor (name:string, age:number, jobTitle: string) {
// this.name = name;
// this.age = age;
// this.jobTitle = jobTitle ;
// }
// printData () {
//     return `Hello there, my name is ${this.name}, I am ${this.age} years old, I am a ${this.jobTitle}`
// }
// }
// let person1 = new Person('John',25,'Manager')
// console.log(person1.printData())
// class Employee extends Person {
// salary: number;
// jobLocation: string;
// constructor (name:string, age:number, jobTitle: string, salary: number, jobLocation: string) {
//     super (name, age, jobTitle);
//     this.salary = salary;
//     this.jobLocation = jobLocation;
// }
// data () {
//     return `${super.printData()}, and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
// }
// }
// let employeee1 = new Employee('Alex', 28, 'Developer', 35000, 'Berlin')
// console.log(employeee1.data())
class Person {
    constructor(name, age, jobTitle) {
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
    }
    printData() {
        return `Hello there, my name is ${this.name}, I am ${this.age} years old, I am a ${this.jobTitle}`;
    }
}
let person1 = new Person('John', 25, 'Manager');
console.log(person1.printData());
document.getElementById('result').innerHTML = person1.printData() + '<br>';
class Employee extends Person {
    constructor(name, age, jobTitle, salary, jobLocation) {
        super(name, age, jobTitle);
        this.name = name;
        this.age = age;
        this.jobTitle = jobTitle;
        this.salary = salary;
        this.jobLocation = jobLocation;
    }
    data() {
        return `${super.printData()}, and I get ${this.salary} every month, and I work in ${this.jobLocation}.`;
    }
}
let employeee1 = new Employee('Alex', 28, 'Developer', 35000, 'Berlin');
console.log(employeee1.data());
document.getElementById('result').innerHTML += employeee1.data();
