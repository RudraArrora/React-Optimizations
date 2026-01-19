import React, { createContext, useContext, useRef, useState } from "react";
//

//

//

export default function Day4Before() {
  //

  return (
    <AppCtx.Provider value={{ theme, setTheme }}>
      <div className="card">
        <h3>Day 4 (Before): Context triggers heavy rerenders</h3>
        {/* */}
        <button
          className="btn"
          
        >
          Toggle Theme
        </button>
        <hr />
        <Heavy />
        <Heavy />
        <Heavy />
      </div>
    </AppCtx.Provider>
  );
}
