function add(x: number, y: number): number {
    return x + y;
}

let myAdd = function (x: number, y: number) : number {return x + y};

console.log(add(1, 2));
console.log(myAdd(2, 10));