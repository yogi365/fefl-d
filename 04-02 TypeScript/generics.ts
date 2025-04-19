// function returnsFirstElementOfArray<ElementType>(arr: ElementType[]): ElementType {
//     return arr[0];
// }

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

// function mergeAndReturn<u extends object>(obj1: u, obj2: u): u {
//     return { ...obj1, ...obj2 }
// }

// console.log(mergeAndReturn([1, 2, 3], [4, 5, 6]));
// mergeAndReturn(2, 5);
