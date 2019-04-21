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
  constructor(props) {
    super(props);

    this.state = {
      pets: []
    };
  }

  componentDidMount() {
    // petfinder.breed.list({ animal: "bird" }).then(console.log, console.error);
    petfinder.pet
      .find({ output: "full", location: "Seattle, WA" })
      .then(data => {
        let pets;

        if (data.petfinder.pets && data.petfinder.pets) {
          if (Array.isArray(data.petfinder.pets)) {
            pets = data.petfinder.pets;
          } else {
            // if length == 1 then need to wrap it in a array
            pets = [data.petfinder.pets];
          }
        } else {
          pets = [];
        }

        this.setState({ pets });
      });
  }
  render() {
    return (
      <div>
        <h1>Adopt Me!</h1>
        <pre>
          <code>{JSON.stringify(this.state, null, 4)}</code>
        </pre>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
