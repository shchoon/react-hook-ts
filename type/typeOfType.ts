type Predicate = (x: unknown) => boolean;
type K = ReturnType<Predicate>;

function f1() {
  return { x: 10, y: 3 };
}

type P1 = ReturnType<typeof f1>;
