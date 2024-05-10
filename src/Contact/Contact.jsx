import './contact.css'
import  { useRef,useState } from 'react';
import emailjs from '@emailjs/browser';
export const Contact = () => {

  const form = useRef();
const [isEmailSent, setIsEmailSent] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kymuw0q', 'template_vagi53p', form.current, {
        publicKey: 'veQ9uWwAyGXypzx-e',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          setIsEmailSent(true)
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };
  return (
    <div>
      <div id="contact" className="contact-title-container">
        <div className="contact-title">Contact</div>
      </div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="container-contact">
        <label>Name:</label>
        <input type="text" id="name" name="user_name" required />

        <label>Email:</label>
        <input type="text" id="email" name="user_email" required />

        <label>Message:</label>
        <textarea name="message" id="msg"></textarea>
        
        </div>
        <div className="btn-contact-container">
        <input
            type="submit"
            value={isEmailSent ? "Mail sent correctly!" : "Send"}
          />
        </div>
      </form>
   
    </div>
  );
};
