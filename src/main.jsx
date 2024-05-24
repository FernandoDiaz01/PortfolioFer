import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import './config/i18n.config.js'

ReactDOM.createRoot(document.getElementById("root")).render(
   
    <Router>
      <App />
    </Router>
);
