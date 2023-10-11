//complete this code
class Person {
	constructor(name, age){
    this._name=name;
		this._age=age;
  }
	get name(){
	return this._name;
	}
	set name(name){
		this._name=name;
	}
	get age(){
	return this.age;
	}
	set age(age){
		this._age=age;
	}
}

class Student extends Person {
	study(){
		console.log(`${this._name} is studying`)
	}
}

class Teacher extends Person {
	teach(){
		console.log(`${this._name} is teaching`)
	}
}

// Do not change the code below this line
const student1 = new Student("Alice", 20);
const teacher1 = new Teacher("Mr. Smith", 35);

student1.study(); // Output: Alice is studying
teacher1.teach();