import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PlayerPreview from "./PlayerPreview.js";
import PlayerInput from "./PlayerInput.js";

const Battle = () => {
  const [playersData, setPlayersData] = useState({
    playerOneName: "",
    playerTwoName: "",
    playerOneAvatar: null,
    playerTwoAvatar: null,
  });

  const handleSubmit = (id, username) => {
    console.log(username, "user");
    console.log(id, "id");
    setPlayersData((prevState) => ({
      ...prevState,
      [`${id}Name`]: username,
      [`${id}Avatar`]: `https://github.com/${username}.png?size200`,
    }));
  };

  const handleReset = (id) => {
    setPlayersData((prevState) => ({
      ...prevState,
      [`${id}Name`]: "",
      [`${id}Avatar`]: null,
    }));
  };
  return (
    <div>
      <div className="row">
        {!playersData.playerOneAvatar ? (
          <PlayerInput
            id="playerOne"
            onSubmit={handleSubmit}
            label="Player 1"
          />
        ) : (
          <PlayerPreview
            avatar={playersData.playerOneAvatar}
            name={playersData.playerOneName}
          >
            <button className="reset" onClick={() => handleReset("playerOne")}>
              Reset
            </button>
          </PlayerPreview>
        )}
        {!playersData.playerTwoAvatar ? (
          <PlayerInput
            id="playerTwo"
            onSubmit={handleSubmit}
            label="Player 2"
          />
        ) : (
          <PlayerPreview
            avatar={playersData.playerTwoAvatar}
            name={playersData.playerTwoName}
          >
            <button className="reset" onClick={() => handleReset("playerTwo")}>
              Reset
            </button>
          </PlayerPreview>
        )}
      </div>
      {playersData.playerOneAvatar && playersData.playerTwoAvatar ? (
        <Link
          to={{
            pathname: "results",
            search: `?playerOneName=${playersData.playerOneName}&playerTwoName=${playersData.playerTwoName}`,
          }}
          className="button"
        >
          Battle
        </Link>
      ) : null}
    </div>
  );
};

export default Battle;
