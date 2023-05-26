import React, { useState } from "react";
import apiURL from "../api";

export const EditForm = ({ props }) => {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");

  const pokeData = {
    name: name,
    description: description,
    type: type,
    image: image,
  };

  const updatePokemon = async () => {
    try {
      const res = await fetch(`${apiURL}/pokemons/${props.pokemon.id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(pokeData),
      });
      const data = await res.json();
      props.setSinglePokemon([data]);
    } catch (err) {
      console.log("Oh no an error! ", err);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    updatePokemon();

    setName("");
    setType("");
    setDescription("");
    setImage("");
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
      <br />
      <input
        type="text"
        placeholder="Type"
        name="type"
        value={type}
        onChange={(e) => setType(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Description"
        name="description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Image URL"
        name="image"
        value={image}
        onChange={(e) => setImage(e.target.value)}
      />
      <br />
      <button className="button" type="submit">Submit Changes</button>
    </form>
  );
};
