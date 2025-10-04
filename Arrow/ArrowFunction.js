class Person {
    constructor(name){
        this.name = name;
    }

    // print() {
    print = () => {
        console.log("Parent called");
        console.log(this.name);
    }
};

class Employee extends Person {
    constructor(name, id){
        super(name);
        this.id = id;
    }

    print() {
        console.log(this.name, this.id);
    }
};

const one = new Employee('One');
const two = new Employee('Two', 2);

one.print();
two.print();
