import './App.css';

import Header from './Components/Header/Header';
import Welcome from './Components/Welcome/Welcome';
import Work from './Components/Work/Work';
import Resume from './Components/Resume/Resume';
import Skills from './Components/Skills/Skills';
import Contact from './Components/Contact/Contact';

function App() {
    return (
        <div className='App'>
            <Header />
            <Welcome />
            <Work />
            <Resume />
            <Skills />
            <Contact />
        </div>
    );
}

export default App;
