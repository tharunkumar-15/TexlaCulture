import { render } from "react-dom";
import { StyledEngineProvider } from "@mui/material";
import App from "./App";

const rootElement = document.getElementById("root");
render(
  <StyledEngineProvider injectFirst>
    <App />{" "}
  </StyledEngineProvider>,
  rootElement
);