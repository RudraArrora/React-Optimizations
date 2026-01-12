import React, { useMemo, useRef, useState } from "react";

function RenderCount({ name }) {
  const c = useRef(0);
  c.current++;
  return (
    <span className="badge">
      {name}: {c.current}
    </span>
  );
}

export default function Day2After() {
  const [query, setQuery] = useState("1");
  const [toggle, setToggle] = useState(false);

  const list = useMemo(
    () => Array.from({ length: 2000 }, (_, i) => `item-${i}`),
    []
  );

  const filtered = useMemo(() => {
    console.count("FILTER RUNS (after)");
    return list.filter((x) => x.includes(query));
  }, [query, list]);

  return (
    <div className="card">
      <h3>Day 2 (After): stable deps → no extra compute</h3>
      <div className="row">
        <input
          className="input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="btn2" onClick={() => setToggle(!toggle)}>
          Toggle
        </button>
        <span className="badge">toggle: {String(toggle)}</span>
        <RenderCount name="Page" />
      </div>
      <hr />
      <div className="small">
        Verify: toggle should not increase “FILTER RUNS (after)”.
      </div>
      <span className="badge">{filtered.length} results</span>
    </div>
  );
}
