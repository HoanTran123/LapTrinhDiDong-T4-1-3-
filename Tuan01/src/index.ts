// function hello(name: string): string {
//   return `Hello, ${name}!`;
// }

// console.log(hello("200Lab"));


// function person(name: string, age: number): string {
//     return `Name and Age: ${name}, ${age}`;
// }
// console.log(person("John", 25));   


// function student(name: string, age: number, grade: string): string {
//     return `${person(name, age)}, Grade: ${grade}`;
// }
// console.log(student("John", 25, "A"));   

function Car (brand : string, year : number, model : string): string {
    return `brand and year and model : ${brand}, ${year} , ${model}`;
}
console.log(Car("vinfast", 2025, "XXX"))    ;   

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age}`);
  }
}

const person = new Person("John", 25);
// person.displayInfo();


class Student extends Person{
    grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  displayInfo(): void {
    console.log(`Name: ${this.name}, Age: ${this.age} , Grade:${this.grade}`);
  }
}

const student = new Student("John", 25 , "A");
student.displayInfo();