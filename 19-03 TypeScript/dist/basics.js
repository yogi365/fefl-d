"use strict";
// var firstName: string = "String";
// // firstName = 20;
// var age = 30;
// var num;
// num = 30;
// num = "string";
// console.log(num)
// var marks: number[][] = [[2, 3, 4]]
// var character = ['a', 'b', 'c']
// var student: {
//     name: string,
//     age: number,
//     marks: number[]
// } = {
//     name: "abc",
//     age: 20,
//     marks: [1]
// }
// var student = {
//     name: "abc",
//     age: 20
// }
// var a: [number, string, ...number[], string];
// a = [1, "1", 2,3,5,6,7,"s"];
// var click: "click";
// // click = "sfsfsdf"
// click = "click";
// var role: "admin" | "teacher" | "student";
// role = "student";
// function sum(num1: number, num2: number): void {
//     // return (num1 + num2).toString();
//     console.log(num1 + num2);
// }
// function sum(num1: number, num2?: number): number {
//     if (num2 == undefined) {
//         return num1 + 5;
//     }
//     return num1 + num2;
// }
// function sum(num1: number, num2: number = 10): number {
//     return num1 + num2;
// }
// console.log(sum(2, 15))
//function with rest parameter
// function sum(num1: number, ...num: number[]) {
//     num.forEach(n => {
//         num1 += n;
//     })
//     return num1;
// }
// console.log(sum(2,2,3,4,5,6,8,4,5,5))
//funciton overloading
// function add(num1: number, num2: number): number;
// function add(num1: string, num2: string): string;
// function add(num1: string | number, num2: string | number): string | number {
//     if (typeof num1 == "string" && typeof num2 == "string") {
//         return num1.toString() + num2.toString();
//     }
//     if (typeof num1 == "number" && typeof num2 == "number") {
//         return num1 + num2;
//     }
//     if (typeof num1 == "string") {
//         return num1 + num2.toString()
//     }
//     if (typeof num2 == "string") {
//         return num1.toString() + num2
//     }
//     throw new Error("Arguments are not in valid format");
// }
// console.log(add(2, undefined))
//type allias - self type - custom type
// var id:number|string;
// var username: number|string;
// var pin:number|string;
// type alphanumeric = number | string
// var id:alphanumeric;
// id="abc";
// id=12;
// id=null;
// type Contact = {
//     email: string,
//     telphone: {
//         mobile: number,
//         landline: number
//     }
// }
// type Address = {
//     houseNo: number,
//     city: string,
//     pincode: number,
//     contact: Contact
// }
// var student: {
//     name: string,
//     age: number,
//     marks: number[],
//     address: Address
// }
// var teacher: {
//     empId: number,
//     name: string,
//     contact: Contact
// }
//unknown
// var marks: any = [1, 2, 3, 4, 5]
// marks.forEach((mark: number) => console.log(mark));
// var marks:unknown = [1,2,3,4,5];
// marks = 20;
// marks.forEach((mark:number)=>console.log(mark))
//type assertion
// var marks: unknown = [1, 2, 3, 4, 5];
// if (Array.isArray(marks)) {
//     (marks as number[]).forEach(mark => console.log(mark))
// }
// if(typeof marks =="string"){
//     (marks as string).slice()
// }
//intersaction
// type address = {
//     city: string,
//     pincode: number
// }
// type contactNumber = {
//     mobile: number,
//     landline?: number
// }
// var student: {
//     add: address,
//     contact: contactNumber
// } = {
//     add: {
//         city: "abc",
//         pincode: 12
//     },
//     contact: {
//         mobile: 12131
//     }
// }
// var student: address & contactNumber = {
//     city: "abc",
//     pincode: 12,
//     mobile: 123,
//     landline: 4546
// }
//enum
var Role;
(function (Role) {
    Role[Role["Admin"] = 2] = "Admin";
    Role[Role["Student"] = 101] = "Student";
    Role[Role["Teacher"] = 102] = "Teacher";
    Role[Role["Guest"] = 103] = "Guest";
})(Role || (Role = {}));
function PerformAuthentication(role) {
    switch (role) {
        case Role.Admin:
            console.log("Admin process initiated");
            break;
        case Role.Student:
            console.log("Student process initiated");
            break;
        case Role.Teacher:
            console.log("Teacher process initiated");
            break;
        case Role.Guest:
            console.log("Guest process initiated");
            break;
        default:
            console.log("Invalid Role");
    }
}
PerformAuthentication(Role.Student);
//generics
