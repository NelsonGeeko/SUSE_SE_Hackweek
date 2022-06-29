import React from "react";
import ScopedCssBaseline from "@material-ui/core/ScopedCssBaseline";
import Stopwatch from "./components/Stopwatch";

function pageStopwatch() {
  return (
    <ScopedCssBaseline>
      <Stopwatch />
    </ScopedCssBaseline>
  );
}

export default pageStopwatch;