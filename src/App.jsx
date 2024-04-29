import "./App.css";
import { About } from "./About/About.jsx";
import { Presentation } from "./Presentation/Presentation.jsx";

import Skills from "./Skills/Skills.jsx";
import { Projects } from "./Projects/Projects.jsx";
import { Navbar } from "./Navbar/Navbar.jsx";

function App() {
  return (
    <div className="app-container">
      <Navbar />
      <Presentation />
      <About />
      <Skills />
      <Projects/>

    </div>
  );
}

export default App;
