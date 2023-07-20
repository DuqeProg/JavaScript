// 평균 알고리즘. 주어진 범위의 주어진 조건에 해당하는 자료들의 평균
// n명의 점수 중에서 80점이상 95점 이하인 대상의 평균
(function () {
    // input
    var data = [90, 65, 78, 50, 95]
    var sum = 0;
    var count = 0;
    var N = data.length; // 의사코드(슈도코드)
    // input process
    for (let i = 0; i < N; i++) {
        if (data[i] >= 80 && data[i] <= 95) {
            sum += data[i];
            count++;
        }
    }
    var avg = 0.0;
    if (sum != 0 && count != 0) {
        avg = sum / count;
    }
    // output
    console.log("85~95점 사이 평균은 " + avg.toFixed(2) + "이다.");
})();