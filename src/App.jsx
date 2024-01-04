import { About } from './About/About.jsx'
import {Presentation} from './Presentation/Presentation.jsx'
import './App.css'
import { Skills } from './Skills/Skills.jsx'
import { Nav } from './Nav/Nav.jsx'
import styled from 'styled-components'



function App() {

  const BodyContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
  `;

  const Section = styled.div`
    flex: 1;
  `;


  return (
    <BodyContainer>
      <Section>
        <Nav />
      </Section>
      <Section>
        <Presentation />
      </Section>
      <Section>
        <About />
      </Section>
      <Section>
        <Skills />
      </Section>
    </BodyContainer>
  )
}

export default App
