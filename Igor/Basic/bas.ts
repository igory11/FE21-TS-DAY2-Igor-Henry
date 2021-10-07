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
    
    constructor (public name:string, public age:number, public jobTitle: string) {
    
    }
    
    printData () {
    
        return `Hello there, my name is ${this.name}, I am ${this.age} years old, I am a ${this.jobTitle}`
    }
    
    }
    
    let person1 = new Person('John',25,'Manager')
    
    console.log(person1.printData());

(document.getElementById('result') as HTMLElement).innerHTML = person1.printData() + '<br>';



    class Employee extends Person {

        constructor (public name:string, public age:number, public jobTitle: string, public salary: number, public jobLocation: string) {
            super (name, age, jobTitle)
        }

    data () {

        return `${super.printData()}, and I get ${this.salary} every month, and I work in ${this.jobLocation}.`
    }

    }

    let employeee1 = new Employee('Alex', 28, 'Developer', 35000, 'Berlin')

    console.log(employeee1.data());
    (document.getElementById('result') as HTMLElement).innerHTML += employeee1.data()