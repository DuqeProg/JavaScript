let number1 = 1;
let string1 = "Korean";
let boolean1 = true;

let number2 = number1;
let string2 = string1;
let boolean2 = boolean1;

number2 = 5;
string2 = "English";
boolean2 = false;

console.log("~1: ", number1, string1, boolean1);
console.log("~2: ", number2, string2, boolean2);

const obj1 = {
    num: 1, str: "천사", bool: true
}
const array1 = [1, "first", true];
const obj2 = obj1;
const array2 = array1;
obj2.num = 11;
obj2.str = "악마";
obj2.bool = false;
array2[0] = 2;
array2[1] = "second";
array2[2] = false;
console.log("~1: ", obj1);
console.log("~2: ", obj2);
console.log("~1: ", array1);
console.log("~2: ", array2);