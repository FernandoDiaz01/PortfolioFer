import { useTranslation } from "react-i18next";

import "./navbar.css";

export const Navbar = () => {
  const { t, i18n } = useTranslation(["universal"]);

  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  };

  return (
    <div className="navbar-container">
      <ul className="list-container">
        <li>
          <a href="#presentation">{t("navbar.presentation")}</a>
        </li>
        <li>
          <a href="#projects">{t("navbar.projects")}</a>
        </li>
        <li>
          <a href="#skills">{t("navbar.skills")}</a>
        </li>
        <li>
          <a href="#contact">{t("navbar.contact")}</a>
        </li>
      </ul>
      <div className="language-buttons">
        <button
          className="btn-change-language"
          onClick={() => changeLanguage("es")}
        >
          ES
        </button>
        <button
          className="btn-change-language"
          onClick={() => changeLanguage("en")}
        >
          EN
        </button>
      </div>
    </div>
  );
};
