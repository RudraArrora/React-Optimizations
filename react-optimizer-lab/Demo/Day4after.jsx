import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";
//

//

//

//


export default function Day4After() {
//
 //

  return (
    <ThemeCtx.Provider value={themeValue}>
      <div className="card">
        <h3>Day 4 (After): Only ThemeLabel rerenders</h3>
        <div className="row">
          {/* */}
          <button
            className="btn"
           
          >
            Toggle Theme
          </button>
          <ThemeLabel />
        </div>
        <hr />
        <Heavy />
        <Heavy />
        <Heavy />
        <div className="small">Verify: Heavy counters stay stable.</div>
      </div>
    </ThemeCtx.Provider>
  );
}
