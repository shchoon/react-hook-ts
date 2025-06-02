let states = [];
let stateKey = 0;

function useState(initVal) {
  if (states[stateKey] === undefined) {
    states.push(initVal);
  }

  const currentIndex = stateKey;

  function setState(nextState) {
    states[currentIndex] = nextState;
    render();
  }

  const state = states[currentIndex];
  stateKey++;

  return [state, setState];
}

let effectDeps = [];
let effectKey = 0;
function useEffect(callback, deps) {
  const preDeps = effectDeps[effectKey];

  const hasChanged = !preDeps || deps.some((dep, i) => dep !== preDeps[i]);

  if (hasChanged) {
    callback();
    effectDeps[effectKey] = deps;
  }

  effectKey++;
}

function count1() {
  const [count1, setCount1] = useState(0);

  useEffect(() => {
    console.log("count1");
  }, [count1]);
  window.increment1 = () => setCount1(count1 + 1);

  return `<div>count1: ${count1}
  <button onClick="increment1()">+</button></div>`;
}

function count2() {
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    console.log("count2");
  }, [count2]);

  window.increment2 = () => setCount2(count2 + 1);

  return `<div>count2: ${count2}
  <button onClick="increment2()">+</button></div>`;
}

function render() {
  stateKey = 0;
  effectKey = 0;
  const app = document.querySelector("#app");

  app.innerHTML = `${count1()} </br> ${count2()}`;
}

render();
