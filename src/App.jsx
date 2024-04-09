import "./App.css";
import { About } from "./About/About.jsx";
import { Presentation } from "./Presentation/Presentation.jsx";

import Skills from "./Skills/Skills.jsx";
import { Projects } from "./Projects/Projects.jsx";

function App() {
  return (
    <div className="app-container">

      <Presentation />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
