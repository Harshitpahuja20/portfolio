import "./App.css";
import HomePage from "./Components/HomePage";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Footer from "./Components/Footer";
import Tools from "./Components/Tools";
import Skills from "./Components/Skills";
import Contact from "./Components/Contact";
import Projects from "./Components/Projects";

function App() {
  return (
    <>
      <Navbar />
      <HomePage/>
      <About/>
      <Projects/>
      <Skills/>
      <Tools/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
