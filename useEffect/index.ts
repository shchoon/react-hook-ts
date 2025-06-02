let states2: any[] = [];
let stateKey = 0;

function useState2<T>(initVal: T) {
  if (states1[stateKey] === undefined) {
    states1.push(initVal);
  }

  const currentIndex = stateKey;

  function setState(nextState: T) {
    states1[currentIndex] = nextState;
    render();
  }

  const state = states1[currentIndex];
  stateKey++;

  return [state, setState];
}

let effectDeps: any[] = [];
let effectKey = 0;
function useEffect<T, D>(callback: T, deps: D[]) {
  const preDeps = effectDeps[effectKey];

  const hasChanged = !preDeps || deps.some((dep, i) => dep !== preDeps[i]);

  if (hasChanged) {
    callback();
    effectDeps[effectKey] = deps;
  }

  effectKey++;
}

function count1() {
  const [count1, setCount1] = useState2(0);

  useEffect(() => {
    console.log("count1");
  }, [count1]);
  (window as any).increment1 = () => setCount1(count1 + 1);

  return `<div>count1: ${count1}
  <button onClick="increment1()">+</button></div>`;
}

function count2() {
  const [count2, setCount2] = useState2(0);

  useEffect(() => {
    console.log("count2");
  }, [count2]);

  (window as any).increment2 = () => setCount2(count2 + 1);

  return `<div>count2: ${count2}
  <button onClick="increment2()">+</button></div>`;
}

function render2() {
  stateKey = 0;
  effectKey = 0;
  const app = document.querySelector("#app") as HTMLDivElement;

  app.innerHTML = `${count1()} </br> ${count2()}`;
}

render2();
