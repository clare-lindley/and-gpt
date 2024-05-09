import React from "react";
import ReactDOM from "react-dom";
import { App } from "./App.js";

const name = React.createElement("div", { id: "name" }, "Caroline Hatwell");

const list = [
  React.createElement("li", {}, "pig"),
  React.createElement("li", {}, "bee"),
  React.createElement("li", {}, "bear"),
];

const ol = React.createElement("ol", { className: "main" }, list);

const main = React.createElement("div", { className: "main" }, [name, ol]);

const rootElement = document.getElementById("root");
const root = ReactDOM.createRoot(rootElement);

ReactDOM.render(main, document.getElementById("root"));
