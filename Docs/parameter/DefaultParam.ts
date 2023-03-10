function buildName1(firstName: string, lastName?: string) {
    if (lastName) {
        return firstName + " " + lastName;
    }
    return firstName;
}

let result1 = buildName1("A"); // 정상 동작
// let result2 = buildName1("A", "B", "C"); // 파라미터가 너무 많음
let result3 = buildName1("A", "B"); // 정상 동작


function buildName2(firstName: string, secondName: string = "smith") {
    return firstName + " " + secondName;
}

let result4 = buildName2("Bob");                  // 올바르게 동작, "Bob Smith" 반환
let result5 = buildName2("Bob", undefined);       // 여전히 동작, 역시 "Bob Smith" 반환
// let result6 = buildName2("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result7 = buildName2("Bob", "Adams");         // 정확함