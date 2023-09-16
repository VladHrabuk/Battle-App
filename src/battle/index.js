import { useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import PlayerPreview from "./PlayerPreview.js";
import PlayerInput from "./PlayerInput.js";

const Battle = () => {
  const [playersData, setPlayersData] = useState({
    playerOneName: "",
    playerTwoName: "",
    playerOneLocation: "",
    playerTwoLocation: "",
    playerOneCompany: "",
    playerTwoCompany: "",
    playerOneFollowers: "",
    playerTwoFollowers: "",
    playerOneFollowing: "",
    playerTwoFollowing: "",
    playerOnePublicRepos: "",
    playerTwoPublicRepos: "",
    playerOneBlog: "",
    playerTwoBlog: "",
    playerOneAvatar: null,
    playerTwoAvatar: null,
  });

  const handleSubmit = async (id, username) => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (!response.ok) {
      throw new Error(
        `GitHub API request failed with status ${response.status}`
      );
    }
    const userData = await response.json();
    const userLocation = userData.location;
    const userCompanyData = userData.company;
    const userCompany = userCompanyData ? userCompanyData : "No company";
    const userFollowers = `${userData.followers} followers`;
    const userFollowing = `${userData.following} following`;
    const userPublicRepos = `${userData.public_repos} public repos`;
    const userBlog = `blog: ${userData.blog}`;
    setPlayersData((prevState) => ({
      ...prevState,
      [`${id}Name`]: username,
      [`${id}Avatar`]: `https://github.com/${username}.png?size200`,
      [`${id}Location`]: userLocation,
      [`${id}Company`]: userCompany,
      [`${id}Followers`]: userFollowers,
      [`${id}Following`]: userFollowing,
      [`${id}PublicRepos`]: userPublicRepos,
      [`${id}Blog`]: userBlog,
    }));
  };

  const handleReset = (id) => {
    setPlayersData((prevState) => ({
      ...prevState,
      [`${id}Name`]: "",
      [`${id}Avatar`]: null,
      [`${id}Location`]: "",
      [`${id}Company`]: "",
      [`${id}Followers`]: "",
      [`${id}Following`]: "",
      [`${id}Blog`]: "",
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
            location={playersData.playerOneLocation}
            company={playersData.playerOneCompany}
            followers={playersData.playerOneFollowers}
            following={playersData.playerOneFollowing}
            publicRepos={playersData.playerOnePublicRepos}
            blog={playersData.playerOneBlog}
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
            location={playersData.playerTwoLocation}
            company={playersData.playerTwoCompany}
            followers={playersData.playerTwoFollowers}
            following={playersData.playerTwoFollowing}
            publicRepos={playersData.playerTwoPublicRepos}
            blog={playersData.playerTwoBlog}
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
