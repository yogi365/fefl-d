var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(firstName, lastName) {
        var _this = this;
        this.getFullName = function () {
            return "".concat(_this.firstName, " ").concat(_this.lastName);
        };
        this.firstName = firstName;
        this.lastName = lastName;
    }
    return Person;
}());
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(firstName, lastName, rollNo, marks) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.getStudentsTotalMarks = function () {
            var total = 0;
            _this.marks.forEach(function (mark) { return total += mark; });
            return "".concat(_this.firstName, " scored ").concat(total, " marks");
        };
        _this.marks = marks;
        _this.rollNo = rollNo;
        return _this;
    }
    return Student;
}(Person));
var rohit = new Student("Rohit", " ", 12, [24, 35, 40, 32]);
console.log(rohit.getStudentsTotalMarks());
// console.log(rohit.firstName);
