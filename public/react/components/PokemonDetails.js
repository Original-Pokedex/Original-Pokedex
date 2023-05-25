import React, { useState } from "react";
// import { EditForm } from "./EditForm";
import apiURL from "../api";

export const PokemonDetails = ({ props }) => {
  //   const [showEditForm, setShowEditForm] = useState(false);

  const fetchAllClick = async () => {
    const res = await fetch(`${apiURL}/items`);
    const data = await res.json();
    props.setPokemon(null);
    props.setPokemonList(data);
  };

  const deleteClick = async () => {
    const res = await fetch(`${apiURL}/items/${props.pokemon.id}`, {
      method: "Delete",
    });
    const deletedData = await res.json();
    console.log(deletedData);
    fetchAllClick();
  };

  const editClick = () => {
    setShowEditForm(!showEditForm);
  };

  return (
    <>
      <div className="container">
        <div id="pokemon-details">
          <h2 id="single-pokemon-name">{props.pokemon.name}</h2>
          <img
            src={props.pokemon.image}
            alt={props.pokemon.name}
            width="500"
            height="500"
          />
          <p id="pokemon-type">{props.pokemon.type}</p>
          <p id="pokemon-description">{props.pokemon.description}</p>
        </div>

        <div id="buttons">
          <button className="button" onClick={deleteClick}>
            Delete Item
          </button>
          <button className="button" onClick={fetchAllClick}>
            Back
          </button>
          <button className="button" onClick={editClick}>
            Edit
          </button>
          {/* {showEditForm ? <EditForm props={props} /> : null} */}
        </div>
      </div>
    </>
  );
};
