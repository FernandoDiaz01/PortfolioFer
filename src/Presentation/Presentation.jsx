import { useTranslation } from "react-i18next";
import "./presentation.css";
import { motion } from "framer-motion";

export const Presentation = () => {
  const { t } = useTranslation(["universal"]);

  return (
    <>
      <div className="main-container">
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1, color: "#fff" }}
          transition={{ duration: 1 }}
        >
          <div className="presentation">
            <motion.div>
              <h1 className="h1" data-text="Fernando Diaz">
                Fernando Diaz
              </h1>
            </motion.div>
            <h3 className="h3" data-text="Desarrollador FrontEnd">
              {t("presentation.subtitle", { name: "Frontend" })}
            </h3>
          </div>

          <div className="btn-container">
            <ul>
              <li className="item">
                <a
                  href="https://drive.google.com/file/d/1VDMmTnjVvJaIy-b81UMxX5MBnmPv4OcX/view?usp=sharing"
                  target="_blank"
                  rel="noreferrer"
                  title="Curriculum Vitae"
                >
                  <i className="fa-solid fa-file icon"></i>
                </a>
              </li>
              <li className="item">
                <a
                  href="https://github.com/FernandoDiaz01?tab=repositories"
                  target="_blank"
                  rel="noreferrer"
                  title="Github"
                >
                  <i className="fa-brands fa-github icon"></i>
                </a>
              </li>
              <li className="item">
                <a
                  href="https://www.linkedin.com/in/fernando-d%C3%ADaz-9a49a7201/"
                  target="_blank"
                  rel="noreferrer"
                  title="Linkedln"
                >
                  <i className="fa-brands fa-linkedin icon"></i>
                </a>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </>
  );
};
