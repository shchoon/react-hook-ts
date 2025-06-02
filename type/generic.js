"use strict";
// 인자로 받은 값 그대로 반환
function returnInput(value) {
    return value;
}
// 사용 예시:
const a = returnInput(42); // a: number
const b = returnInput("hello"); // b: string
const c = returnInput({ x: 1 }); // c: { x: number }
// 인자로 받은 값을 배열로 반환
function wrapInArray(value) {
    return [value];
}
// 사용 예시:
const d = wrapInArray(5); // a: number[]
const e = wrapInArray("hello"); // b: string[]
const f = wrapInArray({ a: true }); // c: { a: boolean }[]
// 인자로 배열을 받고 배열의 첫번째 요소 반환
function getFirstElement(value) {
    return value[0];
}
// 사용 예시:
const g = getFirstElement([1, 2, 3]); // a: number
const h = getFirstElement(["a", "b", "c"]); // b: string
const i = getFirstElement([{ x: 1 }, { x: 2 }]); // c: { x: number }
// 두개의 값을 받아 배열로 반환
function createPair(a, b) {
    return [a, b];
}
// 사용 예시:
const pair1 = createPair(1, "one"); // [number, string]
const pair2 = createPair(true, { id: 1 }); // [boolean, { id: number }]
// 두개의 객체를 받아 하나의 객체로 병합
function mergeObjects(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const user1 = { name: "Alice" };
const age = { age: 25 };
const merged = mergeObjects(user1, age);
// merged: { name: string; age: number }
// 특정 키만 추출해서 새 객체를 반환하는 함수
function pick(obj, keys) {
    const result = {};
    keys.forEach((key) => {
        result[key] = obj[key];
    });
    return result;
}
const user2 = {
    name: "Alice",
    age: 25,
    email: "alice@example.com",
};
const picked = pick(user2, ["name", "email"]);
// picked: { name: string; email: string }
console.log(picked.name); // "Alice"
console.log(picked.email); // "alice@example.com"
