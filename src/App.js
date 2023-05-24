import Hero from "./components/Hero";
import Work from './components/Work';
import Skills from "./components/Skills";
import Resume from "./components/Resume";
import Contact from "./components/Contact";

function App() {
  return (
    <div className="font-inter">
      <Hero />
      <Work />
      <Skills />
      <Resume />
      <Contact />
    </div>
  );
}

export default App;
