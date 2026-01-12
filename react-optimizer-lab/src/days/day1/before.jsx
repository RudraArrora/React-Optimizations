import React, { useRef, useState } from "react";

function RenderCount({ name }) {
  const c = useRef(0);
  c.current++;
  return (
    <span className="badge">
      {name}: {c.current}
    </span>
  );
}

function Child({ label }) {
  const start = performance.now();
  while (performance.now() - start < 5) {}
  return (
    <div className="card">
      <div className="row">
        <b>{label}</b>
        <RenderCount name={label} />
      </div>
    </div>
  );
}

export default function Day1Before() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h3>Day 1 (Before): Every click rerenders ALL children</h3>
      <div className="row">
        <button className="btn" onClick={() => setCount(count + 1)}>
          + Count
        </button>
        <span className="badge">count: {count}</span>
        <RenderCount name="Page" />
      </div>
      <hr />
      <Child label="Card A" />
      <Child label="Card B" />
      <Child label="Card C" />
      <div className="small">
        Measure: child counters increase on every click.
      </div>
    </div>
  );
}
