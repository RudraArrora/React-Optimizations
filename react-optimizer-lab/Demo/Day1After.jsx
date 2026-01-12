import React, { useRef, useState } from "react";

{
  /* */
}

{
  /* */
}

export default function Day1After() {
  const [count, setCount] = useState(0);

  return (
    <div className="card">
      <h3>Day 1 (After): Children don’t rerender</h3>
      <div className="row">
        {/* */}
        <button className="btn">+ Count</button>
        <span className="badge">count: {count}</span>
        <RenderCount name="Page" />
      </div>
      <hr />
      {/* */}
      <div className="small">Verify: child counters stay stable.</div>
    </div>
  );
}
