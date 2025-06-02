let useStateLen = 0;
let states1: any[] = [];
function useState1<T>(
  initialState: T
): [T, (nextState: T | ((prev: T) => T)) => void] {
  if (useStateLen === states1.length) {
    states1.push(initialState);
  }
  const currentIndex = useStateLen;
  console.log("inUseState", currentIndex);

  const state = states1[currentIndex];

  const setState = (nextState: T | ((prev: T) => T)) => {
    if (typeof nextState === "function") {
      states1[currentIndex] = (nextState as (prev: T) => T)(
        states1[currentIndex]
      );
    } else {
      states1[currentIndex] = nextState;
    }
    console.log("inSetState", currentIndex);
    render();
  };

  useStateLen += 1;

  return [state, setState];
}

function counter1() {
  const [count1, setCount1] = useState1(0);
  const [count2, setCount2] = useState1(0);

  (window as any).increment1 = () => setCount1((prev) => prev + 1);
  (window as any).increment2 = () => setCount2(count2 + 1);

  return `<div>
  <strong>count1: ${count1}</strong>
  <button onClick="increment1()">+</button>
  </br>
  <strong>count2: ${count2}</strong>
  <button onClick="increment2()">+</button>
  </div>`;
}

function input() {
  const [text, setText] = useState1("");

  // 렌더링된 후 실제 DOM 요소에 이벤트 리스너 붙이기 위해 setTimeout 활용
  setTimeout(() => {
    const inputEl = document.querySelector("#my-input") as HTMLInputElement;
    if (inputEl) {
      inputEl.oninput = (event) => {
        setText((event.target as HTMLInputElement).value);
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
  const app = document.querySelector("#app") as HTMLDivElement;

  app.innerHTML = `<div>
  ${counter1()}
  ${input()}
  </div>`;

  useStateLen = 0;
}

render();
