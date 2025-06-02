"use strict";
let useStateLen = 0;
let states1 = [];
function useState(initialState) {
    if (useStateLen === states1.length) {
        states1.push(initialState);
    }
    const currentIndex = useStateLen;
    console.log("inUseState", currentIndex);
    const state = states1[currentIndex];
    const setState = (nextState) => {
        if (typeof nextState === "function") {
            states1[currentIndex] = nextState(states1[currentIndex]);
        }
        else {
            states1[currentIndex] = nextState;
        }
        console.log("inSetState", currentIndex);
        render();
    };
    useStateLen += 1;
    return [state, setState];
}
function counter1() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);
    window.increment1 = () => setCount1((prev) => prev + 1);
    window.increment2 = () => setCount2(count2 + 1);
    return `<div>
  <strong>count1: ${count1}</strong>
  <button onClick="increment1()">+</button>
  </br>
  <strong>count2: ${count2}</strong>
  <button onClick="increment2()">+</button>
  </div>`;
}
function input() {
    const [text, setText] = useState("");
    // 렌더링된 후 실제 DOM 요소에 이벤트 리스너 붙이기 위해 setTimeout 활용
    setTimeout(() => {
        const inputEl = document.querySelector("#my-input");
        if (inputEl) {
            inputEl.oninput = (event) => {
                setText(event.target.value);
            };
        }
    }, 0);
    return `<div>
    <input id="my-input" value="${text}" />
    </br>
    <span>text: ${text}</span>
  </div>`;
}
function render() {
    const app = document.querySelector("#app");
    app.innerHTML = `<div>
  ${counter1()}
  ${input()}
  </div>`;
    useStateLen = 0;
}
render();
