function buildName(firstName: string, ...restOfName: string[]): string{
    return firstName + " " + restOfName.join(" ");
}

let names = buildName("A", "B", "C", "D");
console.log(names);