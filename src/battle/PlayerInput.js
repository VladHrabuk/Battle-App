import { useState } from "react";

const PlayerInput = ({ id, onSubmit, label }) => {
  const [username, setUsername] = useState("");

  const handlerSubmit = (event) => {
    event.preventDefault();
    onSubmit(id, username);
  };

  return (
    <form className="column" onSubmit={handlerSubmit}>
      <label className="header" htmlFor="username">
        {label}
      </label>
      <input
        id="username"
        type="text"
        placeholder="Github username"
        autoComplete="off"
        value={username}
        onChange={(event) => {
          setUsername(event.target.value);
        }}
      ></input>
      <button className="button" type="submit" disabled={!username}>
        Submit
      </button>
    </form>
  );
};

export default PlayerInput;
