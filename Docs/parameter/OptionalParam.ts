function buildName(firstName: string, lastName: string) {
    return firstName + " " + lastName;
}

// let result1 = buildName("A"); // 매개 변수 부족
// let result2 = buildName("A", "B", "C"); // 매개 변수 초과

let result3 = buildName("A", "B");



function buildName2(firstName: string, lastName?: string) {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

let result4 = buildName2("Bob");                  // 지금은 바르게 동작
// let result5 = buildName2("Bob", "Adams", "Sr.");  // 오류, 너무 많은 매개변수
let result6 = buildName2("Bob", "Adams");         // 정확함