import { StrictMode } from "react";
import { render } from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import { Reset } from "./cssReset";
import { GlobalStyles } from "./globalStyles";

import { BrowserRouter as Router } from "react-router-dom";

render(
  <StrictMode>
    <Reset />
    <GlobalStyles />
    <Router>
      <App />
    </Router>
  </StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
