let word = '안녕하세요. \n저는 "듀크" 입니다.';
let word2 = "안녕하세요. \t저는 '듀크' 입니다.";
let word3 = '안녕하세요. \
저는 \'듀크\' 입니다.';
let word4 = "안녕하세요. \\저는 \"듀크\" 입니다.";
let word5 = `실제 노브랜드 버거가   소비자들에게 차별화된 경험을 제공하기 위해 선보인 페퍼로니 \\버거\\, 골드커리 버거를 비롯해 인절미 치즈볼, 슈가버터 프라이 등 이색 사이드 메뉴는 소셜네트워크서비스(SNS)에서 입소문을 타면서 큰 호응을 얻기도 했다.`;
console.log(typeof word, word);
console.log(typeof word2, word2);
console.log(typeof word3, word3);
console.log(typeof word4, word4);
console.log(typeof word5, word5);

let name = "홍길동";
let age = 3;
let married = false;
console.log(`${name}은 ${age}세로 결혼여부는 ${married}이며, ${3+123}에 살고 있다.`);