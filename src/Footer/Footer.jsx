import "./footer.css";
import { useTranslation } from "react-i18next";

export const Footer = () => {
  const { t } = useTranslation(["universal"]);

  return (
    <>
      <hr />
      <div className="footer-container">
        <div className="text-footer">
          {" "}
          {t("footer.copyright", { name: "Fernando Diaz" })}{" "}
        </div>
      </div>
    </>
  );
};
