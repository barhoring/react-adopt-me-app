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

        if (data.petfinder.pets && data.petfinder.pets.pet) {
          if (Array.isArray(data.petfinder.pets.pet)) {
            pets = data.petfinder.pets.pet;
          } else {
            // if length == 1 then need to wrap it in a array
            pets = [data.petfinder.pets.pet];
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
        <div>
          {this.state.pets.map(pet => {
            let breed;

            if (Array.isArray(pet.breeds.breed)) {
              breed = pet.breeds.breed.join(", ");
            } else {
              breed = pet.breeds.breed;
            }
            return (
              <Pet
                key={pet.id}
                animal={pet.animal}
                name={pet.name}
                breed={breed}
                media={pet.media}
                location={`${pet.contact.city} - ${pet.contact.state}`}
              />
            );
          })}
          ;
        </div>
      </div>
    );
  }
}

render(<App />, document.getElementById("root"));
