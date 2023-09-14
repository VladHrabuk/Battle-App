import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { battle } from "../api";

const Results = () => {
  const location = useLocation();
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    battle([params.get("playerOneName"), params.get("playerTwoName")]).then(
      (data) => console.log(data, "data")
    );
  }, []);

  return <div className="row"></div>;
};

export default Results;
