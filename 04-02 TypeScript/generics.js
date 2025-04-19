// function returnsFirstElementOfArray<ElementType>(arr: ElementType[]): ElementType {
//     return arr[0];
// }
var __assign = (this && this.__assign) || function ()
{
    __assign = Object.assign || function (t)
    {
        for (var s, i = 1, n = arguments.length; i < n; i++)
        {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
// var numberArr: number[] = [1, 2, 3, 4, 5];
// var num: number;
// num = returnsFirstElementOfArray<number>(numberArr);
// var stringArr = ["a", "b", "c", "d"]
// var str: string = returnsFirstElementOfArray<string>(stringArr);
//type guarding
// function generic<U, V>(num1: U, num2: V) {
//     if (typeof num1 == "number" && typeof num2 == "number") {
//         return num1 + num2;
//     }
//     if (typeof num1 == "string" && typeof num2 == "string") {
//         return num1 + num2;
//     }
//     throw new Error("Invalid type")
// }
// generic(2, "s");
// generic("s", 2);
//Contraint
// function generic<U extends number | string, V extends number | string>(num1: U, num2: V) {
//     if (typeof num1 == "number" && typeof num2 == "number") {
//         return num1 + num2;
//     }
//     if (typeof num1 == "string" && typeof num2 == "string") {
//         return num1 + num2;
//     }
// }
// generic(null, "s");
// generic("s", 2);
// function mergeAndReturn(obj1, obj2) {
//     return __assign(__assign({}, obj1), obj2);
// }
// console.log(mergeAndReturn([1, 2, 3], [4, 5, 6]));
