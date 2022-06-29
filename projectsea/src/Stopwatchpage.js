import React from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Stopwatch from "./components/Stopwatch";

function Stopwatchpage() {
  return (
    <ScopedCssBaseline>
      <Stopwatch />
    </ScopedCssBaseline>
  );
}

export default Stopwatchpage;