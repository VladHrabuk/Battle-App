import { useState, useEffect } from "react";
import { fetchPopularRepos } from "../api.js";
import SelectedLanguage from "./SelectedLanguage.js";
import Repos from "./Repos.js";
import DotLoader from "react-spinners/DotLoader";

const Popular = () => {
  const [selectedLanguage, setSelectedLanguage] = useState("All");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [repos, setRepos] = useState([]);
  const [blockTab, setBlockTab] = useState(false);

  useEffect(() => {
    setLoading(true);
    setBlockTab(true);
    fetchPopularRepos(selectedLanguage)
      .then((data) => {
        setRepos(data);
      })
      .catch((error) => setError(error))
      .finally(() => setLoading(false), setBlockTab(false));
  }, [selectedLanguage]);

  if (error) {
    return "Error";
  }

  return (
    <>
      {
        <SelectedLanguage
          selectedLanguage={selectedLanguage}
          setSelectedLanguage={setSelectedLanguage}
          blockTab={blockTab}
        />
      }
      {!loading ? (
        <Repos repos={repos} />
      ) : (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            height: "75vh",
          }}
        >
          <DotLoader color="#000000" size={90} />
        </div>
      )}
    </>
  );
};

export default Popular;
