for (let i = 0; i < 5; i++) {
    console.log(i);
}

for (let i = 0; i < 5;) {
    console.log(i++);
}

for (let i = 10; i >= 0; i -= 2) {
    console.log(i);
}

for (let i = 2; i <= 9; i++) {
    for (let j = 1; j <= 9; j++) {
        console.log(i + " * " + j + " = " + i * j);
    }
}

for (let x = true, y = 0, z = 0;
    y * z < 10;
    x = !x, x ? y++ : z++
) {
    console.log(x, y, z);
}

/*
let x = 0;
for (;;) {
    console.log(x);
}
console.log("출력안됨.");
*/

/*
for (let x = 1; x < 10; x++) {
    console.log(x--);
}
console.log("출력안됨.");
*/

const lunch = {
    name: "라면",
    taste: "매운맛",
    price: "5,000원",
    cold: "false"
}
for (const k in lunch) {
    console.log(k, " : ", lunch[k])
}

const list = ["dark", 123, true, null];
for (let array of list) {
    console.log(array);
}
for (let array in list) {
    console.log(array);
}

const env= "아름다운강산";
for (let letter of env) {
    console.log(letter);
}

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let n = 0; n < number.length; n++) {
    console.log(number[n]);
}
for (const num of number) {
    console.log(num);
}

const numbers1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const numbers2 = [];

for (let num of numbers1) {
    num++;
    numbers2.push(num + 1);
}

for (let i = 0; i < numbers1.length; i++) {
    numbers1[i]++;
}
console.log(numbers1, numbers2);

for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) continue;
    console.log(i);
}
console.log("루프 종료");

for (let i = 1; i <= 10; i++) {
    if (i === 5) break;
    console.log(i);
}
console.log("루프 종료");

// label

outer:
for (let m = 1; m < 10; m++) {

    inner:
    for (let n = 1; n < 10; n++) {

        if (n % 2 === 0) continue inner;
        if (m * n >= 30) continue outer;

        if (n > 0) break inner;
        if (m - n > 7) break outer;
        
        console.log(m, n, m * n);
    }
}