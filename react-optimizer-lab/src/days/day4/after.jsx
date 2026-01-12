import React, {
  createContext,
  useContext,
  useMemo,
  useRef,
  useState,
} from "react";

function RenderCount({ name }) {
  const c = useRef(0);
  c.current++;
  return (
    <span className="badge">
      {name}: {c.current}
    </span>
  );
}

const ThemeCtx = createContext("dark");

const Heavy = React.memo(function Heavy() {
  const start = performance.now();
  while (performance.now() - start < 8) {}
  return (
    <div className="card">
      <div className="row">
        <b>Heavy Widget</b>
        <RenderCount name="Heavy" />
      </div>
    </div>
  );
});

function ThemeLabel() {
  const theme = useContext(ThemeCtx); // ✅ only small subscribes
  return <span className="badge">theme: {theme}</span>;
}

export default function Day4After() {
  const [theme, setTheme] = useState("dark");
  const themeValue = useMemo(() => theme, [theme]);

  return (
    <ThemeCtx.Provider value={themeValue}>
      <div className="card">
        <h3>Day 4 (After): Only ThemeLabel rerenders</h3>
        <div className="row">
          <button
            className="btn"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
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
