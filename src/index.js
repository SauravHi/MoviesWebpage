import { StrictMode } from "react";
import ReactDOM from "react-dom";
import MoviesApp from "./moviesApp";
import { BrowserRouter } from "react-router-dom";
//import App from "./App";
import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.css";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <BrowserRouter>
      <MoviesApp />
    </BrowserRouter>
  </StrictMode>,
  rootElement
);
