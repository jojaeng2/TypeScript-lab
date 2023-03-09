// return 값 명시
let myAdd1 = function (x: number, y: number): number {
    return x + y
};

// return 값을 명시하지 않았으나, 타입 추론
let myAdd2 = function (x: number, y: number) {
    return x + y
};


console.log(myAdd1(10, 100));
console.log(myAdd2(100, 1000));