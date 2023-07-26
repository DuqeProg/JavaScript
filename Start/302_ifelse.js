const open = 0;

if (!open) {
    console.log("영업중!입니다.");
} else {
    console.log("휴무입니다.")
}

const x = 24;
if (x % 4) {
    if (x % 2) {
    console.log("중복 if문 : 홀수입니다.");
    } else {
    console.log("중복 if문 : 짝수입니다.");
    }
} else {
    console.log("중복 if문 : 4배수입니다.");
}

{   
    x % 4 ? x % 2 ? console.log("삼항연산자 4배수입니다.") : console.log("삼항연산자 짝수입니다.")
    : console.log("삼항연산자 4배수입니다.");
}

if (x % 2) {
    console.log("else if문 : 홀수입니다.");
} else if (x % 4) {
    console.log("else if문 : 짝수입니다.");
} else {
    console.log("else if문 : 4배수입니다.");
}

function evalNum () {
    if (x % 2) {
        console.log("함수 : 홀수입니다.");
        return;
    }
    if (x % 4) {
        console.log("함수 : 짝수입니다.");
        return;
    }
    console.log("함수 : 4배수입니다.");
}

evalNum();
console.log("블록문 외부");