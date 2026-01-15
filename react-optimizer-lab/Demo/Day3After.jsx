import React, { useMemo, useState } from "react";

export default function Day3After() {
//

//
//

//


  return (
    <div className="card">
      <h3>Day 3 (After): Render only first 80 rows</h3>
      <div className="row">
        {/* */}
        <input className="input" value={q} placeholder="search..." />
        {/* */}
        <span className="badge"></span>
        {/* */}
        <span className="badge"></span>
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
