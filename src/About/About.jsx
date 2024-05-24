import { useTranslation } from "react-i18next";
import img from "../assets/FotoPortfolio.png";
import "./about.css";

export const About = () => {
  const { t } = useTranslation(["universal"]);

  return (
    <>
      <div className="title" id="presentation">
        <h6> {t("about.title")}</h6>
      </div>
      <div className="about-container">
        <div className="container-img">
          <img className="img-about" src={img} alt="imgportfolio" />
        </div>

        <div className="text">
          <p className="text-about">{t("about.about")}</p>
        </div>
      </div>
    </>
  );
};
