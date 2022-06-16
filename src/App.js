import './App.css';

import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';
import Work from './Components/Work/Work';
import Resume from './Components/Resume/Resume';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Welcome />
      <Work />
      <Resume />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
