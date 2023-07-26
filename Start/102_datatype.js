const a = true, b = 3.141592, c = "Hello Workd";

console.log(typeof a);
console.log(typeof b);
console.log(typeof c);

const e = Symbol("Hello JavaScript");
console.log(e, typeof e);

let isEmployed = true;
let isMarried = false;

console.log("취업여부 : " + isEmployed);
console.log("결혼여부 : " + isMarried);

const o = 1 > 2;
const p = 3 < 4;
console.log(o, typeof o);
console.log(p, typeof p);

let integer = 654;
let real = 3.14159218;
let negative = -564;
console.log(integer, real, negative);
console.log(typeof integer, typeof (typeof integer), typeof real, typeof (typeof real), typeof negative, typeof (typeof negative));

let first_name = "덕호";
let last_name = "Lee";
let description = `회원아이디 및 비밀번호를 찾고자 하신다면
02) 936-6639 번으로 문의하여 주시기 바랍니다.
아직 회원이 아니시라면 회원으로 가입 후 이용해 주십시오.`;

console.log(first_name, last_name, description, typeof description);

let d;
console.log(d, typeof d);

d = null;
console.log(d, typeof d);

let x = 1;