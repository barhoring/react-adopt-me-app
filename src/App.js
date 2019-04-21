import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";

class App extends React.Component {
  render() {
    return React.createElement("div", {}, [
      React.createElement("h1", {}, "Adopt Me now!"),
      React.createElement(Pet, {
        name: "Luna",
        animal: "Dog",
        breed: "Havanise"
      }),
      React.createElement(Pet, {
        name: "Tuktuk",
        animal: "Parrot",
        breed: "Cacatoo"
      }),
      React.createElement(Pet, {
        name: "Pegasus",
        animal: "Hourse",
        breed: "Arab"
      })
    ]);
  }
}
render(React.createElement(App), document.getElementById("root"));
