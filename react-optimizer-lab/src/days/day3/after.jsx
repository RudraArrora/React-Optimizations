import React, { useMemo, useState } from "react";

export default function Day3After() {
  const [q, setQ] = useState("");

  const rows = useMemo(
    () => Array.from({ length: 5000 }, (_, i) => `Row ${i}`),
    []
  );
  const filtered = useMemo(
    () => rows.filter((r) => r.toLowerCase().includes(q.toLowerCase())),
    [q, rows]
  );

  const visible = filtered.slice(0, 80); // ✅ render less

  return (
    <div className="card">
      <h3>Day 3 (After): Render only first 80 rows</h3>
      <div className="row">
        <input
          className="input"
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="search..."
        />
        <span className="badge">{filtered.length} total</span>
        <span className="badge">{visible.length} rendered</span>
      </div>
      <hr />
      <div style={{ height: 380, overflow: "auto" }}>
        {visible.map((r) => (
          <div key={r} className="card" style={{ margin: "8px 0" }}>
            {r}
          </div>
        ))}
      </div>
      <div className="small">Verify: smooth because DOM is small.</div>
    </div>
  );
}
