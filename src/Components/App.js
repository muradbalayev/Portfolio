import './App.css';
import 'animate.css';
import Home from './pages/Home';
import Navbar from './pages/Navbar';
import About from './pages/About';
import Skills from './pages/Skills';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="body mx-auto animate__animated animate__fadeIn relative">
      <Navbar />
      <Home />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
