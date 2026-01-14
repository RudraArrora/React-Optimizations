import React, { useMemo, useRef, useState } from "react";
{
  /* */
}

export default function Day2Before() {
//
//

  //
 //

{
  /* */
}

  return (
    <div className="card">
      <h3>Day 2 (Before): useMemo still recomputes</h3>
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
        Console: toggling should NOT run filter, but it does.
      </div>
      {/* */}
      <span className="badge"></span>
    </div>
  );
}
