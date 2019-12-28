import * as React from "react";
import * as ReactDOM from "react-dom";
import { Header } from "./header";
import { CustomDate } from "./custom-date";
import { FruitLoops } from "./fruit-loops";

let fruit = [
  "red",
  "green",
  "blue",
  "orange",
  "brown",
  "pink",
  "purple",
  "black",
  "grey"
];
ReactDOM.render(
  <div>
    <Header text="Halloo" />
    <CustomDate />
    <FruitLoops fruit={fruit} />
    <p>This is a paragrahp</p>
    <a href="#">Click Me</a>
  </div>,
  document.querySelector("#root")
);
