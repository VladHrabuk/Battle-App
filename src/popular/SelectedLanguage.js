import { memo } from "react";
import { useSearchParams } from "react-router-dom";

const languages = ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"];

const SelectedLanguage = memo(
  ({ selectedLanguage, setSelectedLanguage, blockTab }) => {
    const [searchParams, setSearchParams] = useSearchParams();

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
              <li
                key={index}
                style={{
                  color: language === selectedLanguage ? "#d0021b" : "#000000",
                }}
                disabled={blockTab}
                onClick={() => {
                  if (!blockTab) setSelectedLanguage(language);
                }}
              >
                {language}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
);

export default SelectedLanguage;
