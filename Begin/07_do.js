// do문을 이용하여 1부터 5까지 정수의 합 구하기
var sum = 0;

var i = 1;          // 초기식
do {
    sum += i;       // 실행문
    i++;            // 증감식
} while (i <= 5);   // 조건식

console.log("합계는 "+ sum + "이다.");