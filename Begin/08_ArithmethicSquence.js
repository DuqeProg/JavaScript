// 등차수열(Arithmetic Sequence) : 연속하는 두 수의 차이가 일정한 수열
// 1에서 20까지의 정수 중 홀수의 합을 구하는 프로그램

// Input
var sum = 0; // 합계가 담길 변수
var sqn = ""; // 시퀀스를 보여줄 변수

// Process
for (let i = 1; i <= 20; i++) {    // 주어진 범위
    if (i % 2 != 0) {               // 주어진 조건
        sum += i;
        sqn += i + " ";
    }
}
console.log(sqn);   // Arithmetic Squence

// Output
console.log("1부터 20까지 홀수의 합은 " + sum + "이다.");