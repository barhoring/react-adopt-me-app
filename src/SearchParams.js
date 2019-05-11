import React from "react";
import { ANIMALS } from "petfinder-client";

class SearchParams extends React.Component {
  render() {
    return (
      <div className="search-params">
        <label htmlFor="location">
          {this.state.location}
          <input
            onChange={this.handleLocationChange}
            id="location"
            value={this.state.location}
            placeholder="location"
          />
        </label>
        <label htmlFor="animal">
          Animal
          <select
            id="animal"
            value={this.state.animal}
            onChange={this.handleAnimalChange}
            onBlur={this.handleAnimalChange}
          >
            <option />
            {ANIMALS.map(animal => (
              <option key={animal} value={animal}>
                {animal}
              </option>
            ))}
          </select>
        </label>
        <label htmlFor="breed">
          Breed
          <select
            id="breed"
            value={this.state.breed}
            onChange={this.handleBreedChange}
            onBlur={this.handleBreedChange}
            disabled={!this.state.animal}
          >
            <option />
            {this.state.breeds.map(breed => (
              <option key={breed} value={breed}>
                {breed}
              </option>
            ))}
          </select>
        </label>
        <button>Submit</button>
      </div>
    );
  }
}

export default SearchParams;
