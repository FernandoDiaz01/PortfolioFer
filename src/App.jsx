import "./App.css";
import { About } from "./About/About.jsx";
import { Presentation } from "./Presentation/Presentation.jsx";
import { Nav } from "./Nav/Nav.jsx";
import Skills from "./Skills/Skills.jsx";
import { Projects } from "./Projects/Projects.jsx";

function App() {
  return (
    <div className="app-container">
      <Nav />
      <Presentation />
      <About />
      <Skills />
      <Projects/>
    </div>
  );
}

export default App;
