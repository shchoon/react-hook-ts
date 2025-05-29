let state;
function useState(initialState) {
  if (state === undefined) {
    state = initialState;
  }

  const setState = (nextState) => {
    state = nextState;
    render();
  };

  return [state, setState];
}

function counter() {
  const [count, setCount] = useState(0);

  window.increment1 = () => setCount(count + 1);

  return `<div>
  <strong>count: ${count}</strong>
  <button onClick="increment1()">+</button>
  </div>`;
}

// function counter2() {
//   const [count, setCount] = useState(0)
// }

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = counter();
}

render();
