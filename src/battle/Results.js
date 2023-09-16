import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../api";
import ResultDetailInfo from "./ResultDetailInfo";

const Results = () => {
  const [winner, setWinner] = useState("");
  const [loser, setLoser] = useState("");
  const [error, setError] = useState("");
  const [showWinnerDetails, setShowWinnerDetails] = useState(false);
  const [showLoserDetails, setShowLoserDetails] = useState(false);

  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    battle([params.get("playerOneName"), params.get("playerTwoName")])
      .then((data) => {
        setWinner(data[0]);
        setLoser(data[1]);
        console.log(data[0].score, "score");
        console.log(data[0].profile.login, "name");
        console.log(data, "data");
      })
      .catch((err) => {
        setError("An error occurred while fetching data");
        console.error(err);
      });
  }, [location.search]);

  const handleUserDetails = (player) => {
    if (player === "winner") {
      setShowWinnerDetails(!showWinnerDetails);
    } else if (player === "loser") {
      setShowLoserDetails(!showLoserDetails);
    }
  };

  return (
    <div className="row">
      <div className="column">
        <h2 className="username">{`Winner: ${winner.profile?.login}`}</h2>
        <img
          className="avatar"
          src={winner.profile?.avatar_url}
          alt="Avatar"
        ></img>
        <h3 className="header">{`Score ${winner.score}`}</h3>
        <button
          className="button"
          onClick={() => {
            handleUserDetails("winner");
          }}
        >
          {showWinnerDetails ? "Hide Details" : "Detail info"}
        </button>
        {showWinnerDetails && (
          <ResultDetailInfo
            location={winner.profile?.location}
            company={winner.profile?.company}
            followers={winner.profile?.followers}
            following={winner.profile?.following}
            publicRepos={winner.profile?.public_repos}
            blog={winner.profile?.blog}
          ></ResultDetailInfo>
        )}
      </div>
      <div className="column">
        <h2 className="username">{`Loser: ${loser.profile?.login}`}</h2>
        <img
          className="avatar"
          src={loser.profile?.avatar_url}
          alt="Avatar"
        ></img>
        <h3 className="header">{`Score ${loser.score}`}</h3>
        <button
          className="button"
          onClick={() => {
            handleUserDetails("loser");
          }}
        >
          {showLoserDetails ? "Hide Details" : "Detail info"}
        </button>
        {showLoserDetails && (
          <ResultDetailInfo
            location={loser.profile?.location}
            company={loser.profile?.company}
            followers={loser.profile?.followers}
            following={loser.profile?.following}
            publicRepos={loser.profile?.public_repos}
            blog={loser.profile?.blog}
          ></ResultDetailInfo>
        )}
      </div>
    </div>
  );
};

export default Results;
