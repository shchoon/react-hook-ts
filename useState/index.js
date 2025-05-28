function useState(initialState) {
  let state;
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

  window.increment = () => setCount(count + 1);

  return `<div>
  <strong>count: ${count}</strong>
  <button onClick={increment}>+</button>
  </div>`;
}

function render() {
  const app = document.querySelector("#app");

  app.innerHTML = counter();
}

render();
