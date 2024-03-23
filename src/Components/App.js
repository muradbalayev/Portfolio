import './App.css';
import 'animate.css';
import Home from './Home';
import Navbar from './Navbar';
import About from './About';
import Skills from './Skills';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

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
