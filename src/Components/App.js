import './App.css';
import 'animate.css';
import Profile from './Profile';
import Navbar from './Navbar';
import About from './About';


function App() {
  return (
    <div className="body mx-auto animate__animated animate__fadeIn relative">
      <Navbar />
      <Profile />
      <About />
    </div>
  );
}

export default App;
