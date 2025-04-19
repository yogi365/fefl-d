interface Person {
    firstName: string,
    lastName?: string,
    readonly age: number
    fullName(): string
}

interface Student extends Person {
    marks: number[]
}
var Sarthak: Student = {
    marks: [12, 14, 25, 16],
    firstName: "Sarthak",
    fullName: function () {
        return this.firstName + " " + this.lastName;
    },
    age: 16
}

// Sarthak.age = 24;