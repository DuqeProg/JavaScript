const fingerOut = 2;

switch (fingerOut) {
    case 2:
        console.log("가위");
        break;
    case 0:
        console.log("바위");
        break;
    case 5:
        console.log("보");
        break;
    default:
        console.log("무효");
}

const direction = "west";
let directionKor;

switch (direction) {
    case "east":
        directionKor = "동";
        break;
    case "west":
        directionKor = "서";
        break;
    case "south":
        directionKor = "남";
        break;
    case "north":
        directionKor = "북";
        break;
    default:
        directionKor = "무효";
}
console.log(directionKor);

const direction2 = "eas1t";
const directionKor2 = {east: "동", west: "서", south: "남", north: "북"} [direction2] ?? "무효";
console.log(directionKor2);

const month = 4;
let season;
switch (month) {
    case 1: case 2: case 3:
        season = "1/4분기";
        break;
    case 4: case 5: case 6:
        season = "2/4분기";
        break;
    case 7: case 8: case 9:
        season = "3/4분기";
        break;
    case 10: case 11: case 12:
        season = "4/4분기";
        break;
    default:
        season = "???";
}
console.log(season);

const startMonth = 12;
let hollydays = "분기내 휴일 :";
switch (startMonth) {
    case 1:
        hollydays += " 설날";
    case 2:
    case 3:
        hollydays += " 3/1절";
        break;
    case 4:
    case 5:
        hollydays += " 어린이날";
        hollydays += " 석가탄신일";
    case 6:
        hollydays += " 현충일";
        break;
    case 7:
    case 8:
        hollydays += " 광복절";
    case 9:
        hollydays += " 한가위";
        break;
    case 10:
        hollydays += " 개천절";
        hollydays += " 한글날";
    case 11:
    case 12:
        hollydays += " 성탄절";
        break;
    default:
        hollydays = "잘못된 명령입니다.";
        break;
}
console.log(hollydays);


// 어려운 구문식
const age = {19: "청소년", 20: "청년"} [21] ?? "몰라";
console.log(age);