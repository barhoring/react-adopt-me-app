import React from "react";
import { render } from "react-dom";
import Pet from "./Pet";
// at the top
import pf from "petfinder-client";

// under imports
// Note (April 2nd, 2019): You no longer need real API keys, Petfinder Client will still work
const petfinder = pf({
  key: process.env.API_KEY,
  secret: process.env.API_SECRET
});

class App extends React.Component {
  // inside class, above render
  componentDidMount() {
    petfinder.breed.list({ animal: "bird" }).then(console.log, console.error);
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <Pet name="Luna" animal="Dog" breed="Havanese" />
        <Pet name="Pepper" animal="Bird" breed="Cacatoo" />
        <Pet name="Doink" animal="Cat" breed="Persian" />
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
