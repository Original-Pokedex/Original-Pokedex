import React, { useState } from "react";
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
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    postPokemon();

    setName("");
    setType("");
    setDescription("");
    setImage("");

    props.setbuttonClick(false);
    props.fetchPokemons();
  };

  return (
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
      <button className="button" type="submit">
        Submit
      </button>
    </form>
  );
};
