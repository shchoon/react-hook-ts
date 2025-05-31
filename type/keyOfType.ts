type Point = { x: number; y: number };
type P = keyof Point; // "x" | "y"

type Arrayish = { [n: number]: unknown }; // {1: 'a', 2: {a: 1}, 3: [1]}
type A = keyof Arrayish; // number

type Mapish = { [k: string]: boolean }; // {'a': '1', 'b' : 'b}
type M = keyof Mapish; // string | number
// js에서 객체 내의 key 값은 문자열을 강제하기 때문
