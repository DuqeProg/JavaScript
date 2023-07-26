let x = -1 / 0;
x += 5
console.log(x, typeof x);
console.log(-x, typeof -x);

let w = 1 / "abc";
let y = 2 * "가나다";
let z = NaN;
console.log(w, typeof w);
console.log(y, typeof y);
console.log(z, typeof z);

x = 1 / "abc"
console.log(
    x,
    x == NaN,
    x === NaN,
    isNaN(x),
    Number.isNaN(x)
)

x = 10;
y = x * 10;
console.log(x, y);
console.log(++x, x);

x = 3;
y = 4;
console.log(x-- * --y, x, y);

x = 1;
console.log(
    +x,
    -x,
    -(-x),
    -(x++),
    -x * -1
)

console.log(
    typeof +("200"),
    typeof -("100"),
    +"abc"
)
x = 3;
console.log(x += 2);
console.log(x -= 3);
console.log(x *= 12);
console.log(x /= 3);
console.log(x %= 5);
console.log(x **= 4);

y = 25;
console.log(
    y **= 0.5,
    y
);
console.log(0.1 + 0.2);