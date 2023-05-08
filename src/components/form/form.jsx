import { useState } from "react";
import "./form-css.css";
import Inputs from "../inputs/";
import OptionsList from "../optionsInput";
import BtnCreate from "../button";

const Form = (props) => {
  const [name, updateName] = useState("");
  const [position, updatePosition] = useState("");
  const [photo, updatePhoto] = useState("");
  const [team, updateTeam] = useState("");
  const [title, updateTitle] = useState("");
  const [color, updateColor] = useState("");

  const { registerWorker, createTeam } = props;

  const handlingEvent = (e) => {
    e.preventDefault();
    let data = {
      name,
      position,
      photo,
      team,
    };

    registerWorker(data);
  };

  const handleNewTeam = (e) => {
    e.preventDefault();
    createTeam({ title, mainColor: color });
  };

  return (
    <section className="form">
      <form onSubmit={handlingEvent}>
        <h2>Fill the data to create new entry</h2>
        <Inputs
          field="Name"
          placeholder="Add name"
          required={true}
          valor={name}
          updateValue={updateName}
        />
        <Inputs
          field="Position"
          placeholder="Add position"
          required
          valor={position}
          updateValue={updatePosition}
        />
        <Inputs
          field="Photo"
          placeholder="Add URL of the photo"
          required
          valor={photo}
          updateValue={updatePhoto}
        />
        <OptionsList valor={team} updateTeam={updateTeam} teams={props.teams} />
        <BtnCreate value="Create worker" />
      </form>
      <form onSubmit={handleNewTeam}>
        <h2>Fill to create new team</h2>
        <Inputs
          field="Position"
          placeholder="Add position"
          required={true}
          valor={title}
          updateValue={updateTitle}
        />
        <Inputs
          field="Color"
          placeholder="Add color (hex)"
          required
          valor={color}
          updateValue={updateColor}
          type="color"
        />
        <BtnCreate value="Create team" />
      </form>
    </section>
  );
};

export default Form;
