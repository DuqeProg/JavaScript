let a = "1", b = 1;
if (a === b) {
    console.log("값이 같고 자료형도 같다.");
}
else {
    console.log("값이나 자료형 중 하나가 틀리다.")
}

console.log(
    100 > 12,
    "100" > "12",
    "100" > 12,
)

let str1 = "Hello";
str1 += " 월드";
let str2 = str1 += "~~~";
let str3 = str1 + str2;
console.log(str1);
console.log(str2);
console.log(str3);

const poem = "나보기가 역겨워"
+ "\n가실ᄯᅢ에는"
+ "\n말업시 고히 보내드리우리다"

let poem2 = "寧邊에藥山"
poem2 += "\n진달내ᄭᅩᆺ"
poem2 += "\n아름ᄯᅡ다 가실길에 ᄲᅮ리우리다"

console.log(poem);
console.log(poem2);

let result = "안녕" + 1 + false;
result += null;
result += undefined;
console.log(result);
console.log(typeof result);
