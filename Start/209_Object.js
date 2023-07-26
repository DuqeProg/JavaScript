const person1 = {
    name: "존레논",
    age: 25,
    married: false
};

console.log(typeof person1, person1);

console.log(person1.name, person1.age, person1.married);
console.log(person1["name"], person1["age"], person1["married"]);
let key1 = "age";
console.log(person1[key1]);
console.log(person1["birth"]);
console.log("babn" in person1, "name" in person1);

person1.age = 36;
person1.married = true;
console.log(person1);
person1.job = "programmer";
person1["blood"] = "A";
console.log(person1);

const winners = [12, 592, 7, 48];
const weekdays = ["월", "화", "수", "목", "금", "토", "일"];
const randoms = ["홍길동", -24, true, null, undefined];

console.log(typeof winners, winners);
console.log(typeof randoms, randoms);
console.log(typeof weekdays, weekdays);
console.log(weekdays[0]);
console.log(winners.length, winners["length"]);
console.log(winners[winners.length - 1]);

const numbers = [1, 2, 3];
numbers[2] = 4;
numbers[3] = 5;
numbers.push(66);
console.log(numbers, numbers.length);

const person2 = {
    name: "폴매카트니",
    ages: 25,
    language: ["English", "french", "Korean"],
    education: {
        school: "UK Univ.",
        major: ["Music", "Literature"],
        gradulated: true
    }
}

console.log(person2.language[2], person2.education.gradulated);
console.log(person2);

const groups = [[1, 2], [3, 4, 5], [6, 7, 8]];
const weapons = [
    {name: "롱소드", damage: 30, design: [
            "화룡검", "뇌신검"
        ]},
    {name: "활", damage: 10},
    {name: "워해머", damage: 35}
] ;
console.log(groups[1][2]);
console.log(weapons[2].damage);
console.log(weapons[0].design[1]);