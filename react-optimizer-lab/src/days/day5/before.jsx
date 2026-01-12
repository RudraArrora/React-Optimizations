import React, { useRef } from "react";

function RenderCount({ name }) {
  const c = useRef(0);
  c.current++;
  return (
    <span className="badge">
      {name}: {c.current}
    </span>
  );
}

function BigWidget() {
  const start = performance.now();
  while (performance.now() - start < 20) {}
  return <div className="card">BigWidget Loaded</div>;
}

export default function Day5Before() {
  return (
    <div className="card">
      <h3>Day 5 (Before): Big widget loads immediately</h3>
      <RenderCount name="Page" />
      <hr />
      <BigWidget />
      <div className="small">
        Problem: heavy code runs even if user doesn’t open it.
      </div>
    </div>
  );
}
