import React, { useMemo, useRef, useState } from "react";

{
  /* */
}

export default function Day2After() {
 //
  //

{
  /* */
}

{
  /* */
}

  return (
    <div className="card">
      <h3>Day 2 (After): stable deps → no extra compute</h3>
      <div className="row">
        {/* */}
        <input className="input" value={query} />
        {/* */}
        <button className="btn2">Toggle</button>
        <span className="badge">toggle: {String(toggle)}</span>
        <RenderCount name="Page" />
      </div>
      <hr />
      <div className="small">
        Verify: toggle should not increase “FILTER RUNS (after)”.
      </div>
      {/* */}
      <span className="badge"></span>
    </div>
  );
}
