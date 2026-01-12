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

export default function Day2Before() {
  const [query, setQuery] = useState("1");
  const [toggle, setToggle] = useState(false);

  const list = Array.from({ length: 2000 }, (_, i) => `item-${i}`);
  const filters = { query }; // ❌ new object every render

  const filtered = useMemo(() => {
    console.count("FILTER RUNS (before)");
    return list.filter((x) => x.includes(filters.query));
  }, [filters, list]);

  return (
    <div className="card">
      <h3>Day 2 (Before): useMemo still recomputes</h3>
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
        Console: toggling should NOT run filter, but it does.
      </div>
      <span className="badge">{filtered.length} results</span>
    </div>
  );
}
