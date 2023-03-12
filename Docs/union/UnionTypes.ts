/**
 * 문자열을 받고 왼쪽에 "padding" 추가
 * 만약 "padding"이 문자열이면, "padding"은 왼쪽에 추가된다.
 * 만약 "padding"이 숫자라면, 그 숫자만큼의 공백이 왼쪽에 추가된다.
 */

function padLeft(value: string, padding: string | number) {
    if (typeof padding === "number") {
        return Array(padding + 1).join(" ") + value;
    }
    if (typeof padding === "string") {
        return padding + value;
    }
    throw new Error(`Expected string or number, got '${padding}'.`);
}


const result = padLeft("Hello World!!", 4);

console.log(result);