import React, { useRef, useState } from "react";

{/* */}

function Child({ label }) {
//
//
  return (
    <div className="card">
      <div className="row">
        {/* */}
        <b></b>
        {/* */}
      </div>
    </div>
  );
}

export default function Day1Before() {
//

  return (
    <div className="card">
      <h3>Day 1 (Before): Every click rerenders ALL children</h3>
      <div className="row">
        {/* */}
        <button className="btn">+ Count</button>
        {/* */}
        <span className="badge">count:</span>
        <RenderCount name="Page" />
      </div>
      <hr />
      {/* */}
      <div className="small">
        Measure: child counters increase on every click.
      </div>
    </div>
  );
}
