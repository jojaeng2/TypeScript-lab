// TS의 기본 접근 제어자는 public

class PublicAnimal {
    public name: string;
    public constructor(name: string) {
        this.name = name;
    }

    public move(distanceInMeters: number) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class PrivateAnimal {
    private name: string;
    constructor(theName: string) { this.name = theName; }
}



// new PrivateAnimal("Cat").name; // 오류: 'name'은 비공개로 선언되어 있습니다;


class Octopus {
    readonly name: string;
    readonly numberOfLegs: number = 8;
    constructor (theName: string) {
        this.name = theName;
    }
}
let dad = new Octopus("Man with the 8 strong legs");
// dad.name = "Man with the 3-piece suit"; // 오류! name은 읽기전용 입니다.