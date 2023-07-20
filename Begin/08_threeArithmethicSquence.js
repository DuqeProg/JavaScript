var sum = 0;
var sqn = "";

for (var i = 1; i <= 10000; i++) {
    if (i%3==0) {
        sum += i;
        sqn += i + " ";
    }
}

console.log("1부터 10000까지 3의 배수는 " + sqn + " 이다.");
console.log("1부터 10000까지 3의 배수의 합은 " + sum + " 이다.");