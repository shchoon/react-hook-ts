let useStateLen = 0;
let states = [];
function useState(initialState) {
  if (useStateLen === states.length) {
    states.push(initialState);
  }
  const currentIndex = useStateLen;
  console.log("inUseState", currentIndex);

  const state = states[currentIndex];

  const setState = (nextState) => {
    console.log("inSetState", currentIndex);
    states[currentIndex] = nextState;
    render();
  };

  useStateLen += 1;

  return [state, setState];
}

function counter1() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  window.increment1 = () => setCount1(count1 + 1);
  window.increment2 = () => setCount2(count2 + 1);

  return `<div>
  <strong>count1: ${count1}</strong>
  <button onClick="increment1()">+</button>
  </br>
  <strong>count2: ${count2}</strong>
  <button onClick="increment2()">+</button>
  </div>`;
}

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = `<div>
  ${counter1()}
  </div>`;

  useStateLen = 0;
}

render();
