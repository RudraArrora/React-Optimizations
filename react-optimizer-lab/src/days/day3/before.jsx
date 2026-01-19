import React, { useMemo, useState } from "react";

export default function Day3Before() {
  const [q, setQ] = useState("");

  const rows = useMemo(
    () => Array.from({ length: 5000 }, (_, i) => `Row ${i}`),
    []
  );

  const filtered = useMemo(
    () => rows.filter((r) => r.toLowerCase().includes(q.toLowerCase())),
    [q, rows]
  );
  return (
    <div className="card">
      <h3>Day 3 (Before): Render 5000 rows</h3>
      <div className="row">
        <input
          className="input"
          value={q}
          placeholder="search..."
          onChange={(e) => setQ(e.target.value)}
        />
        <span className="badge">{filtered.length} rows</span>
      </div>
      <hr />

      <div style={{ height: 380, overflow: "auto" }}>
        {filtered.map((r) => (
          <div key={r} className="card" style={{ margin: "8px 0" }}>
            {r}
          </div>
        ))}
      </div>
      <div className="small">
        Measure: scroll feels heavy because DOM is huge.
      </div>
    </div>
  );
}
