import { Button, ButtonGroup, Dropdown } from "react-bootstrap";
import { LANGUAGE_VERSION } from "../utility/codeEditor/vsCodeEditor";

const languages = Object.entries(LANGUAGE_VERSION);

const LanguageSelector = ({ language, onSelect }) => {
  return (
    <div>
      <div className="ml-2 mb-4 d-flex  gap-3">
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary">{language}</Button>
          <Dropdown.Toggle
            split
            variant="secondary"
            id="dropdown-split-basic"
          />
          <Dropdown.Menu>
            {languages.map(([lang, version]) => (
              <Dropdown.Item
                key={lang}
                active={lang === language}
                onClick={() => onSelect(lang)}
              >
                {lang}
                &nbsp;
                <span style={{ color: "gray", fontSize: "0.875rem" }}>
                  ({version})
                </span>
              </Dropdown.Item>
            ))}
          </Dropdown.Menu>
        </Dropdown>
        <p
          className=" text-primary fw-bold m-0 p-0"
          style={{ marginBottom: "0.5rem", fontSize: "1.25rem" }}
        >
          LANGUAGE SELECT :
        </p>
      </div>
    </div>
  );
};

export default LanguageSelector;
