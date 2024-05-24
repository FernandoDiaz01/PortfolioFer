import "./contact.css";
import { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { useTranslation } from "react-i18next";

export const Contact = () => {
  const { t } = useTranslation(["universal"]);
  const form = useRef();
  const [isEmailSent, setIsEmailSent] = useState(false);
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};
    const formElements = form.current.elements;

    if (!formElements.user_name.value.trim()) {
      newErrors.user_name = t("contact.nameError");
    }

    if (!formElements.user_lastname.value.trim()) {
      newErrors.user_lastname = t("contact.lastnameError");
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(formElements.user_email.value.trim())) {
      newErrors.user_email = t("contact.emailError");
    }

    if (!formElements.message.value.trim()) {
      newErrors.message = t("contact.messageError");
    }

    return newErrors;
  };

  const sendEmail = (e) => {
    e.preventDefault();

    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    emailjs
      .sendForm("service_kymuw0q", "template_vagi53p", form.current, {
        publicKey: "veQ9uWwAyGXypzx-e",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setIsEmailSent(true);
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div className="main-container-form">
      <div id="contact" className="contact-title-container">
        <div className="contact-title">{t("contact.title")}</div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="container-contact">
          <label>{t("contact.name")}:</label>
          <input type="text" id="name" name="user_name" required />
          {errors.user_name && <div className="error">{errors.user_name}</div>}

          <label>{t("contact.lastname")}:</label>
          <input type="text" id="lastname" name="user_lastname" required />
          {errors.user_lastname && <div className="error">{errors.user_lastname}</div>}

          <label>{t("contact.email")}:</label>
          <input type="text" id="email" name="user_email" required />
          {errors.user_email && <div className="error">{errors.user_email}</div>}

          <label>{t("contact.message")}:</label>
          <textarea name="message" id="msg"></textarea>
          {errors.message && <div className="error">{errors.message}</div>}
        </div>
        <div className="btn-contact-container">
          <input
            type="submit"
            value={isEmailSent ? t("contact.sent") : t("contact.send")}
          />
        </div>
      </form>
    </div>
  );
};
