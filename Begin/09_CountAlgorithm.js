// 갯수 알고리즘 Count Algorithm: 주어진 범위에 주어진 조건에 해당하는 자료들의 개수
// 1부터 1000까지의 정수 중 13의 배수의 개수는?

var count = 0; //  개수 저장할 변수

for (var i = 1; i <= 100; i++) {
    if (i % 13 == 0) {
        count++;
    }
}

console.log("개수는 " + count + "이다.")