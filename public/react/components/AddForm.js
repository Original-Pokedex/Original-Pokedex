import React, { useState } from "react";
import { Pokemon } from "./Pokemon";
import apiURL from "../api";

export const AddForm = (props) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const pokeData = {
    name: name,
    type: type,
    description: description,
    image: image,
  };

  const postPokemon = async () => {
    try {
      const res = await fetch(`${apiURL}/pokemons`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(pokeData),
      });
      const newData = await res.json();
      props.setpokemons([...props.pokemon, newData]);
      fetchAllClick();
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  };

  const handleSubmit = () => {
    postPokemon();

    setName("");
    setType("");
    setDescription("");
    setImage("");

    props.fetchPokemons();
  };

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Name"
          name="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Type"
          name="type"
          value={type}
          onChange={(e) => setType(e.target.value)}
        />
        <input
          type="text"
          placeholder="Description"
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <input
          type="text"
          placeholder="Image URL"
          name="image"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />
        <button className="button" id="submit" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};
