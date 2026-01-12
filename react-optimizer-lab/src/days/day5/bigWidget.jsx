import React from "react";

export default function BigWidget() {
  const start = performance.now();
  while (performance.now() - start < 20) {}
  return <div className="card">BigWidget Loaded (Lazy)</div>;
}
