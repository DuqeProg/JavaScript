console.log(typeof true, true);
console.log(typeof false, false);

let a = 1 === 2;
let b = "abc" !== "def";
let c = a !== b;
let d = typeof a === typeof b === true;
console.log(
    a,
    b,
    c,
    d
)

console.log(
    true && true,
    true && false,
    false && true,
    false && false
)
console.log(
    true || true,
    true || false,
    false || true,
    false || false
)

let x = 14;
x = 25;
console.log(
    (x > 10 && x <= 20) || x % 3 === 0);

let error = false;
error && console.warn("오류발생");
error || console.log("이상없음");

x = false;
let y = x && "abc";
let z = x || 123;

console.log(y, z);

x = false;
y = x ? "정답입니다." : "거짓입니다.";
console.log(y);

let num = 12214;
console.log(
    (num % 3 == 0) ? "3의 배수입니다." : "3의 배수가 아닙니다."
)

error = false;
error
    ? console.error("오류발생")
    : console.log("이상없음");

// truthy
console.log(
    1.23 ? true : false,
    -999 ? true : false,
    "0" ? true : false,
    " " ? true : false,
    Infinity ? true : false,
    -Infinity ? true : false,
    {} ? true : false,
    [] ? true : false
)
// falsy
console.log(
    0 ? true : false,
    -0 ? true : false,
    "" ? true : false,
    null ? true : false,
    undefined ? true : false,
    NaN ? true : false
)
x = 0;
y = 1;
x && x++;
y && y++;
console.log(x, y);
x = 0;
y = 1;
x || x++;
y || y++;
console.log(x, y);

x = 2;
y = 3;
console.log(
    x % 2 ? "짝" : "홀",
    y % 2 ? "짝" : "홀"
)

x = "";
y = "직장인";
z = x || y;
x = x || "단기알바";
y = y || "단기알바";
console.log(x, y, z);

console.log(
    !1, !-999, !"Hello",
    !0, !"", !null
)

console.log(
    !!1, !!-999, !!"Hello",
    !!0, !!"", !!null
)

x = 123;
console.log(
    !!(x % 2)
)