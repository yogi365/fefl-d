class Person {
    protected firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getFullName = (): string => {
        return `${this.firstName} ${this.lastName}`;
    }
}

class Student extends Person {
    rollNo: number
    marks: number[]
    constructor(firstName: string, lastName: string, rollNo: number, marks: number[]) {
        super(firstName, lastName)
        this.marks = marks;
        this.rollNo = rollNo;
    }

    getStudentsTotalMarks = (): string => {
        var total = 0;
        this.marks.forEach(mark => total += mark);
        return `${this.firstName} scored ${total} marks`;

    }
}

var rohit = new Student("Rohit", " ", 12, [24, 35, 40, 32]);
console.log(rohit.getStudentsTotalMarks());
// console.log(rohit.firstName);

var input = document.querySelector<HTMLInputElement>('#input');