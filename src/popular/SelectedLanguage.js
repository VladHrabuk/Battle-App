import { memo, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const SelectedLanguage = memo(
  ({ selectedLanguage, setSelectedLanguage, blockTab }) => {
    const [searchParams, setSearchParams] = useSearchParams();

    useEffect(() => {
      const languageParam = searchParams.get("language");

      if (languageParam && languages.includes(languageParam)) {
        setSelectedLanguage(languageParam);
      } else {
        setSelectedLanguage("All");
      }
    }, [searchParams, setSelectedLanguage]);

    const handleLanguageChange = (language) => {
      if (!blockTab) {
        setSelectedLanguage(language);
        setSearchParams({ language: language.toLowerCase() });
      }
    };

    return (
      <div>
        <ul
          className="languages"
          style={{
            pointerEvents: blockTab ? "none" : "auto",
          }}
        >
          {languages.map((language, index) => {
            return (
              <Link
                key={index}
                style={{
                  color: language === selectedLanguage ? "#d0021b" : "#000000",
                  padding: "5px",
                  fontWeight: "bold",
                }}
                disabled={blockTab}
                onClick={() => {
                  handleLanguageChange(language);
                }}
                to={`/popular/${language.toLowerCase()}`}
              >
                {language}
              </Link>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default SelectedLanguage;
