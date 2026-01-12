import React, { useState } from "react";

import Day1Before from "./days/day1/before.jsx";
import Day1After from "./days/day1/after.jsx";
import Day2After from "./days/day2/after.jsx";
import Day2Before from "./days/day2/before.jsx";
import Day3After from "./days/day3/after.jsx";
import Day3Before from "./days/day3/before.jsx";
import Day4After from "./days/day4/after.jsx";
import Day4Before from "./days/day4/before.jsx";
import Day5After from "./days/day5/after.jsx";
import Day5Before from "./days/day5/before.jsx";

const pages = [
  ["Day1 Before", <Day1Before />],
  ["Day1 After", <Day1After />],
  ["Day2 Before", <Day2Before />],
  ["Day2 After", <Day2After />],
  ["Day3 Before", <Day3Before />],
  ["Day3 After", <Day3After />],
  ["Day4 Before", <Day4Before />],
  ["Day4 After", <Day4After />],
  ["Day5 Before", <Day5Before />],
  ["Day5 After", <Day5After />],
];

export default function App() {
  const [i, setI] = useState(0);

  return (
    <div className="container">
      <div className="card">
        <div className="row">
          {pages.map(([name], idx) => (
            <button
              key={name}
              className={idx === i ? "btn" : "btn2"}
              onClick={() => setI(idx)}
            >
              {name}
            </button>
          ))}
        </div>
        <div className="small" style={{ marginTop: 10 }}>
          Lab loop: <b>Problem → Measure → Hypothesis → Fix → Verify</b>
        </div>
      </div>

      {pages[i][1]}
    </div>
  );
}
