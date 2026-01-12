import React, { createContext, useContext, useRef, useState } from "react";

function RenderCount({ name }) {
  const c = useRef(0);
  c.current++;
  return (
    <span className="badge">
      {name}: {c.current}
    </span>
  );
}

const AppCtx = createContext(null);

function Heavy() {
  const ctx = useContext(AppCtx); // ❌ subscribed
  const start = performance.now();
  while (performance.now() - start < 8) {}
  return (
    <div className="card">
      <div className="row">
        <b>Heavy Widget</b>
        <span className="badge">theme: {ctx.theme}</span>
        <RenderCount name="Heavy" />
      </div>
    </div>
  );
}

export default function Day4Before() {
  const [theme, setTheme] = useState("dark");

  return (
    <AppCtx.Provider value={{ theme, setTheme }}>
      <div className="card">
        <h3>Day 4 (Before): Context triggers heavy rerenders</h3>
        <button
          className="btn"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
