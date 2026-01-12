import React, { Suspense, useState } from "react";

const BigWidget = React.lazy(() => import("./bigWidget.jsx"));

export default function Day5After() {
  const [open, setOpen] = useState(false);

  return (
    <div className="card">
      <h3>Day 5 (After): Lazy load only when needed</h3>
      <button className="btn" onClick={() => setOpen(true)}>
        Open Big Widget
      </button>
      <hr />
      {open ? (
        <Suspense fallback={<div className="badge">Loading...</div>}>
          <BigWidget />
        </Suspense>
      ) : (
        <div className="small">Verify: BigWidget runs only after click.</div>
      )}
    </div>
  );
}
