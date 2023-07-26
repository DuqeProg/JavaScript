let x = 123;
{
    const a = "Hellow";
    let b = "World";
    console.log(a, b, x);
}
//console.log(a);
//console.log(b);

const xx = 0;
let yy = "Hellow";
console.log(xx, yy);
{
    const xx = 11;
    /*let*/ yy = "World";
    console.log(xx, yy);
}
console.log(xx, yy);

let a = 0;
let b = 1;
let c = 2;
console.log("시점1: ", a, b, c);

{
    let a = "A";
    let b = "B";
    console.log("시점2: ", a, b, c);

    {
        let a = "가";
        console.log("시점3: ", a, b, c);
    }
    console.log("시점4: ", a, b, c);
}
console.log("시점5: ", a, b, c);